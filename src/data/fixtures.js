const posts = [
  {
    id: '1',
    title: 'Hong Kong Protesters Are Worried About Facial Recognition Technology. But There Are Many Other Ways They are Being Watched.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. In ornare quam viverra orci sagittis. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Cras ornare arcu dui vivamus arcu felis. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Nisi scelerisque eu ultrices vitae auctor eu. Eu sem integer vitae justo eget magna fermentum iaculis eu. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Tristique senectus et netus et malesuada fames ac. Non arcu risus quis varius. At urna condimentum mattis pellentesque id nibh tortor id. Cras adipiscing enim eu turpis egestas pretium aenean. Sed risus ultricies tristique nulla aliquet enim tortor at.',
    categoryId: 1,
    author: {
      name: 'Sasha Hanks',
      image: 'https://res.cloudinary.com/do8ik6qe5/image/upload/v1553545763/todo-app/2019-03-25T20:29:21.742Z.jpg',
    },
    createdAt: '2019-01-22T19:56:16.127Z',
    updatedAt: '2019-01-22T19:56:16.127Z',
  },
  {
    id: '2',
    title: 'You are there',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
      + 'incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit amet tellus cras.'
      + ' Magna fermentum iaculis eu non diam phasellus vestibulum. Ultrices neque ornare aenean euismod '
      + 'elementum. Elit scelerisque mauris pellentesque pulvinar. Semper viverra nam libero justo '
      + 'laoreet sit amet cursus sit. Risus ultricies tristique nulla aliquet. Sagittis vitae et leo'
      + 'duis ut diam quam. Placerat orci nulla pellentesque dignissim enim. Nulla facilisi morbi '
      + 'tempus iaculis urna id. Vel pharetra vel turpis nunc eget. Condimentum id venenatis a '
      + 'condimentum vitae sapien pellentesque.Sagittis orci a scelerisque purus. Elementum nisi '
      + 'quis eleifend quam adipiscing. Luctus accumsan tortor posuere ac ut consequat semper viverra '
      + 'nam. At elementum eu facilisis sed odio. Enim ut sem viverra aliquet eget sit amet tellus.'
      + ' Est sit amet facilisis magna etiam tempor. Velit sed ullamcorper morbi tincidunt ornare'
      + ' massa. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Est velit'
      + ' egestas dui id. Varius quam quisque id diam vel quam elementum pulvinar etiam. Eget sit '
      + 'amet tellus cras adipiscing enim eu turpis. A diam maecenas sed enim ut sem viverra aliquet'
      + ' eget. Pretium vulputate sapien nec sagittis aliquam malesuada. Justo donec enim diam '
      + 'vulputate. A erat nam at lectus urna duis convallis convallis. Ultricies leo integer '
      + 'malesuada nunc vel. Eget arcu dictum varius duis. Nulla aliquet enim tortor at auctor urna'
      + ' nunc id cursus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Integer'
      + ' feugiat scelerisque varius morbi enim nunc faucibus a.',
    categoryId: 1,
    author: {
      name: 'Tom Hanks',
      image: 'https://res.cloudinary.com/do8ik6qe5/image/upload/v1553549313/todo-app/2019-03-25T21:28:25.680Z.png',
    },
    createdAt: '2019-04-22T19:56:16.127Z',
    updatedAt: '2019-04-22T19:56:16.127Z',
  },
  {
    id: '3',
    title: 'You are here nor there',
    description: 'Record-high temperatures were reported across the globe during the month as heat waves swept across parts of North America, Europe, Africa, and Asia. Ocean temperatures were also the warmest ever recorded in any July. Year-to-date, 2019 is now tied with 2017 as the second-warmest year ever recorded.',
    categoryId: 1,
    author: {
      name: 'Sasha Sloan',
      image: 'https://res.cloudinary.com/do8ik6qe5/image/upload/v1553544582/todo-app/2019-03-25T20:09:38.857Z.jpg',
    },
    createdAt: '2019-03-22T19:56:16.127Z',
    updatedAt: '2019-03-22T19:56:16.127Z',
  },
  {
    id: '4',
    title: 'You are here nor there',
    description: 'This calls for a CSS component. A CSS component is a style or collection of styles'
      + ' which we can apply using classes, often on top of a few different types of HTML elements. '
      + 'You may be familiar with this concept from CSS frameworks like Bootstrap or Foundation.'
      + 'This calls for a CSS component. A CSS component is a style or collection of styles which we '
      + 'can apply using classes, often on top of a few different types of HTML elements. You may be'
      + ' familiar with this concept from CSS frameworks like Bootstrap or Foundation.',
    categoryId: 2,
    author: {
      name: 'Julia Reinstein',
      image: 'https://resizing.flixster.com/KTWpfcuLuaAeZelLpy_d89w-x2Q=/300x300/v1.cjs1MDIyNTtqOzE4MTM1OzEyMDA7MjI4NzszMDAw',
    },
    createdAt: '2019-03-22T19:56:16.127Z',
    updatedAt: '2019-03-22T19:56:16.127Z',
  },
];

const categories = [
  {
    id: 1,
    title: 'General News',
    createdAt: '2019-03-07T08:08:03.326Z',
    updatedAt: '2019-03-07T08:08:03.326Z',
  },
  {
    id: 2,
    title: 'Brunch',
    createdAt: '2019-03-07T08:08:03.326Z',
    updatedAt: '2019-03-07T08:08:03.326Z',
  },
  {
    id: 3,
    title: 'Lunch',
    createdAt: '2019-03-07T08:08:03.326Z',
    updatedAt: '2019-03-07T08:08:03.326Z',
  },
  {
    id: 4,
    title: 'Evening Tea',
    createdAt: '2019-03-07T08:08:03.326Z',
    updatedAt: '2019-03-07T08:08:03.326Z',
  },
  {
    id: 5,
    title: 'Dinner',
    createdAt: '2019-03-07T08:08:03.326Z',
    updatedAt: '2019-03-07T08:08:03.326Z',
  },
];

export default {
  posts,
  categories,
};
