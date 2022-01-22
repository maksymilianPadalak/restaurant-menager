import {MenuService} from "../services/menuService.js";
import {DishService} from "../services/dishService.js";
import databaseProvider from "../DataBaseProvider.js";


export const postMenu = async (req, res) => {
  const {body} = req;
  const {name, restaurantName, dishes} = body || {};
  try {
    //todo add transaction to both operations
    const action = async () => {
      let menu = await MenuService.create({name,restaurantName}, dishes.length);
      await DishService.createDishes(dishes, menu.id)
    }
    await databaseProvider.transaction(action)
    res.status(201);
  } catch (err) {
    res.status(500);
  }
  return res.send();
};

export const updateMenu = async (req,res) => {
  const {body} = req;
  const {id, name, restaurantName, dishes} = body || {};
  try {
    await MenuService.update(id, {name, restaurantName});
    await DishService.updateDishes(dishes)
    res.status(201);
  } catch (err) {
    res.status(500);
  }
  return res.send();
}

export const getById = async (req, res) => {
const {params} = req;
  const {id} = params || {};
  if (!params?.id) return res.json({data: []});
  let menu = await MenuService.getById(id)
  let dishes = await DishService.getAllByMenuId(id)
  return res.json({menu: menu, dishes: dishes});
};
