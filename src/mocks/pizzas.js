import {nanoid} from 'nanoid';

const pizzas = [
  {
    typeId: nanoid(),
    type: 'Мясные',
    isHot: false,
    isVegan: false,
    isNew: false,
    title: 'Чизбургер-пицца',
    structure:
      'Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер',
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/8a813e3b734e457c848a60fc70a100d5_584x584.jpeg',
    options: [
      {
        dough: 'Традиционное',
        isAvailableDough: false,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 3000, isAvailable: false},
          {id: nanoid(), size: 30, price: 4000, isAvailable: false},
          {id: nanoid(), size: 40, price: 5000, isAvailable: true},
        ],
      },
      {
        dough: 'Тонкое',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 5000, isAvailable: false},
          {id: nanoid(), size: 30, price: 6000, isAvailable: true},
          {id: nanoid(), size: 40, price: 8000, isAvailable: true},
        ],
      },
    ],
  },

  {
    typeId: nanoid(),
    type: 'Вегетарианские',
    isHot: false,
    isVegan: true,
    isNew: false,
    title: 'Сырная',
    structure: 'Увеличенная порция моцареллы, томатный соус',
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/f8ea1b5e-671d-4460-9e3d-ce720b95a1ce.jpg',
    options: [
      {
        dough: 'Традиционное',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 2000, isAvailable: true},
          {id: nanoid(), size: 30, price: 3000, isAvailable: true},
          {id: nanoid(), size: 40, price: 4000, isAvailable: true},
        ],
      },
      {
        dough: 'Тонкое',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 5500, isAvailable: true},
          {id: nanoid(), size: 30, price: 6500, isAvailable: true},
          {id: nanoid(), size: 40, price: 8500, isAvailable: true},
          {id: nanoid(), size: 44, price: 9900, isAvailable: true},
        ],
      },
      {
        dough: 'Бортики',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 35, price: 8000, isAvailable: true},
          {id: nanoid(), size: 40, price: 11000, isAvailable: false},
        ],
      },
    ],
  },

  {
    typeId: nanoid(),
    type: 'Мясные',
    isHot: true,
    isVegan: false,
    isNew: false,
    title: 'Мексиканская',
    structure: `Острый цыпленок, томатный соус, сладкий перец, красный лук, 
    моцарелла, острый перец халапеньо, томаты, соус сальса`,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/a1f7da39-debe-4a2e-bfc9-82d747f5aeec.jpg',
    options: [
      {
        dough: 'Традиционное',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 2000, isAvailable: true},
          {id: nanoid(), size: 30, price: 3000, isAvailable: true},
          {id: nanoid(), size: 40, price: 4000, isAvailable: true},
          {id: nanoid(), size: 44, price: 10500, isAvailable: true},
        ],
      },
      {
        dough: 'Тонкое',
        isAvailableDough: false,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 5500, isAvailable: true},
          {id: nanoid(), size: 30, price: 6500, isAvailable: true},
          {id: nanoid(), size: 40, price: 8500, isAvailable: true},
        ],
      },
    ],
  },

  {
    typeId: nanoid(),
    type: 'Вегетарианские',
    isHot: false,
    isVegan: true,
    isNew: true,
    title: 'Пицца-пирог',
    structure: 'Ананасы, брусника, молоко сгущенное',
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/acf387b2-273b-41ab-82c8-d648ae4793cd.jpg',
    options: [
      {
        dough: 'Тонкое',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 3500, isAvailable: true},
          {id: nanoid(), size: 30, price: 5500, isAvailable: true},
        ],
      },
    ],
  },

  {
    typeId: nanoid(),
    type: 'Вегетарианские',
    isHot: false,
    isVegan: true,
    isNew: true,
    title: 'Овощи и грибы',
    structure: `Итальянские травы, томатный соус, 
      кубики брынзы, шампиньоны, сладкий перец, красный лук, моцарелла, маслины, томаты`,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/7a497170e99a435f8535f33c3ebaddc3_584x584.jpeg',
    options: [
      {
        dough: 'Тонкое',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 3500, isAvailable: true},
          {id: nanoid(), size: 30, price: 5500, isAvailable: true},
          {id: nanoid(), size: 32, price: 6500, isAvailable: true},
          {id: nanoid(), size: 38, price: 8500, isAvailable: true},
        ],
      },
    ],
  },

  {
    typeId: nanoid(),
    type: 'Мясные',
    isHot: false,
    isVegan: false,
    isNew: false,
    title: 'Супермясная',
    structure: `Цыпленок, митболы из говядины, 
    пикантная пепперони, томатный соус, острая чоризо, моцарелла, бекон`,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/ff8e79f8-25f8-45fc-a488-30c716b7e04d.jpg',
    options: [
      {
        dough: 'Традиционное',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 2000, isAvailable: false},
          {id: nanoid(), size: 30, price: 3200, isAvailable: true},
          {id: nanoid(), size: 40, price: 4400, isAvailable: true},
        ],
      },
      {
        dough: 'Тонкое',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 3500, isAvailable: true},
          {id: nanoid(), size: 30, price: 5500, isAvailable: false},
          {id: nanoid(), size: 32, price: 6500, isAvailable: true},
        ],
      },
    ],
  },

  {
    typeId: nanoid(),
    type: 'Вегетарианские',
    isHot: false,
    isVegan: true,
    isNew: false,
    title: 'Маргарита',
    structure: `Увеличенная порция моцареллы, томаты, 
    итальянские травы, томатный соус`,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_584x584.jpeg',
    options: [
      {
        dough: 'Традиционное',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 30, price: 3800, isAvailable: true},
          {id: nanoid(), size: 40, price: 4100, isAvailable: true},
        ],
      },
      {
        dough: 'Тонкое',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 30, price: 6050, isAvailable: true},
          {id: nanoid(), size: 32, price: 7500, isAvailable: true},
        ],
      },
    ],
  },
];

export default pizzas;
