import { useEffect, useState } from "react";
import { deleteCar, getCars, postCars } from "../service/carsService";
import { Link } from "react-router-dom";

const AppCars = () => {
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    getCars().then(({data}) => setCars(data));
  }, []);

  const isItAuto = ((autom) => {
    if(autom){
      return 'Yes';
    }
    return 'No';
  })

  const deleteACar = ((id) => {
    deleteCar(id);
    setCars((prevState) =>
      prevState.filter((car) => car.id !== id)
    );
  })
  
  return (
    <table className="table container mt-5">
    <thead>
      <tr>
        <th>Brand</th>
        <th>Model</th>
        <th>Year</th>
        <th>Max Speed</th>
        <th>Automatic</th>
        <th>Engine</th>
        <th>Number of Doors</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {cars.map((car, index) => (
        <tr key={index}>
          <td>{car.brand}</td>
          <td>{car.model}</td>
          <td>{car.year}</td>
          <td>{car.maxSpeed}</td>
          <td>{isItAuto(car.isAutomatic)}</td>
          <td>{car.engine}</td>
          <td>{car.numberOfDoors}</td>
          <td>
            <Link className="btn btn-primary" to={`/edit/${car.id}`}>
              Select
            </Link>
          </td>
          <td>
            <button className="btn btn-primary" onClick={() => deleteACar(car.id)}>
              -
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
};

export default AppCars;