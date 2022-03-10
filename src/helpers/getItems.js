const products = [
  {
    id: 1,
    image: "https://www.brunofritsch.cl/file/collections/jeep-grand-cherokee-galeria.1.jpg",
    brand: "JEEP",
    model: "Grand Cherokee",
    price: 100000,
    stock: 10,
  },
  {
    id: 2,
    image: "https://wallpapercave.com/wp/wp6773486.jpg",
    brand: "AUDI",
    model: "Q8",
    price: 140000,
    stock: 10,
  },
  {
    id: 3,
    image: "https://images3.alphacoders.com/943/thumb-1920-943872.jpg",
    brand: "rolls royce",
    model: "Phantom",
    price: 340000,
    stock: 10,
  },
  {
    id: 4,
    image: "https://cdn.motor1.com/images/mgl/6y6xb/s1/bmw-530e-xdrive-limousine.jpg",
    brand: "BMW",
    model: "5 Series",
    price: 115000,
    stock: 10,
  },
  {
    id: 5,
    image: "https://images8.alphacoders.com/906/906809.jpg",
    brand: "AUDI",
    model: "R8",
    price: 160000,
    stock: 10,
  },
  {
    id: 6,
    image: "https://miuramag.com/wp-content/uploads/2020/04/AmarokV6.jpg",
    brand: "volkswagen",
    model: "amarok v6",
    price: 40000,
    stock: 10,
  }
];


export const getItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 3000);
    });
  };
  