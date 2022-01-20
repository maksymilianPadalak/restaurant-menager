import { ExampleService } from "../services/menuService.js";
import {DishService} from "../services/dishService.js";


export const postMenu = async (req, res) => {
  const { body } = req;
  const { id, name, restaurantName, dishes } = body || {};
  try {
    await ExampleService.create(id, name, restaurantName, dishes.length);
    await DishService.create(dishes)
    res.status(201);
  } catch (err) {
    res.status(500);
  }
  return res.send();
};
