import {getStatus} from './status.js';
import {postMenu, getById, updateMenu} from './menu.js';
import {postOrder, updateOrder, getOrderById, getOrders} from './order.js';
import {getInvoiceByOrderId} from './invoice.js';

export default [
  {
    method: 'GET',
    path: '/status',
    isPublic: true,
    cbs: [getStatus],
  },
  {
    method: 'POST',
    path: '/menu',
    cbs: [postMenu],
  },
  {
    method: 'PUT',
    path: '/menu',
    cbs: [updateMenu],
  },
  {
    method: 'GET',
    path: '/menu/:id',
    cbs: [getById],
  },
  {
    method: 'POST',
    path: '/order',
    cbs: [postOrder],
  },
  {
    method: 'PUT',
    path: '/order',
    cbs: [updateOrder],
  },
  {
    method: 'GET',
    path: '/order/:id',
    cbs: [getOrderById],
  },
  {
    method: 'GET',
    path: '/order',
    cbs: [getOrders],
  },
  {
    method: 'GET',
    path: '/invoice/:id',
    cbs: [getInvoiceByOrderId],
  },
];
