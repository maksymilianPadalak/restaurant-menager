import {createDish} from "../models/dish.js";

export const DishService = {
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
    }

};


