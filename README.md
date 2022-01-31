# restaurant-menager

Installation:
`npm install`
`docker-compose up`
`npx sequelize db:migrate`
`npm run dev`

Endpoints:

> Get menu status
> GET https://localhost:3000/api/private/menu/{menuId}

> Create new menu
> POST https://localhost:3000/api/private/menu

Request body:

```
{
    "name": "Menu restauracji",
    "restaurantName": "Restauracja",
    "dishes": [
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        },
        {
            "name": "Przykladowe jedzenie",
            "price": 12,
            "category": "kategoria"
        }
    ]
}
```

> Update existing menu
> PUT https://localhost:3000/api/private/menu

Request body:

```
{

    "id": 11,
    "name": "Menu restauracji zmienione",
    "restaurantName": "Restauracja",
    "dishes": [
        {
            "name": "Przykladowe jedzenie zmienione",
            "price": 12,
            "category": "kategoria",
            "id": 48
        }
    ]
}
```

> Get order status
> GET https://localhost:3000/api/private/order/{orderId}

> Get all orders
> GET https://localhost:3000/api/private/order

> Create new order
> POST https://localhost:3000/api/private/order

Request body:

```
{
    "tableNumber": 10,
    "takeAway": true,
    "dishes": [
        {
            "id": 1,
            "quantity": 3
        },
        {
            "id": 3,
            "quantity": 2
        }
    ]
}
```

> Update order status
> PUT https://localhost:3000/api/private/order

Request body:

```
{
    "id": 58,
    "status": "COMPLETED"
}
```

> Get invoice for order
> GET https://localhost:3000/api/private/invoice/{orderId}

Request body:

```
{
    "currency": "USD"
}
```
