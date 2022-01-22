import {createDish, getDishesByIds, getByMenuId} from "../models/dish.js";

export const DishService = {
    getAllByMenuId: async (menuId) => (await getByMenuId(menuId)) || null,
    create: async (dishes) => {
        for (const dish of dishes) {
            let {id, name, price, category, menuId} = dish
            await createDish({
                id,
                name,
                price,
                category,
                menu_id: menuId
            })
        }
    },
  updateDishes: async (dishes) => await updateDishes(dishes),
    getAllByIds: async (dishesIds) => {
      return await getDishesByIds(dishesIds) || []
    },

};


