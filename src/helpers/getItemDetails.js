const details = {
      motor: "v8",
      horsepower: "400"
    };
  
  
  export const getItemDetails = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(details), 3000);
      });
    };
    