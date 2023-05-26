import { useEffect, useState } from "react";
import { getCars, postCars } from "../service/carsService";

const AppCars = () => {
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    getCars().then(({data}) => setCars(data));
  }, []);
  console.log(cars);
  
  return (
    <div>
      {cars.map((car, id) => (
      <div key={id}>
        <p>Make: {car.brand}</p>
        <p>Model: {car.model}</p>
        <p>Year: {car.year}</p>
      </div>
      ))}
    </div>
  )
};

export default AppCars;