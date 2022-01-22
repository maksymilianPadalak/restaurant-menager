import {createDish, getDishesByIds, getByMenuId, updateDishes} from "../models/dish.js";

export const DishService = {
    getAllByMenuId: async (menuId) => (await getByMenuId(menuId)) || null,
    createDishes: async (dishes, menuId) => {
        for (const dish of dishes) {
            dish.menuId = menuId
            await createDish(dish)
        }
    },
  updateDishes: async (dishes) => await updateDishes(dishes),
    getAllByIds: async (dishesIds) => {
      return await getDishesByIds(dishesIds) || []
    },

};


