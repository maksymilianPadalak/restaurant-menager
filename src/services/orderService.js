import { getDishesByIds } from '../models/dish.js';
import {createOrder, updateOrder} from "../models/order.js";
import {createDishOrder} from "../models/dishOrder.js";

export const OrderService = {
    create: async (tableNumber, takeAway, dishesRequest) => {
        let globalDishesRequest = dishesRequest;
        let globalTableNumber = tableNumber;
        let globalTakeAway = takeAway;
        const dishesIds = [];
        dishesRequest.forEach((dish) => {
            dishesIds.push(dish.id);
        });
        let dishes = await getDishesByIds(dishesIds);
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
        const order = {
            price: orderPrice, 
            tableNumber: globalTableNumber, 
            takeAway: globalTakeAway,
            status: "PENDING"};
        let insertedOrder = await createOrder(order);
        dishes.forEach((dish) => {
            let dishOrder = {
                dishId: dish.id, 
                orderId:insertedOrder.id,
                quantity: globalDishesRequest.find(
                    (gloabalDish) => dish.id === gloabalDish.id,
                ).quantity
            }
            createDishOrder(dishOrder);
        });
        
        return insertedOrder.id;
    },
    update: async (id, status) =>
    await updateOrder({where: {id}}, status)
};
