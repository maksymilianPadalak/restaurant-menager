const dishes = JSON.stringify({
    menuId: 'asdasd',
    categories: [
        {
            categoryId: 'afafsdfsdf',
            categoryName: 'seaFood',
            dishes: [
                {
                    dishId: 'asdasdas',
                    dishName: 'fish',
                    price: 10,
                },
            ],
        },
        {
            categoryId: 'afafsdfsd',
            categoryName: 'mexican',
            dishes: [
                {
                    dishId: 'asdasda',
                    dishName: 'fish',
                    price: 10,
                },
            ],
        },
        {
            categoryId: 'afafsdfsdf',
            categoryName: 'labanese',
            dishes: [
                {
                    dishId: 'asdasdas',
                    dishName: 'fish',
                    price: 10,
                },
                {
                    dishId: 'asdasdas',
                    dishName: 'fish',
                    price: 10,
                },
                {
                    dishId: 'asdasdas',
                    dishName: 'fish',
                    price: 10,
                },
            ],
        },
    ],
});

const checkIfNumberOfDishesCorrect = (menu) => {
    let numberOfDishes = 0;
    for (const category of menu.categories) {
        numberOfDishes += category.dishes.length;
    }
    console.log(numberOfDishes);
    if (numberOfDishes < 4) {
        return false;
    } else {
        return true;
    }
};

export const createMenu = (req, res) => {
    const { body } = req;

    try {
        console.log(checkIfNumberOfDishesCorrect(body));
        res.status(201);
    } catch (err) {
        res.status(500);
    }
    return res.send(200);
};
