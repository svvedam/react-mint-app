const transactions = {  
    "accounts": [
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "balances": {
                "available": 100,
                "current": 110,
                "limit": null
            },
            "mask": "0000",
            "name": "Plaid Checking",
            "official_name": "Plaid Gold Standard 0% Interest Checking",
            "subtype": "checking",
            "type": "depository"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "balances": {
                "available": 200,
                "current": 210,
                "limit": null
            },
            "mask": "1111",
            "name": "Plaid Saving",
            "official_name": "Plaid Silver Standard 0.1% Interest Saving",
            "subtype": "savings",
            "type": "depository"
        },
        {
            "account_id": "QKArbQv77AiQV8RZ4xAdSKmyxqp1zxipQkrbE",
            "balances": {
                "available": null,
                "current": 1000,
                "limit": null
            },
            "mask": "2222",
            "name": "Plaid CD",
            "official_name": "Plaid Bronze Standard 0.2% Interest CD",
            "subtype": "cd",
            "type": "depository"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "balances": {
                "available": null,
                "current": 410,
                "limit": 2000
            },
            "mask": "3333",
            "name": "Plaid Credit Card",
            "official_name": "Plaid Diamond 12.5% APR Interest Credit Card",
            "subtype": "credit card",
            "type": "credit"
        }
    ],
    "item": {
        "available_products": [
            "assets",
            "auth",
            "balance",
            "credit_details",
            "identity",
            "income"
        ],
        "billed_products": [
            "transactions"
        ],
        "error": null,
        "institution_id": "ins_3",
        "item_id": "ZNAPlwrppAiyBw6WDQA1HNGaLB59MAFg5XnLg",
        "webhook": "www.randomdomain.com/webhook_url"
    },
    "request_id": "dcu92",
    "total_transactions": 170,
    "transactions": [
        {
            "account_id": "QKArbQv77AiQV8RZ4xAdSKmyxqp1zxipQkrbE",
            "account_owner": null,
            "amount": 1000,
            "category": [
                "Transfer",
                "Deposit"
            ],
            "category_id": "21007000",
            "date": "2017-05-30",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "CD DEPOSIT .INITIAL.",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "v4JxGbm33JulWbMnVKPwI65MWnXxbJiWPk9NE",
            "transaction_type": "special"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 78.5,
            "category": [
                "Recreation",
                "Gyms and Fitness Centers"
            ],
            "category_id": "17018000",
            "date": "2017-05-29",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Touchstone Climbing",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "kGonZXLppoimagPwWMqRS8oG4yqeQMtW3dykx",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": -500,
            "category": [
                "Travel",
                "Airlines and Aviation Services"
            ],
            "category_id": "22001000",
            "date": "2017-05-29",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "United Airlines",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "DMGgZKp44GHdGJz36bKnHnAelQ6gv8ivraAyQ",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 12,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-05-28",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": "3322",
                "zip": null
            },
            "name": "McDonald's",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "6z4arJxLL4iJgDEndAQGipq7evxWb3cgqXEwL",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 4.33,
            "category": [
                "Food and Drink",
                "Restaurants",
                "Coffee Shop"
            ],
            "category_id": "13005043",
            "date": "2017-05-28",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Starbucks",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "XaR4XpqQQRCQoxDRp7MkSn3gwk4865idrn7Bn",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 89.4,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-05-27",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "SparkFun",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "RrAzmJkZZACVXqjwRdALtXZj7nzN5MtRLb6dW",
            "transaction_type": "place"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "account_owner": null,
            "amount": -4.22,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-05-26",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "INTRST PYMNT",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "aMG1xJ4PPGHNGm6ZrdzehnwBMm8m3Vt7vQjA8",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Travel",
                "Airlines and Aviation Services"
            ],
            "category_id": "22001000",
            "date": "2017-05-16",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "United Airlines",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "J8WngdAQQWf6JqKEpl9WSWbj3MrDAaFdGgVmp",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 6.33,
            "category": [
                "Travel",
                "Car Service",
                "Ride Share"
            ],
            "category_id": "22006001",
            "date": "2017-05-14",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Uber 072515 SF**POOL**",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "v4JxGbm33JulWbMnVKPwI65MWnXxbJiWPkL5E",
            "transaction_type": "special"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-05-11",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Tectra Inc",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "5radKz3JJaCVGpD54APQtLldBNeoqgiZE7q94",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-05-10",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "KFC",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "wN1dnDyxx1iRqAJwry5BFerbnqx4KLHraoBJa",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Shops",
                "Bicycles"
            ],
            "category_id": "19007000",
            "date": "2017-05-10",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Madison Bicycle Shop",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "VxmdRoVwwmCar8V7RPDvsxZkMjnQXRtWvP3zr",
            "transaction_type": "place"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "account_owner": null,
            "amount": 25,
            "category": [
                "Payment",
                "Credit Card"
            ],
            "category_id": "16001000",
            "date": "2017-05-01",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "CREDIT CARD 3333 PAYMENT *//",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "dp9o4ejNN9f6BjZdXlx8SnJjQ1y1kXtZqQ8L4",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 5.4,
            "category": [
                "Travel",
                "Car Service",
                "Ride Share"
            ],
            "category_id": "22006001",
            "date": "2017-05-01",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Uber 063015 SF**POOL**",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "9xjP3W455jC8KJb9MAoWIWzyk5DLAQFR3Q7Pj",
            "transaction_type": "special"
        },
        {
            "account_id": "QKArbQv77AiQV8RZ4xAdSKmyxqp1zxipQkrbE",
            "account_owner": null,
            "amount": 1000,
            "category": [
                "Transfer",
                "Deposit"
            ],
            "category_id": "21007000",
            "date": "2017-04-30",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "CD DEPOSIT .INITIAL.",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "9xjP3W455jC8KJb9MAoWIWzyk5DLAQFR3QXAj",
            "transaction_type": "special"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 78.5,
            "category": [
                "Recreation",
                "Gyms and Fitness Centers"
            ],
            "category_id": "17018000",
            "date": "2017-04-29",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Touchstone Climbing",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "DMGgZKp44GHdGJz36bKnHnAelQ6gv8ivraKbD",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": -500,
            "category": [
                "Travel",
                "Airlines and Aviation Services"
            ],
            "category_id": "22001000",
            "date": "2017-04-29",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "United Airlines",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "yjR4m9vDDRi6Kme1QB3gSyazKbRdP8hyZXJNj",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 12,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-04-28",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": "3322",
                "zip": null
            },
            "name": "McDonald's",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "b1oLdeNwwoHoqgNjyQBasq6ZzNBKxyIVJZRAD",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 4.33,
            "category": [
                "Food and Drink",
                "Restaurants",
                "Coffee Shop"
            ],
            "category_id": "13005043",
            "date": "2017-04-28",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Starbucks",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "mqwm1WoaawuLWlJAy6kBCdRDWM7N64uLldGq1",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 89.4,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-04-27",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "SparkFun",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "nK9yLmgbb9i1pqaRd8zxIavjpKAEG4c6XWa11",
            "transaction_type": "place"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "account_owner": null,
            "amount": -4.22,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-04-26",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "INTRST PYMNT",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "xPmabL9RRmFqDw8lazLjIVre4qmq5AFnZV55l",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Travel",
                "Airlines and Aviation Services"
            ],
            "category_id": "22001000",
            "date": "2017-04-16",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "United Airlines",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "XaR4XpqQQRCQoxDRp7MkSn3gwk4865idrnwGg",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 6.33,
            "category": [
                "Travel",
                "Car Service",
                "Ride Share"
            ],
            "category_id": "22006001",
            "date": "2017-04-14",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Uber 072515 SF**POOL**",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "kGonZXLppoimagPwWMqRS8oG4yqeQMtW3d4My",
            "transaction_type": "special"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-04-11",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Tectra Inc",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "6z4arJxLL4iJgDEndAQGipq7evxWb3cgqXV49",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-04-10",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "KFC",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "RrAzmJkZZACVXqjwRdALtXZj7nzN5MtRLbm8q",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Shops",
                "Bicycles"
            ],
            "category_id": "19007000",
            "date": "2017-04-10",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Madison Bicycle Shop",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "v4JxGbm33JulWbMnVKPwI65MWnXxbJiWPk9rp",
            "transaction_type": "place"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "account_owner": null,
            "amount": 25,
            "category": [
                "Payment",
                "Credit Card"
            ],
            "category_id": "16001000",
            "date": "2017-04-01",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "CREDIT CARD 3333 PAYMENT *//",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "3qx3lVzLLxuEVBAPK14msMNw1gPga7TqLn774",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 5.4,
            "category": [
                "Travel",
                "Car Service",
                "Ride Share"
            ],
            "category_id": "22006001",
            "date": "2017-04-01",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Uber 063015 SF**POOL**",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "J8WngdAQQWf6JqKEpl9WSWbj3MrDAaFdGglzl",
            "transaction_type": "special"
        },
        {
            "account_id": "QKArbQv77AiQV8RZ4xAdSKmyxqp1zxipQkrbE",
            "account_owner": null,
            "amount": 1000,
            "category": [
                "Transfer",
                "Deposit"
            ],
            "category_id": "21007000",
            "date": "2017-03-31",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "CD DEPOSIT .INITIAL.",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "yjR4m9vDDRi6Kme1QB3gSyazKbRdP8hyZX7jj",
            "transaction_type": "special"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 78.5,
            "category": [
                "Recreation",
                "Gyms and Fitness Centers"
            ],
            "category_id": "17018000",
            "date": "2017-03-30",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Touchstone Climbing",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "9xjP3W455jC8KJb9MAoWIWzyk5DLAQFR3QXjL",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": -500,
            "category": [
                "Travel",
                "Airlines and Aviation Services"
            ],
            "category_id": "22001000",
            "date": "2017-03-30",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "United Airlines",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "5radKz3JJaCVGpD54APQtLldBNeoqgiZE7ake",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 12,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-03-29",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": "3322",
                "zip": null
            },
            "name": "McDonald's",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "VxmdRoVwwmCar8V7RPDvsxZkMjnQXRtWvPjGN",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 4.33,
            "category": [
                "Food and Drink",
                "Restaurants",
                "Coffee Shop"
            ],
            "category_id": "13005043",
            "date": "2017-03-29",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Starbucks",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "wN1dnDyxx1iRqAJwry5BFerbnqx4KLHrao4nd",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 89.4,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-03-28",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "SparkFun",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "DMGgZKp44GHdGJz36bKnHnAelQ6gv8ivraAjd",
            "transaction_type": "place"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "account_owner": null,
            "amount": -4.22,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-03-27",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "INTRST PYMNT",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "BQWpeN1vvWFZgBnJmjyKCKZN8lGljqIw1899D",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Travel",
                "Airlines and Aviation Services"
            ],
            "category_id": "22001000",
            "date": "2017-03-17",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "United Airlines",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "yjR4m9vDDRi6Kme1QB3gSyazKbRdP8hyZX7xq",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 6.33,
            "category": [
                "Travel",
                "Car Service",
                "Ride Share"
            ],
            "category_id": "22006001",
            "date": "2017-03-15",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Uber 072515 SF**POOL**",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "XaR4XpqQQRCQoxDRp7MkSn3gwk4865idrn7oD",
            "transaction_type": "special"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-03-12",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Tectra Inc",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "mqwm1WoaawuLWlJAy6kBCdRDWM7N64uLldV65",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-03-11",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "KFC",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "b1oLdeNwwoHoqgNjyQBasq6ZzNBKxyIVJZM8X",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Shops",
                "Bicycles"
            ],
            "category_id": "19007000",
            "date": "2017-03-11",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Madison Bicycle Shop",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "nK9yLmgbb9i1pqaRd8zxIavjpKAEG4c6XWLvq",
            "transaction_type": "place"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "account_owner": null,
            "amount": 25,
            "category": [
                "Payment",
                "Credit Card"
            ],
            "category_id": "16001000",
            "date": "2017-03-02",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "CREDIT CARD 3333 PAYMENT *//",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "z71NyBRAA1HD6qevWyxnik3AG7g7mBfoKLAAA",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 5.4,
            "category": [
                "Travel",
                "Car Service",
                "Ride Share"
            ],
            "category_id": "22006001",
            "date": "2017-03-02",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Uber 063015 SF**POOL**",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "6z4arJxLL4iJgDEndAQGipq7evxWb3cgqXEvm",
            "transaction_type": "special"
        },
        {
            "account_id": "QKArbQv77AiQV8RZ4xAdSKmyxqp1zxipQkrbE",
            "account_owner": null,
            "amount": 1000,
            "category": [
                "Transfer",
                "Deposit"
            ],
            "category_id": "21007000",
            "date": "2017-03-01",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "CD DEPOSIT .INITIAL.",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "mqwm1WoaawuLWlJAy6kBCdRDWM7N64uLldVx1",
            "transaction_type": "special"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 78.5,
            "category": [
                "Recreation",
                "Gyms and Fitness Centers"
            ],
            "category_id": "17018000",
            "date": "2017-02-28",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Touchstone Climbing",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "Gp6WLb8RR6f6AE4bJMQNSN6ar5lP8xf1LPzkM",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": -500,
            "category": [
                "Travel",
                "Airlines and Aviation Services"
            ],
            "category_id": "22001000",
            "date": "2017-02-28",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "United Airlines",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "RrAzmJkZZACVXqjwRdALtXZj7nzN5MtRLb6eJ",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 12,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-02-27",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": "3322",
                "zip": null
            },
            "name": "McDonald's",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "9xjP3W455jC8KJb9MAoWIWzyk5DLAQFR3Q7dV",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 4.33,
            "category": [
                "Food and Drink",
                "Restaurants",
                "Coffee Shop"
            ],
            "category_id": "13005043",
            "date": "2017-02-27",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Starbucks",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "v4JxGbm33JulWbMnVKPwI65MWnXxbJiWPkLyX",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 89.4,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-02-26",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "SparkFun",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "yjR4m9vDDRi6Kme1QB3gSyazKbRdP8hyZXJVK",
            "transaction_type": "place"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "account_owner": null,
            "amount": -4.22,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-02-25",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "INTRST PYMNT",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "r3or8XAKKoi9geR4xZd1S6NERZ7ZMmtlX6rrq",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Travel",
                "Airlines and Aviation Services"
            ],
            "category_id": "22001000",
            "date": "2017-02-15",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "United Airlines",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "AeWL75M44WhwBekXWA71H1PwyNJ78qu1kAnzJ",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 6.33,
            "category": [
                "Travel",
                "Car Service",
                "Ride Share"
            ],
            "category_id": "22006001",
            "date": "2017-02-13",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Uber 072515 SF**POOL**",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "mqwm1WoaawuLWlJAy6kBCdRDWM7N64uLldGBg",
            "transaction_type": "special"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-02-10",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Tectra Inc",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "WdAa6wlppAizpWVq46AGSpjA1ML3B6cl51Jg3",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-02-09",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "KFC",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "E1W8MRonnWHg681QeGNKSKABqxnry6UXMkpb5",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Shops",
                "Bicycles"
            ],
            "category_id": "19007000",
            "date": "2017-02-09",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Madison Bicycle Shop",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "83PNB4avvPiVDA1o6rGRtRVJvq6AdQiwRLkq8",
            "transaction_type": "place"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "account_owner": null,
            "amount": 25,
            "category": [
                "Payment",
                "Credit Card"
            ],
            "category_id": "16001000",
            "date": "2017-01-31",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "CREDIT CARD 3333 PAYMENT *//",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "KEWb8wGyyWikKEgeBqymsmwDZQPQzKuVjAll3",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 5.4,
            "category": [
                "Travel",
                "Car Service",
                "Ride Share"
            ],
            "category_id": "22006001",
            "date": "2017-01-31",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Uber 063015 SF**POOL**",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "b1oLdeNwwoHoqgNjyQBasq6ZzNBKxyIVJZRAV",
            "transaction_type": "special"
        },
        {
            "account_id": "QKArbQv77AiQV8RZ4xAdSKmyxqp1zxipQkrbE",
            "account_owner": null,
            "amount": 1000,
            "category": [
                "Transfer",
                "Deposit"
            ],
            "category_id": "21007000",
            "date": "2017-01-30",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "CD DEPOSIT .INITIAL.",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "b1oLdeNwwoHoqgNjyQBasq6ZzNBKxyIVJZMWD",
            "transaction_type": "special"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 78.5,
            "category": [
                "Recreation",
                "Gyms and Fitness Centers"
            ],
            "category_id": "17018000",
            "date": "2017-01-29",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Touchstone Climbing",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "g86EjwQNN6fqoK7rLN4aIl7om4LPVDCgGnvW1",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": -500,
            "category": [
                "Travel",
                "Airlines and Aviation Services"
            ],
            "category_id": "22001000",
            "date": "2017-01-29",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "United Airlines",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "RrAzmJkZZACVXqjwRdALtXZdlDyDqJtRLb6ez",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 12,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-01-28",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": "3322",
                "zip": null
            },
            "name": "McDonald's",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "9xjP3W455jC8KJb9MAoWIWzx86b6mlfR3Q7de",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 4.33,
            "category": [
                "Food and Drink",
                "Restaurants",
                "Coffee Shop"
            ],
            "category_id": "13005043",
            "date": "2017-01-28",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Starbucks",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "v4JxGbm33JulWbMnVKPwI65EQm1mNatWPkLya",
            "transaction_type": "place"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 89.4,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-01-27",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "SparkFun",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "yjR4m9vDDRi6Kme1QB3gSyaGw1E1xltyZXJVZ",
            "transaction_type": "place"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "account_owner": null,
            "amount": -4.22,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-01-26",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "INTRST PYMNT",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "qBoKg5WqqoFbmZ58EoxysAw1KnJnM4ud57eeB",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Travel",
                "Airlines and Aviation Services"
            ],
            "category_id": "22001000",
            "date": "2017-01-16",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "United Airlines",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "orolpZ8WWoC5NKgDvkBoT4xdNkW5baFRP7WE7",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 6.33,
            "category": [
                "Travel",
                "Car Service",
                "Ride Share"
            ],
            "category_id": "22006001",
            "date": "2017-01-14",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Uber 072515 SF**POOL**",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "mqwm1WoaawuLWlJAy6kBCdRkZebe19tLldGBa",
            "transaction_type": "special"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-01-11",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Tectra Inc",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "pzmqobEllmiJ5rX6yk3eiQaZ5Ee6x1uLqVAa3",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Food and Drink",
                "Restaurants"
            ],
            "category_id": "13005000",
            "date": "2017-01-10",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "KFC",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "LWwmEGnQQwsg7Ez4WKMDSDj8dyB1kViPmpVwy",
            "transaction_type": "place"
        },
        {
            "account_id": "ZNAPlwrppAiyBw6WDQA1HNGZz4e3ozugy8nZX",
            "account_owner": null,
            "amount": 500,
            "category": [
                "Shops",
                "Bicycles"
            ],
            "category_id": "19007000",
            "date": "2017-01-10",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Madison Bicycle Shop",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "1GBzXrKLLBigxwEmyoXdSDZjrdnxXqi5aeABx",
            "transaction_type": "place"
        },
        {
            "account_id": "nK9yLmgbb9i1pqaRd8zxIavo651V86F6q8P1n",
            "account_owner": null,
            "amount": 25,
            "category": [
                "Payment",
                "Credit Card"
            ],
            "category_id": "16001000",
            "date": "2017-01-01",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "CREDIT CARD 3333 PAYMENT *//",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "llobMgpJJoCq1BaQjDKyIbKV38x8dXiZ5dKKN",
            "transaction_type": "special"
        },
        {
            "account_id": "eoDgN47yyDu3EkZQRPdySEMo5yRPL5sLZMyAl",
            "account_owner": null,
            "amount": 5.4,
            "category": [
                "Travel",
                "Car Service",
                "Ride Share"
            ],
            "category_id": "22006001",
            "date": "2017-01-01",
            "location": {
                "address": null,
                "city": null,
                "lat": null,
                "lon": null,
                "state": null,
                "store_number": null,
                "zip": null
            },
            "name": "Uber 063015 SF**POOL**",
            "payment_meta": {
                "by_order_of": null,
                "payee": null,
                "payer": null,
                "payment_method": null,
                "payment_processor": null,
                "ppd_id": null,
                "reason": null,
                "reference_number": null
            },
            "pending": false,
            "pending_transaction_id": null,
            "transaction_id": "b1oLdeNwwoHoqgNjyQBasq6Xbp8p4nSVJZRAj",
            "transaction_type": "special"
        }
    ]
  };
  export default transactions;
