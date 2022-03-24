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
    brand: "rolls royce",
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
    brand: "volkswagen",
    model: "amarok v6",
    categoria: 'PICKUP',
    price: 40000,
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
