import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true,
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        icon: 'bi bi-speedometer2',
        link: '',
        badge: {
            variant: 'bg-danger',
            text: 'MENUITEMS.DASHBOARD.BADGE',
        },
    },
    {
        id: 3,
        label: 'MENUITEMS.PRODUCTS.TEXT',
        icon: 'bi bi-box-seam',
        subItems: [
            {
                id: 4,
                label: 'MENUITEMS.PRODUCTS.LIST.LISTVIEW',
                link: '/products/product-list',
                parentId: 3
            },
            {
                id: 5,
                label: 'MENUITEMS.PRODUCTS.LIST.GRIDVIEW',
                link: '/products/product-grid',
                parentId: 3
            },
            {
                id: 6,
                label: 'MENUITEMS.PRODUCTS.LIST.OVERVIEW',
                link: '/products/product-overview',
                parentId: 3,
            },
            {
                id: 7,
                label: 'MENUITEMS.PRODUCTS.LIST.CREATEPRODUCT',
                link: '/products/product-create',
                parentId: 3,
            },
            {
                id: 8,
                label: 'MENUITEMS.PRODUCTS.LIST.CATEGORIES',
                link: '/products/categories',
                parentId: 3,
            },
            {
                id: 9,
                label: 'MENUITEMS.PRODUCTS.LIST.SUBCATEGORIES',
                parentId: 3,
                link: '/products/sub-categories',
            },
        ]
    },
    {
        id: 10,
        label: 'MENUITEMS.ORDERS.TEXT',
        icon: 'bi bi-cart4',
        subItems: [
            {
                id: 11,
                label: 'MENUITEMS.ORDERS.LIST.LISTVIEW',
                link: '/orders/list-view',
                parentId: 10
            },
            {
                id: 12,
                label: 'MENUITEMS.ORDERS.LIST.OVERVIEW',
                link: '/orders/overview',
                parentId: 10,
            },
        ]
    },
    {
        id: 13,
        label: 'MENUITEMS.CALENDER.TEXT',
        icon: 'bi bi-calendar-week',
        link: '/extrapages/calender'
    },
    {
        id: 14,
        label: 'MENUITEMS.SELLERS.TEXT',
        icon: 'bi bi-binoculars',
        subItems: [
            {
                id: 15,
                label: 'MENUITEMS.SELLERS.LIST.LISTVIEW',
                link: '/sellers/list-view',
                parentId: 14
            },
            {
                id: 16,
                label: 'MENUITEMS.SELLERS.LIST.GRIDVIEW',
                link: '/sellers/grid-view',
                parentId: 14,

            },
            {
                id: 17,
                label: 'MENUITEMS.SELLERS.LIST.OVERVIEW',
                link: '/sellers/overview',
                parentId: 14
            },
        ]
    },

    {
        id: 18,
        label: 'HEADER.MORE.TEXT',
        icon: 'ri-briefcase-2-line',
        subItems: [
            {
                id: 19,
                label: 'MENUITEMS.INVOICE.TEXT',
                icon: 'bi bi-archive',
                subItems: [
                    {
                        id: 20,
                        label: 'MENUITEMS.INVOICE.LIST.LISTVIEW',
                        link: '/invoice/listview',
                        parentId: 19
                    },
                    {
                        id: 21,
                        label: 'MENUITEMS.INVOICE.LIST.OVERVIEW',
                        link: '/invoice/overview',
                        parentId: 19,
                    },
                    {
                        id: 22,
                        label: 'MENUITEMS.INVOICE.LIST.CREATEINVOICE',
                        link: '/invoice/create-invoice',
                        parentId: 19,
                    }
                ]
            },
            {
                id: 23,
                label: 'MENUITEMS.USERLIST.TEXT',
                icon: 'bi bi-person-bounding-box',
                link: '/extrapages/userlist',

            },
            {
                id: 24,
                label: 'MENUITEMS.SHIPPING.TEXT',
                icon: 'bi bi-truck',
                subItems: [
                    {
                        id: 25,
                        label: 'MENUITEMS.SHIPPING.LIST.SHIPPINGLIST',
                        link: '/shipping/list',
                        parentId: 24
                    },
                    {
                        id: 26,
                        label: 'MENUITEMS.SHIPPING.LIST.SHIPMENT',
                        link: '/shipping/shipment',
                        parentId: 24
                    },
                ]
            },
            {
                id: 27,
                label: 'MENUITEMS.COUPONS.TEXT',
                icon: 'bi bi-tag',
                link: '/extrapages/coupons',
            },
            {
                id: 28,
                label: 'MENUITEMS.REVIEWS&RATINGS.TEXT',
                icon: 'bi bi-star',
                link: '/extrapages/review-rating'
            },
            {
                id: 29,
                label: 'MENUITEMS.BRANDS.TEXT',
                icon: 'bi bi-shop',
                link: '/extrapages/brand'
            },
            {
                id: 30,
                label: 'MENUITEMS.STATISTICS.TEXT',
                icon: 'bi bi-pie-chart',
                link: '/extrapages/statistics'
            },
            {
                id: 31,
                label: 'MENUITEMS.LOCALIZATION.TEXT',
                icon: 'bi bi-coin',
                subItems: [
                    {
                        id: 32,
                        label: 'MENUITEMS.LOCALIZATION.LIST.TRANSACTIONS',
                        parentId: 31,
                        link: '/localization/transaction'
                    },
                    {
                        id: 33,
                        label: 'MENUITEMS.LOCALIZATION.LIST.CURRENCYRATES',
                        link: '/localization/currancy-rates',
                        parentId: 31
                    },
                ]
            },
            {
                id: 34,
                label: 'MENUITEMS.ACCOUNTS.TEXT',
                icon: 'bi bi-person-circle',
                subItems: [
                    {
                        id: 35,
                        label: 'MENUITEMS.ACCOUNTS.LIST.MYACCOUNT',
                        link: '/extrapages/profile',
                        parentId: 34
                    },
                    {
                        id: 36,
                        label: 'MENUITEMS.ACCOUNTS.LIST.SETTINGS',
                        link: '/icons/boxicons',
                        parentId: 34
                    },
                    {
                        id: 37,
                        label: 'MENUITEMS.ACCOUNTS.LIST.SIGNUP',
                        link: '/auth/sign-up',
                        parentId: 34
                    },
                    {
                        id: 38,
                        label: 'MENUITEMS.ACCOUNTS.LIST.SIGNIN',
                        link: '/auth/sign-in',
                        parentId: 34
                    },
                    {
                        id: 39,
                        label: 'MENUITEMS.ACCOUNTS.LIST.PASSWORDRESET',
                        link: '/auth/reset-password',
                        parentId: 34
                    },
                    {
                        id: 40,
                        label: 'MENUITEMS.ACCOUNTS.LIST.PASSWORDCREATE',
                        link: '/auth/create-password',
                        parentId: 34,
                    },
                    {
                        id: 41,
                        label: 'MENUITEMS.ACCOUNTS.LIST.SUCCESSMESSAGE',
                        link: '/auth/success-msg',
                        parentId: 34,
                    },
                    {
                        id: 42,
                        label: 'MENUITEMS.ACCOUNTS.LIST.TWOSTEPVERIFY',
                        link: '/auth/twostep',
                        parentId: 34,
                    },
                    {
                        id: 43,
                        label: 'MENUITEMS.ACCOUNTS.LIST.LOGOUT',
                        link: '/auth/logout',
                        parentId: 34,
                    },
                    {
                        id: 44,
                        label: 'MENUITEMS.ACCOUNTS.LIST.ERROR404',
                        link: '/auth/page404',
                        parentId: 34,
                    },
                    {
                        id: 45,
                        label: 'MENUITEMS.ACCOUNTS.LIST.ERROR500',
                        link: '/auth/page500',
                        parentId: 34,
                    },
                    {
                        id: 46,
                        label: 'MENUITEMS.ACCOUNTS.LIST.COMINGSOON',
                        link: '/coming-soon',
                        parentId: 34,
                    },
                ]
            },
            {
                id: 47,
                label: 'MENUITEMS.COMPONENTS.TEXT',
                icon: 'bi bi-layers',
                badge: {
                    variant: 'bg-secondary',
                    text: 'MENUITEMS.COMPONENTS.BADGE',
                },

            },
            {
                id: 48,
                label: 'MENUITEMS.MULTILEVEL.TEXT',
                icon: 'bi bi-share',
                subItems: [
                    {
                        id: 49,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                        parentId: 48
                    },
                    {
                        id: 50,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                        subItems: [
                            {
                                id: 51,
                                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                                parentId: 50,
                            },
                            {
                                id: 52,
                                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                                parentId: 50,
                                subItems: [
                                    {
                                        id: 53,
                                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL3.1',
                                        parentId: 52,
                                    },
                                    {
                                        id: 54,
                                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL3.2',
                                        parentId: 52,
                                    }
                                ]
                            }
                        ]
                    },
                ]
            }
        ]
    }
]

