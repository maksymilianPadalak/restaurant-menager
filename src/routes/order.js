import { OrderService } from '../services/orderService.js';

export const postOrder = (req, res) => {
    const { body } = req;
    const { tableNumber, takeAway, dishes } = body || {};
    console.log(tableNumber);
    try {
        OrderService.create(tableNumber, takeAway, dishes);
        if (body) {
            return res.send(200);
        }
    } catch (err) {
        return res.send(500);
    }
};
