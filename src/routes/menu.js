import { ExampleService } from "../services/menuService.js";



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

