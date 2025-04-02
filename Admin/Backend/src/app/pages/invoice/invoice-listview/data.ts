const invoice = [
    {
        id: '#TTB30280001',
        customer: 'Neil Collins',
        email: 'ryan.dyer@toner.com',
        country: 'Brazil',
        date: '22 May, 2022 ',
        time: '10:45 AM',
        amt: '$415.96',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-1.jpg',
        billing_address: {
            full_name: 'Neil Collins',
            address: '5114 Adipiscing St. Puno United States 46782',
            phone: '(926) 817-7835',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Ryan Dyer',
            address: '534-1477 Non, Av. Bury St. Edmunds France 10846',
            phone: '(926) 817-7835',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Reese Jacobs',
            card_number: '4024007179348742',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },

    {
        id: '#TTB30280002',
        customer: 'Alfred Hurst',
        email: 'alfredH@toner.com',
        country: 'Brazil',
        date: '07 Jan, 2023',
        time: '8:34 AM',
        amt: '$875',
        paystatus: 'UNPAID',
        img: 'assets/images/users/avatar-2.jpg',
        billing_address: {
            full_name: 'Brody Holman',
            address: 'P.O. Box 900 Ireland, 6694 Ullamcorper Avenue Port Pirie 37176',
            phone: '1-862-423-3347',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Elijah Galloway',
            address: '7288 Dignissim Rd. Villa Alegre Germany 891315',
            phone: '1-862-423-3347',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Alfred Hurst',
            card_number: '4916669499578927',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },
    {
        id: '#TTB30280003',
        customer: 'Tommy Carey',
        email: 'careytommy@toner.com',
        country: 'Brazil',
        date: '28 Apr, 2022',
        time: '8:34 PM',
        amt: '	$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-3.jpg',
        billing_address: {
            full_name: 'Jolie Hood',
            address: 'Ap #957-7519 Vel, Belgium St. Diêm Điền 88188-296',
            phone: '963-012-7495',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'MacKensie Peterson',
            address: '572-7561 Tempus Ave Alajuela Spain 86558',
            phone: '1-634-649-4101',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: "Tommy Carey",
            card_number: '4486013431082211',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },
    {
        id: '#TTB30280004',
        customer: 'Cassius Brock',
        email: 'brock@toner.com',
        country: 'Brazil',
        date: '01 Jul, 2022',
        time: '8:48 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-4.jpg',
        billing_address: {
            full_name: 'Cassius Brock',
            address: '983-8399 Egestas, Rd Spain. Penza 6596',
            phone: '(922) 264-4841',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Emerson Riggs',
            address: '916-4370 Aliquet Avenue Nordhorn Spain 3200',
            phone: '(922) 264-4841',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27,
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Cassius Brock',
            card_number: '4532135177402156',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },

    {
        id: '#TTB30280005',
        customer: 'Camilla Winters',
        email: 'camilla@toner.com',
        country: 'Brazil',
        date: '04 Mar, 2021 ',
        time: '11:00 AM',
        amt: '$875',
        paystatus: 'REFUND',
        img: 'assets/images/users/avatar-5.jpg',
        billing_address: {
            full_name: 'Camilla Winters',
            address: 'Ap #552-1397 Ac Rd Germany. Barmouth 8574',
            phone: '1-434-874-6805',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Britanni Daniel',
            address: 'P.O. Box 998, 9293 Quisque Avenue Puerto Montt Poland 82862',
            phone: '1-434-874-6805',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Camilla Winters',
            card_number: '4024007183253102',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },

    {
        id: '#TTB30280006',
        customer: 'Gabrielle Holden',
        email: 'gabrielle@toner.com',
        country: 'Brazil',
        date: '07 Apr, 2022',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-6.jpg',
        billing_address: {
            full_name: 'Gabrielle Holden',
            address: '5642 Aliquam, Avenue Zielona Costa Rica Góra 21204',
            phone: '1-546-878-8131',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Alfred Hurst',
            address: '715-6973 Non St. Samara Peru 10513',
            phone: '1-546-878-8131',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Alfred Hurst',
            card_number: '4716482226172291',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },

    {
        id: '#TTB30280007',
        customer: 'Kristina Hooper',
        email: 'kristina@toner.com',
        country: 'Brazil',
        date: '30 Mar, 2022',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'CANCEL',
        img: 'assets/images/users/avatar-7.jpg',
        billing_address: {
            full_name: 'Kristina Hooper',
            address: 'P.O. Box 332 Italy, 5256 Dignissim St. Juazeiro do Norte 646442',
            phone: '(587) 848-3170',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Kieran Holland',
            address: '150-7530 Egestas Av. Panchià Russian Federation 16807',
            phone: '(587) 848-3170',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Donna Hilpert',
            card_number: '4485110978669599',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },
    {
        id: '#TTB30280008',
        customer: 'Alina Holland',
        email: 'hollandalina@toner.com',
        country: 'Brazil',
        date: '07 Apr, 2021 ',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-8.jpg',
        billing_address: {
            full_name: 'Alina Holland',
            address: '2935 Senectus Av. Tvedestrand Germany 66479',
            phone: '(287) 406-9128',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Alina Holland',
            address: '101-9784 Metus Rd. Minitonas Mexico 19-154',
            phone: '(287) 406-9128',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'Macbook Pro',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Smart Watch for Mans',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Borosil Paper Cup',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Evelyn Miller',
            card_number: '4609615071890505',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },
    {
        id: '#TTB30280009',
        customer: 'Christian Cardenas',
        email: 'id.erat@aol.org',
        country: 'Brazil',
        date: '26 Jan, 2022',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-1.jpg',
        billing_address: {
            full_name: 'Christian Cardenas',
            address: '414-240 Odio. Rd Vietnam. Louisville 41715',
            phone: '1-681-342-7158',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Linus Pitts',
            address: 'Ap #280-7347 Libero. Rd. Yurimaguas Italy 881484',
            phone: '1-681-342-7158',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Cleora Cole',
            card_number: '4011376293886159',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },

    {
        id: '#TTB30280010',
        customer: 'Edward Rogers',
        email: 'edwardro@toner.com',
        country: 'Brazil',
        date: '24 Mar, 2021',
        time: '16:12 AM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-2.jpg',
        billing_address: {
            full_name: 'Edward Rogers',
            address: 'Ap #322-2982 Lacinia Road India Moss 309511',
            phone: '1-514-596-7650',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Edward Rogers',
            address: 'Ap #827-2319 Eu Ave Bima Norway 1663',
            phone: '1-514-596-7650',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Blaise Quigley',
            card_number: '4929663041722401',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },

    {
        id: '#TTB30280011',
        customer: 'Hilel Gillespie',
        email: 'enim.nunc@yahoo.edu',
        country: 'Brazil',
        date: '23 Mar, 2021',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-3.jpg',
        billing_address: {
            full_name: 'Hilel Gillespie',
            address: '848-2883 At Street Kalisz United Kingdom 687132',
            phone: '(451) 816-7296',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Dacey Villarreal',
            address: '292-7088 In Road Rawalakot New Zealand 6842',
            phone: '(451) 816-7296',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'VISA',
            card_holder_name: 'Hollie Zboncak',
            card_number: '4828772787474622',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },
    {
        id: '#TTB30280012',
        customer: 'Randall Stafford',
        email: 'eget.lacus@outlook.org',
        country: 'Brazil',
        date: '	23 Mar, 2021',
        time: ' 9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-4.jpg',
        billing_address: {
            full_name: 'Randall Stafford',
            address: 'P.O. Box 583 Colombia, 2640 Aliquam Ave Toruń 456387',
            phone: '1-340-324-3678',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Shana Hudson',
            address: 'Ap #973-232 Non, St. Tibet Sweden GW0R 2VR',
            phone: '1-340-324-3678',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Kameron Barrows',
            card_number: '2720686256191298',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },
    {
        id: '#TTB30280013',
        customer: 'Fletcher Jones',
        email: 'sapien.cursus@google.couk',
        country: 'Brazil',
        date: '	23 Mar, 2021',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-5.jpg',
        billing_address: {
            full_name: 'Fletcher Jones',
            address: 'P.O. Box 951 New Zealand, 1480 Venenatis Ave Swat 152307',
            phone: '(433) 436-0003',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Fitzgerald Rice',
            address: '314-372 Facilisis Rd. Nancy Turkey E2K 1HY',
            phone: '(433) 436-0003',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Gus Thiel',
            card_number: '2221197016300538',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'

    },
    {
        id: '#TTB30280014',
        customer: 'Donovan Sparks',
        email: 'urna.convallis@yahoo.net',
        country: 'Brazil',
        date: '23 Mar, 2021',
        time: ' 9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-6.jpg',
        billing_address: {
            full_name: 'Donovan Sparks',
            address: '176-4856 Hendrerit Av. France San Juan de Girón 58811-629',
            phone: '1-658-684-1084',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Georgia Nixon',
            address: 'Ap #599-1431 Non, St. Cartagena del Chairá United States 2548',
            phone: '1-658-684-1084',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Emily Stokes',
            card_number: '2221426370404515',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },

    {
        id: '#TTB30280015',
        customer: 'Sage Gardner',
        email: 'consequat.enim@google.com',
        country: 'Brazil',
        date: '23 Mar, 2021',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-7.jpg',
        billing_address: {
            full_name: 'Sage Gardner',
            address: 'Ap #193-730 Orci, Chile Street San José de Alajuela 8317',
            phone: '(470) 328-1309',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Melinda Banks',
            address: '5778 Aliquam Road Ofena Italy 11218',
            phone: '(470) 328-1309',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Salvador Gerlach',
            card_number: '5347125175526959',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },
    {
        id: '#TTB30280016',
        customer: 'Paki Grimes',
        email: 'ante.lectus.convallis@google.com',
        country: 'Brazil',
        date: '23 Mar, 2021',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-1.jpg',
        billing_address: {
            full_name: 'Paki Grimes',
            address: '516-3641 Tincidunt St. Pakistan Zamora de Hidalgo 6554',
            phone: '(726) 823-5568',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Shaeleigh Wilkins',
            address: '961-3054 Integer St. Abergele United Kingdom 6746',
            phone: '(726) 823-5568',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Marilyne Swift',
            card_number: '2221357276228023',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },
    {
        id: '#TTB30280017',
        customer: 'James Diaz',
        email: 'nascetur@yahoo.com',
        country: 'Brazil',
        date: '23 Mar, 2021',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-2.jpg',
        billing_address: {
            full_name: 'James Diaz',
            address: 'Ap #160-8536 Ante St Colombia. Santa Coloma de Gramenet 19475',
            phone: '1-989-241-7715',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Julian Tanner',
            address: '630-5275 Quis Street Kraków Canada E39 0RE',
            phone: '1-989-241-7715',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Kraig Prohaska',
            card_number: '2221381107199906',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },
    {
        id: '#TTB30280018',
        customer: 'Karen Monroe',
        email: 'ac.ipsum@google.com',
        country: 'Brazil',
        date: '23 Mar, 2021 ',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-3.jpg',
        billing_address: {
            full_name: 'Karen Monroe',
            address: '486-3233 Quis Road Burnie Costa Rica 82926',
            phone: '(131) 702-8456',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Jescie Keller',
            address: '256-3596 Fermentum Road Salzburg United States 86-910',
            phone: '(131) 702-8456',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Domenic Kassulke',
            card_number: '5576137153087732',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },

    {
        id: '#TTB30280019',
        customer: 'Vincent Weeks',
        email: 'metus.facilisis@hotmail.edu',
        country: 'Brazil',
        date: '23 Mar, 2021',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-4.jpg',
        billing_address: {
            full_name: 'Vincent Weeks',
            address: '128-7206 Sit Street Bathurst Indonesia 812326',
            phone: '1-361-716-4822',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Jonah Hayden',
            address: 'Ap #315-5686 Luctus. Rd. Samaniego Canada 482995',
            phone: '1-361-716-4822',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Abner Muller',
            card_number: '5322044544430471',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },

    {
        id: '#TTB30280020',
        customer: 'Miriam Dickson',
        email: 'nunc.ac@icloud.ca',
        country: 'Brazil',
        date: '23 Mar, 2021',
        time: ' 9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'assets/images/users/avatar-5.jpg',
        billing_address: {
            full_name: 'Miriam Dickson',
            address: '1747 Dui, Ave Springdale Russian Federation 67155',
            phone: '(215) 293-4168',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Eaton Buckley',
            address: '846-7108 Orci. Road Ukkel India 624087',
            phone: '(215) 293-4168',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Elyse Green',
            card_number: '5393850427187200',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },
    {
        id: '#TTB30280021',
        customer: 'Ashton Head',
        email: 'cras@outlook.edu',
        country: 'Brazil',
        date: '23 Mar, 2021 ',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'AH',
        billing_address: {
            full_name: 'Ashton Head',
            address: '735-6864 Mauris Ave Linz South Korea 39964',
            phone: '(256) 774-0737',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Lani Ashley',
            address: 'P.O. Box 451, 696 Metus Avenue Jaboatão dos Guararapes Colombia 391846',
            phone: '(256) 774-0737',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27,
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Wilhelmine Cummerata',
            card_number: '5529776760187837',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    },

    {
        id: '#TTB30280022',
        customer: 'Linus Martin',
        email: 'fringilla.est.mauris@google.edu',
        country: 'Brazil',
        date: '23 Mar, 2021',
        time: '9:58 PM',
        amt: '$875',
        paystatus: 'PAID',
        img: 'LM',
        billing_address: {
            full_name: 'Linus Martin',
            address: '907-233 Vehicula. Road Vietnam Vienna 8231',
            phone: '1-544-454-6888',
            tax: '123456789'
        },
        shipping_address: {
            full_name: 'Yuri Allison',
            address: 'Ap #769-2743 Pede. Road Gönen Spain 83472-82897',
            phone: '1-544-454-6888',
            tax: '123456789'
        },
        prducts: [{
            product_name: 'World most expensive t shirt',
            product_details: 'Graphic Print Men & Women Sweatshirt',
            rates: 266.24,
            quantity: 3,
            amount: 798.72
        },
        {
            product_name: 'Ninja Pro Max Smartwatch',
            product_details: 'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
            rates: 247.27,
            quantity: 1,
            amount: 247.27
        },
        {
            product_name: 'Girls Mint Green & Off-White Open Toe Flats',
            product_details: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
            rates: 24.07,
            quantity: 4,
            amount: 96.28
        }
        ],
        payment_details: {
            payment_method: 'MasterCard',
            card_holder_name: 'Tania Price',
            card_number: '5336874146007028',
            total_amount: 1178.71
        },
        company_details: {
            legal_registration_no: "987654",
            email: 'support@themesbrand.com',
            website: 'www.themesbrand.com',
            contact_no: '0123456789',
            address: 'California, United States',
            zip_code: '90201'
        },
        order_summary: {
            sub_total: 1142.27,
            estimated_tex: 142.78,
            discount: 171.34,
            shipping_charge: 65.00,
            total_amount: 1178,
        },
        notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.'
    }
]

export { invoice }