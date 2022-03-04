export const products = [
    { id: 1,  foto:'https://www.brunofritsch.cl/file/collections/jeep-grand-cherokee-galeria.1.jpg' ,marca: 'JEEP', modelo: "Grand Cherokee", price: 100000 },
    { id: 2,  foto:'https://wallpapercave.com/wp/wp6773486.jpg' ,marca: 'AUDI', modelo: "Q8", price: 140000 },
    { id: 3,  foto:'https://images3.alphacoders.com/943/thumb-1920-943872.jpg' ,marca: 'rolls royce', modelo: "Phantom", price: 340000 },
    { id: 4,  foto:'https://cdn.motor1.com/images/mgl/6y6xb/s1/bmw-530e-xdrive-limousine.jpg' ,categoria: 'BMW', modelo: "5 Series", price: 115000 },
    { id: 5,  foto:'https://images8.alphacoders.com/906/906809.jpg' ,marca: 'AUDI', modelo: "R8", price: 160000 },
    { id: 6,  foto:'https://miuramag.com/wp-content/uploads/2020/04/AmarokV6.jpg' ,marca: 'volkswagen', modelo: "amarok v6", price: 40000 },
  ]
  
 const getFetch = new Promise((resolve, reject)=>{
      let url = 'cashop.com'
      
      if (url === 'cashop.com') {
        setTimeout(() => {
          resolve(products)        
        }, 2000);
      }else{
        reject('400 not found')
      }
  })

  export default getFetch;
