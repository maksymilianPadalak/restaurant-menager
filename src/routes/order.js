import { OrderService } from '../services/orderService.js';

export const postOrder = (req, res) => {
    const { body } = req;
    const { tableNumber, takeAway, dishes } = body || {};
    try {
        const getOrderId = OrderService.create(tableNumber, takeAway, dishes);
        getOrderId.then(orderId => {
            if (body) {
                return res.status(201).send({'orderId': orderId});
        }
    });

    } catch (err) {
        return res.send(500);
    }
};

export const updateOrder = async (req,res) => {
    const {body} = req;
    const {id, status} = body || {};
    try {
      await OrderService.update(id, status);
      res.status(201);
    } catch (err) {
      res.status(500);
    }
    return res.send();
  }
