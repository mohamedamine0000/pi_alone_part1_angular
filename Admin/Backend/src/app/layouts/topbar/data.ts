const items = [
    {
        "name": "Branded T-Shirts",
        "quantity": "10 x $32",
        "price": "$320",
        "img": "assets/images/products/img-1.png"
    },
    {
        "name": "Bentwood Chair",
        "quantity": "5 x $18",
        "price": "$89",
        "img": "assets/images/products/img-2.png"
    },
    {
        "name": "Borosil Paper Cup",
        "quantity": "3 x $250",
        "price": "$750",
        "img": "assets/images/products/img-3.png"
    },
    {
        "name": "Gray Styled T-Shirt",
        "quantity": "1 x $1250",
        "price": "$1250",
        "img": "assets/images/products/img-4.png"
    },
    {
        "name": "Stillbird Helmet",
        "quantity": "2 x $495",
        "price": "$990",
        "img": "assets/images/products/img-5.png"
    }
]
const notification = [
    {
        "title": "New",
        "items": [
            {
                "id": 1,
                "type": "notification",
                "background": "bg-info-subtle text-info",
                "icon": "bx bx-badge-check",
                "text": "Your Elite author Graphic Optimization reward is ready!",
                "link": "javascript:void(0);",
                "timestamp": "Just 30 sec ago",
                "checkboxId": "all-notification-check01",
                "state": false
            },
            {
                "id": 2,
                "type": "notification",
                "avatar": "assets/images/users/avatar-2.jpg",
                "activeBadge": "New alerts",
                "name": "Angela Bernier",
                "text": "Answered to your comment on the cash flow forecast's graph :bell:.",
                "link": "javascript:void(0);",
                "timestamp": "48 min ago",
                "checkboxId": "all-notification-check02",
                "state": false
            },
            {
                "id": 3,
                "type": "notification",
                "background": "bg-danger-subtle",
                "icon": "bx bx-message-square-dots",
                "text": "You have received 20 new messages in the conversation",
                "link": "javascript:void(0);",
                "timestamp": "2 hrs ago",
                "checkboxId": "all-notification-check03",
                "state": false
            }
        ]
    },
    {
        "title": "Read Before",
        "items": [
            {
                "id": 4,
                "type": "notification",
                "avatar": "assets/images/users/avatar-8.jpg",
                "activeBadge": "New alerts",
                "name": "Maureen Gibson",
                "text": "We talked about a project on LinkedIn.",
                "link": "javascript:void(0);",
                "timestamp": "4 hrs ago",
                "checkboxId": "all-notification-check04",
                "state": false
            }
        ]
    }
]


export { items, notification }