import {
  createMenu
} from "../models/Menu.js";

export const ExampleService = {
  read: async (id) => (await getOneExample({where: {id}})) || null,
  readAll: async () => (await getAllExample()) || [],
  create: async (id, name, restaurantName, dishesCount) => {
    await createMenu({
      id,
      name,
      restaurant_name: restaurantName,
    }, dishesCount)
  },
  update: async (id, fieldsToUpdate) =>
    await updateExample({where: {id}}, fieldsToUpdate),
  delete: async (id) => await deleteExample({where: {id}}),
};
