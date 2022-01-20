import {MenuService} from "../services/menuService.js";
import {DishService} from "../services/dishService.js";


export const postMenu = async (req, res) => {
  const {body} = req;
  const {id, name, restaurantName, dishes} = body || {};
  try {
    //todo add transaction to both operations
    await MenuService.create(id, name, restaurantName, dishes.length);
    await DishService.create(dishes)
    res.status(201);
  } catch (err) {
    res.status(500);
  }
  return res.send();
};

export const getById = async (req, res) => {
  const {params} = req;
  const {id} = params || {};
  if (!params?.id) return res.json({data: []});
  return res.json({menu: await MenuService.getById(id)});
};
