import {
  createMenu,
  getById, updateMenu
} from "../models/Menu.js";

export const MenuService = {
  getById: async (id) => (await getById(id)) || null,
  readAll: async () => (await getAllExample()) || [],
  create: async (id, name, restaurantName, dishesCount) => {
    await createMenu({
      id,
      name,
      restaurant_name: restaurantName,
    }, dishesCount)
  },
  update: async (id, fieldsToUpdate) =>
    await updateMenu({where: {id}}, fieldsToUpdate),
  delete: async (id) => await deleteExample({where: {id}}),
};
