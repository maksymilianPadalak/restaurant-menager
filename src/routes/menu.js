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
    if (numberOfDishes < 12) {
        return false;
    } else {
        return true;
    }
};

export const createMenu = (req, res) => {
    const { body } = req;

    try {
        if (checkIfNumberOfDishesCorrect(body)) {
            return res.send(200);
        } else {
            return res.send(400);
        }
    } catch (err) {
        return res.send(500);
    }
};
