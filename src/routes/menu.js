import { ExampleService } from "../services/menuService.js";

const checkIfNumberOfDishesCorrect = (menu) => {
    let numberOfDishes = 0;
    for (const category of menu.categories) {
        numberOfDishes += category.dishes.length;
    }
    console.log(numberOfDishes);
    if (numberOfDishes < 12) {
        return false;
    } else {
        return true;
    }
};


export const postMenu = async (req, res) => {
const { body } = req;
  const { id, name, restaurantName } = body || {};
  try {
    await ExampleService.create(id, name, restaurantName);
    res.status(201);
  } catch (err) {
      console.log(err)
    res.status(500);
  }
  return res.send();
};
