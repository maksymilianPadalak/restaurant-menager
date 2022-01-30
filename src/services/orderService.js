import { getDishesByIds } from '../models/dish.js';
import {createOrder, updateOrder, getById, getAll} from "../models/order.js";
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
            status: "PENDING",
            placedAt: new Date()};
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
    getById: async (id) => (await getById(id)) || null,
    getAll: async () => (await getAll()) || null,
    update: async (id, status) => {
        let order = {status};
        if (status == "COMPLETED") {
            order.completedAt = new Date();
        }
        await updateOrder({where: {id}}, order);
    }
    
};
