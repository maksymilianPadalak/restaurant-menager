import { getStatus } from "./status.js";
import { postMenu } from "./menu.js";

export default [
  {
    method: "GET",
    path: "/status",
    isPublic: true,
    cbs: [getStatus],
  },
  {
    method: "POST",
    path: "/menu",
    isPublic: true,
    cbs: [postMenu]
  }
];