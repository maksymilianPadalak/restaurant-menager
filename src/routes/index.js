import {getStatus} from './status.js';
import {postMenu, getById, updateMenu} from './menu.js';
import {postOrder, updateOrder} from './order.js';

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
];
