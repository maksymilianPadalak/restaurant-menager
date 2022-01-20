import {getStatus} from './status.js';
import {postMenu, getById} from './menu.js';
import {postOrder} from './order.js';

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
    method: 'GET',
    path: '/menu/:id',
    cbs: [getById],
  },
  {
    method: 'POST',
    path: '/order',
    cbs: [postOrder],
  },
];
