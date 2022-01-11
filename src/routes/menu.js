const dishes = {menuId: 'asdasd', categories: [ {categoryId: 'afafsdfsdf', categoryName: 'seaFood', dishes: [{dishId: 'asdasdasd', dishName: 'fish', price: 10 }]}]}

console.log(dishes)

export const postMenu = (req, res) => {
  if(req.dishes)
  res.json({ status: "OK", datetime: new Date() });
};