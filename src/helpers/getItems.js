const products = [
  {
    id: '1',
    image: "https://www.brunofritsch.cl/file/collections/jeep-grand-cherokee-galeria.1.jpg",
    brand: "JEEP",
    model: "Grand Cherokee",
    categoria: 'SUV',
    price: 100000,
  },
  {
    id: '2',
    image: "https://wallpapercave.com/wp/wp6773486.jpg",
    brand: "AUDI",
    model: "Q8",
    categoria: 'SUV',
    price: 140000,
  },
  {
    id: '3',
    image: "https://images3.alphacoders.com/943/thumb-1920-943872.jpg",
    brand: "ROLLS ROYCE",
    model: "Phantom",
    categoria: 'SEDAN',
    price: 340000,
  },
  {
    id: '4',
    image: "https://cdn.motor1.com/images/mgl/6y6xb/s1/bmw-530e-xdrive-limousine.jpg",
    brand: "BMW",
    model: "5 Series",
    categoria: 'SEDAN',
    price: 115000,
  },
  {
    id: '5',
    image: "https://images8.alphacoders.com/906/906809.jpg",
    brand: "AUDI",
    model: "R8",
    categoria: 'DEPORTIVO',
    price: 160000,
  },
  {
    id: '6',
    image: "https://miuramag.com/wp-content/uploads/2020/04/AmarokV6.jpg",
    brand: "VOLKSWAGEN",
    model: "Amarok v6",
    categoria: 'PICKUP',
    price: 40000,
  },
  {
    id: '7',
    image: "https://www.carpixel.net/w/e49ff2e2715661eafccbaae11f615636/porsche-cayenne-wallpaper-hd-73557.jpg",
    brand: "PORSCHE",
    model: "Cayenne",
    categoria: 'SUV',
    price: 180000,
  },
  {
    id: '8',
    image: "https://autoblog.com.ar/wp-content/uploads/2020/04/A3SEDAN5.jpg",
    brand: "AUDI",
    model: "A3",
    categoria: 'SEDAN',
    price: 160000,
  },
  {
    id: '9',
    image: "https://images5.alphacoders.com/882/thumb-1920-882510.jpg",
    brand: "MCLAREN",
    model: "720s",
    categoria: 'DEPORTIVO',
    price: 180000,
  },  
  {
    id: '10',
    image: "https://images4.alphacoders.com/895/895883.jpg",
    brand: "LAMBORGHINI",
    model: "Huracan Performante",
    categoria: 'DEPORTIVO',
    price: 210000,
  },
  {
    id: '11',
    image: "https://images4.alphacoders.com/898/thumb-1920-898317.jpg",
    brand: "RAM",
    model: "1500",
    categoria: 'PICKUP',
    price: 60000,
  },
  {
    id: '12',
    image: "https://www.carpixel.net/w/2b1b787310466a75edd7af29d7087880/jeep-gladiator-rubicon-wallpaper-hd-84946.jpg",
    brand: "JEEP",
    model: "Gladiator",
    categoria: 'PICKUP',
    price: 70000,
  },
  {
    id: '13',
    image: "https://www.carpixel.net/w/2b224fe716fe901f9fdacfa1a1339f43/ford-focus-rs-wallpaper-hd-24736.jpg",
    brand: "FORD",
    model: "Focus rs",
    categoria: 'HATCHBACK',
    price: 40000,
  },
  {
    id: '14',
    image: "https://www.carpixel.net/w/a6b785c0ee77ccff5510af25c0fb952b/audi-a1-citycarver-wallpaper-hd-96224.jpg",
    brand: "AUDI",
    model: "A1",
    categoria: 'HATCHBACK',
    price: 30000,
  },
  {
    id: '15',
    image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/12/03/15753954695684.jpg",
    brand: "VOLKSWAGEN",
    model: "Golf",
    categoria: 'HATCHBACK',
    price: 30000,
  }
];


export const getItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000);
    });
  };
  


export const getFetch = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(prod => prod.id === id)), 1000);
  });
};

export default products
