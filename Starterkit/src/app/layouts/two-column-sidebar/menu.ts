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
    link: '/',
    badge: {
      variant: 'bg-danger',
      text: 'MENUITEMS.DASHBOARD.BADGE',
    },
  },
  {
    id: 3,
    label: 'MENUITEMS.PRODUCTS.TEXT',
    icon: 'bi bi-box-seam',
    collapseid: 'product',
    subItems: [
      {
        id: 4,
        label: 'MENUITEMS.PRODUCTS.LIST.LISTVIEW',
        link: '/',
        parentId: 3
      },
      {
        id: 5,
        label: 'MENUITEMS.PRODUCTS.LIST.GRIDVIEW',
        link: '/',
        parentId: 3
      },
      {
        id: 6,
        label: 'MENUITEMS.PRODUCTS.LIST.OVERVIEW',
        link: '/',
        parentId: 3,
      },
      {
        id: 7,
        label: 'MENUITEMS.PRODUCTS.LIST.CREATEPRODUCT',
        link: '/',
        parentId: 3,
      },
      {
        id: 8,
        label: 'MENUITEMS.PRODUCTS.LIST.CATEGORIES',
        link: '/',
        parentId: 3,
      },
      {
        id: 9,
        label: 'MENUITEMS.PRODUCTS.LIST.SUBCATEGORIES',
        parentId: 3,
        link: '/',
      },
    ]
  },
  {
    id: 10,
    label: 'MENUITEMS.ORDERS.TEXT',
    icon: 'bi bi-cart4',
    collapseid: 'order',
    subItems: [
      {
        id: 11,
        label: 'MENUITEMS.ORDERS.LIST.LISTVIEW',
        link: '/',
        parentId: 10
      },
      {
        id: 12,
        label: 'MENUITEMS.ORDERS.LIST.OVERVIEW',
        link: '/',
        parentId: 10,
      },
    ]
  },
  {
    id: 13,
    label: 'MENUITEMS.CALENDER.TEXT',
    icon: 'bi bi-calendar-week',
    link: '//r'
  },
  {
    id: 14,
    label: 'MENUITEMS.SELLERS.TEXT',
    icon: 'bi bi-binoculars',
    collapseid: 'seller',
    subItems: [
      {
        id: 15,
        label: 'MENUITEMS.SELLERS.LIST.LISTVIEW',
        link: '/',
        parentId: 14
      },
      {
        id: 16,
        label: 'MENUITEMS.SELLERS.LIST.GRIDVIEW',
        link: '/',
        parentId: 14,

      },
      {
        id: 17,
        label: 'MENUITEMS.SELLERS.LIST.OVERVIEW',
        link: '/',
        parentId: 14
      },
    ]
  },
  {
    id: 18,
    label: 'MENUITEMS.INVOICE.TEXT',
    icon: 'bi bi-archive',
    collapseid: 'invoice',
    subItems: [
      {
        id: 19,
        label: 'MENUITEMS.INVOICE.LIST.LISTVIEW',
        link: '/',
        parentId: 18
      },
      {
        id: 20,
        label: 'MENUITEMS.INVOICE.LIST.OVERVIEW',
        link: '/',
        parentId: 18,
      },
      {
        id: 21,
        label: 'MENUITEMS.INVOICE.LIST.CREATEINVOICE',
        link: '/',
        parentId: 18,
      }
    ]
  },
  {
    id: 22,
    label: 'MENUITEMS.USERLIST.TEXT',
    icon: 'bi bi-person-bounding-box',
    link: '/',

  },
  {
    id: 23,
    label: 'MENUITEMS.SHIPPING.TEXT',
    icon: 'bi bi-truck',
    collapseid: 'shipping',
    subItems: [
      {
        id: 25,
        label: 'MENUITEMS.SHIPPING.LIST.SHIPPINGLIST',
        link: '/',
        parentId: 24
      },
      {
        id: 26,
        label: 'MENUITEMS.SHIPPING.LIST.SHIPMENT',
        link: '/',
        parentId: 24
      },
    ]
  },
  {
    id: 27,
    label: 'MENUITEMS.COUPONS.TEXT',
    icon: 'bi bi-tag',
    link: '/',
  },
  {
    id: 28,
    label: 'MENUITEMS.REVIEWS&RATINGS.TEXT',
    icon: 'bi bi-star',
    link: '/g'
  },
  {
    id: 29,
    label: 'MENUITEMS.BRANDS.TEXT',
    icon: 'bi bi-shop',
    link: '//d'
  },
  {
    id: 30,
    label: 'MENUITEMS.STATISTICS.TEXT',
    icon: 'bi bi-pie-chart',
    link: '//s'
  },
  {
    id: 31,
    label: 'MENUITEMS.LOCALIZATION.TEXT',
    icon: 'bi bi-coin',
    collapseid: 'localization',
    subItems: [
      {
        id: 32,
        label: 'MENUITEMS.LOCALIZATION.LIST.TRANSACTIONS',
        parentId: 31,
        link: '//n'
      },
      {
        id: 33,
        label: 'MENUITEMS.LOCALIZATION.LIST.CURRENCYRATES',
        link: '//',
        parentId: 31
      },
    ]
  },
  {
    id: 34,
    label: 'MENUITEMS.ACCOUNTS.TEXT',
    icon: 'bi bi-person-circle',
    collapseid: 'account',
    subItems: [
      {
        id: 35,
        label: 'MENUITEMS.ACCOUNTS.LIST.MYACCOUNT',
        link: '/',
        parentId: 33
      },
      {
        id: 36,
        label: 'MENUITEMS.ACCOUNTS.LIST.SETTINGS',
        link: '/',
        parentId: 33
      },
      {
        id: 37,
        label: 'MENUITEMS.ACCOUNTS.LIST.SIGNUP',
        link: '/',
        parentId: 33
      },
      {
        id: 38,
        label: 'MENUITEMS.ACCOUNTS.LIST.SIGNIN',
        link: '/',
        parentId: 33
      },
      {
        id: 39,
        label: 'MENUITEMS.ACCOUNTS.LIST.PASSWORDRESET',
        link: '/',
        parentId: 33
      },
      {
        id: 40,
        label: 'MENUITEMS.ACCOUNTS.LIST.PASSWORDCREATE',
        link: '/',
        parentId: 33,
      },
      {
        id: 41,
        label: 'MENUITEMS.ACCOUNTS.LIST.SUCCESSMESSAGE',
        link: '/',
        parentId: 33,
      },
      {
        id: 42,
        label: 'MENUITEMS.ACCOUNTS.LIST.TWOSTEPVERIFY',
        link: '/',
        parentId: 33,
      },
      {
        id: 43,
        label: 'MENUITEMS.ACCOUNTS.LIST.LOGOUT',
        link: '/',
        parentId: 33,
      },
      {
        id: 44,
        label: 'MENUITEMS.ACCOUNTS.LIST.ERROR404',
        link: '/',
        parentId: 33,
      },
      {
        id: 45,
        label: 'MENUITEMS.ACCOUNTS.LIST.ERROR500',
        link: '/',
        parentId: 33,
      },
      {
        id: 46,
        label: 'MENUITEMS.ACCOUNTS.LIST.COMINGSOON',
        link: '/',
        parentId: 33,
      },
    ]
  },
  {
    id: 46,
    label: 'MENUITEMS.MULTILEVEL.TEXT',
    icon: 'bi bi-share',
    collapseid: 'level',
    subItems: [
      {
        id: 47,
        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
        parentId: 46
      },
      {
        id: 48,
        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
        subItems: [
          {
            id: 49,
            label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
            parentId: 48,
          },
          {
            id: 50,
            label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
            parentId: 48,
            subItems: [
              {
                id: 51,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL3.1',
                parentId: 50,
              },
              {
                id: 52,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL3.2',
                parentId: 50,
              }
            ]
          }
        ]
      },
    ]
  }
];
