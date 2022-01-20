import { getDishesByIds } from '../models/dish.js';

export const OrderService = {
    create: async (tableNumber, takeAway, dishesRequest) => {
        let globalDishesRequest = dishesRequest;
        const dishesIds = [];
        dishesRequest.forEach((dish) => {
            dishesIds.push(dish.id);
        });
        await getDishesByIds(dishesIds).then((dishes) => {
            const dishesPrices = [];
            dishes.forEach((dish) => {
                dishesPrices.push(
                    dish.price *
                        globalDishesRequest.find(
                            (gloabalDish) => dish.id === gloabalDish.id,
                        ).quantity,
                );
            });
            const reducer = (acc, curr) => acc + curr;
            const orderPrice = dishesPrices.reduce(reducer);
        });
    },
};
