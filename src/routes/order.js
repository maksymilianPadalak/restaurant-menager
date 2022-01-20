import { OrderService } from '../services/orderService.js';

export const postOrder = (req, res) => {
    const { body } = req;
    const { tableNumber, takeAway, dishes } = body || {};
    try {
        OrderService.create(1, true, dishes);
        if (body) {
            return res.send(200);
        }
    } catch (err) {
        return res.send(500);
    }
};
