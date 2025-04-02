
const tablelist = [
    {
      id: "#VZ2110",
      Customer: "Bobby Davis",
      Date: "October 15, 2021",
      Invoice:"$2,300"
    },
    {
      id: "#VZ2109",
      Customer: "Christopher Neal",
      Date: "	October 7, 2021",
      Invoice: "$5,500"
    },
    {
      id: "#VZ2108",
      Customer: "	Monkey Karry",
      Date: "October 5, 2021",
      Invoice: "$2,420"
    },
    {
      id: "#VZ2107",
      Customer: "	James White",
      Date: "October 2, 2021",
      Invoice: "$7,452 "
    }
  ]

  const product = [
    {
      id: "1",
      Customer: "Bobby Davis",
      Date: "October 15, 2021",
      Invoice: "$2,300",
      status:"Confirmed"
    },
    {
      id: "2",
      Customer: "Christopher Neal",
      Date: "	October 7, 2021",
      Invoice: "$5,500",
      status: "Waiting"
    },
    {
      id: "3",
      Customer: "	Monkey Karry",
      Date: "October 5, 2021",
      Invoice: "$2,420",
      status: "Confirmed"
    },
    {
      id: "4",
      Customer: "	James White",
      Date: "October 2, 2021",
      Invoice: "$7,452 ",
      status: "Cancelled"
    },
  ]
  const caption = [
    {
      id: "	#VL2110",
      name: "William Elmore",
      date: "07 Oct, 2021",
      total: "$24.05",
      status: "Paid"
    },
    {
      id: "#VL2109",
      name: "Georgie Winters",
      date: "07 Oct, 2021",
      total: "$26.15",
      status: "Paid"
    },
    {
      id: "	#VL2108",
      name: "Whitney Meier",
      date: "06 Oct, 2021",
      total: "$21.25",
      status: "Refund"
    },
    {
      id: "#VL2107",
      name: "Justin Maier",
      date: "05 Oct, 2021",
      total: "$25.03",
      status: "Paid"
    },
]

const darktablelist = [
    {
        id: '01',
        customer: 'Bobby Davis',
        date: 'Nov 14, 2021',
        invoice:'$2,410'
    },
    {
        id: '02',
        customer: 'Christopher Neal',
        date: 'Nov 21, 2021',
        invoice:'$1,450'
    },
    {
        id: '03',
        customer: 'Monkey Karry',
        date: 'Nov 24, 2021',
        invoice:'$3,500'
    },
    {
        id: '04',
        customer: 'Aaron James',
        date: 'Nov 25, 2021',
        invoice:'$6,875'
    }
]

const greentablelist = [
    {
        id: '01',
        invoice: 'Basic Plan',
        date: 'Nov 22, 2021',
        amount: '$860',
        status:'Subscribed'
    },
    {
        id: '02',
        invoice: 'Premium Plan',
        date: 'Nov 10, 2021',
        amount:'$1200',
        status:'Unsubscribed'
    },
    {
        id: '03',
        invoice: 'Basic Plan',
        date: 'Nov 19, 2021',
        amount:'$860',
        status:'Subscribed'
    },
    {
        id: '04',
        invoice: 'Corporate Plan',
        date: 'Nov 22, 2021',
        amount:'$1599',
        status:'Subscribed'
    }
]

const hovertable = [
    {
        id: '#541254265',
        shop: 'Amezon',
        customer:'Cleo Carson',
        amount: '$4,521' 
    },
    {
        id: '#744145235',
        shop: 'Shoppers',
        customer:'Juston Eichmann',
        amount: '$7,546' 
    },
    {
        id: '#9855126598',
        shop: 'Flipkart',
        customer:'Bettie Johson',
        amount: '$1,350' 
    },
    {
        id: '#847512653',
        shop: 'Shoppers',
        customer:'Maritza Blanda',
        amount: '$4,521' 
    }
]

const bordertable = [
    {
        id: '01',
        title: 'Implement new UX',
        status: 'Backlog',
        assignee:'Lanora Sandoval',
        price: '$4,521' 
    },
    {
        id: '02',
        title: 'Design syntax',
        status: 'In Progress',
        assignee:'Calvin Garrett',
        price: '$7,546' 
    },
    {
        id: '03',
        title: 'Configurable resources',
        status: 'Done',
        assignee:'Florence Guzman',
        price: '$1,350' 
    },
    {
        id: '04',
        title: 'Implement extensions',
        status: 'In Progress',
        assignee:'Maritza Blanda',
        price: '$4,521' 
    }
]

const headtable = [
    {
        student: 'Milana Scot',
        course: 'UI/UX design',
        author: 'Mitchell Flores',
        payment: '$450',
        progress: '100',
        status: 'Confirmed',
        color:'success'
    },
    {
        student: 'Jassica Welsh',
        course: '3d Animation',
        author: 'Dan Evgeni',
        payment: '$860',
        progress: '65',
        status: 'Waiting',
        color:'warning'
    },
    {
        student: 'Leslie Alexander',
        course: 'Logotype Design',
        author: 'Olimpia Jordan',
        payment: '$450',
        progress: '35',
        status: 'Waiting',
        color:'warning'
    }
]

const tablefooter = [
    {
        id: '01',
        name: 'Annette Black',
        title: 'Industrial Designer',
        date: '10, Nov 2021',
        payment:'$450'
    },
    {
        id: '02',
        name: 'Bessie Cooper',
        title: 'Graphic Designer',
        date: '13, Nov 2021',
        payment:'$875'
    },
    {
        id: '03',
        name: 'Leslie Alexander',
        title: 'Industrial Designer',
        date: '17, Nov 2021',
        payment:'$410'
    },
]
  
const tablenesting = [
    {
        id: '01',
        name: 'Annette Black',
        title: 'Industrial Designer',
        date: '10, Nov 2021',
        payment: '$450',
        subtable: true
    },
    {
        id: '02',
        name: 'Bessie Cooper',
        title: 'Graphic Designer',
        date: '13, Nov 2021',
        payment: '$875'
    },
    {
        id: '03',
        name: 'Leslie Alexander',
        title: 'Industrial Designer',
        date: '17, Nov 2021',
        payment:'$410'
    },
    {
        id: '04',
        name: 'Bettie Johson',
        title: 'Applications Engineer',
        date: '24, Nov 2021',
        payment:'$620'
    },
    {
        id: '05',
        name: 'Monkey Karry',
        title: 'Implement new UX',
        date: '25, Nov 2021',
        payment:'$795'
    }
]

const varianttable = [
    {
        color: 'default',
        name: 'Monkey Karry',
        position: 'Medical Specialist',
        department:'Orthopedics'
    },
    {
        color: 'Primary',
        name: 'James White',
        position: 'Medical Assistant',
        department:'Surgery'
    },
    {
        color: 'Secondary',
        name: 'Aaron James',
        position: 'Medical Specialist',
        department:'Neurology'
    },
    {
        color: 'Success',
        name: 'Bettie Johson',
        position: 'Medical Specialist',
        department:'Cardiology'
    },
    {
        color: 'Danger',
        name: 'Bessie Cooper',
        position: 'Medical Specialist',
        department:'Surgery'
    },
    {
        color: 'Warning',
        name: 'Lenora Sandoval',
        position: 'Medical Specialist',
        department:'Cardiology'
    },
    {
        color: 'Info',
        name: 'Eric Pierce',
        position: 'Medical Specialist',
        department:'Neurology'
    },
    {
        color: 'Light',
        name: 'Ruth Zimmermann',
        position: 'Medical Specialist',
        department:'Neurology'
    },
    {
        color: 'Dark',
        name: 'Leslie Alexander',
        position: 'Medical Specialist',
        department:'Cardiology'
    }
]

const responsivetable = [
    {
        id: '#VZ2110',
        date: '10 Oct, 14:47',
        status: 'Paid',
        customer: 'Jordan Kennedy',
        profile: 'assets/images/users/avatar-3.jpg',
        purchase: 'Mastering the grid',
        revenue:'$9.98'
    },
    {
        id: '#VZ2109',
        date: '17 Oct, 02:10',
        status: 'Paid',
        customer: 'Jackson Graham',
        profile: 'assets/images/users/avatar-4.jpg',
        purchase: 'Splashify',
        revenue:'$270.60'
    },
    {
        id: '#VZ2108',
        date: '26 Oct, 08:20',
        status: ' Refunded',
        customer: 'Lauren Trujillo',
        profile: 'assets/images/users/avatar-5.jpg',
        purchase: 'Wireframing Kit for Figma',
        revenue:'$145.42'
    },
    {
        id: '#VZ2107',
        date: '02 Nov, 04:52',
        status: 'Cancel',
        customer: 'Curtis Weaver',
        profile: 'assets/images/users/avatar-6.jpg',
        purchase: 'Wireframing Kit for Figma',
        revenue:'$170.68'
    },
    {
        id: '#VZ2106',
        date: '10 Nov, 07:20',
        status: 'Paid',
        customer: 'Jason schuller',
        profile: 'assets/images/users/avatar-1.jpg',
        purchase: 'Splashify',
        revenue:'$350.87'
    }
]
 
export { tablelist, product, caption, darktablelist, greentablelist, hovertable, bordertable, headtable, tablefooter,tablenesting, varianttable, responsivetable}