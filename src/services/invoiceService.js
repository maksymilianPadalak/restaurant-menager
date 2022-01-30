import {OrderService} from "./orderService.js";
import CurrencyService from "./currencyService.js";

export const InvoiceService = {
    getByOrderId: async (id, currency) => {
        const order = await OrderService.getById(id);
        if (currency !== undefined) {
            const currencyService = new CurrencyService();
            order.price = await currencyService.convert(order.price, "PLN", currency);
        }
        const invoice = {price: order.price, timeElapsedInSeconds: (order.completedAt - order.placedAt) / 1000};
        return await invoice || null;
    },
};
