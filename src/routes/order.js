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

export const getOrderById = async (req, res) => {
    const {params} = req;
    const {id} = params || {};
    if (!params?.id) return res.json({data: []});
    let order = await OrderService.getById(id)
    return res.json(order);
};

export const getOrders = async (req, res) => {
    let orders = await OrderService.getAll()
    return res.json(orders);
    };