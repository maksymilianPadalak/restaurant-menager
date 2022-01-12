import {
    createExample
  } from "../models/Menu.js";
  
  export const ExampleService = {
    read: async (id) => (await getOneExample({ where: { id } })) || null,
    readAll: async () => (await getAllExample()) || [],
    create: async (id, name, restaurantName) =>{
      await createExample({
        id,
        name,
        restaurant_name: restaurantName,
      })
    },
    update: async (id, fieldsToUpdate) =>
      await updateExample({ where: { id } }, fieldsToUpdate),
    delete: async (id) => await deleteExample({ where: { id } }),
  };