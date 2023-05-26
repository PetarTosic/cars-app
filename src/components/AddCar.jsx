import { useState } from "react";
import { postCars } from "../service/carsService";
import { Link } from "react-router-dom";

const AddCar = () => {
  let years = [];

  for (let i = 1990; i <= 2018; i++) {
    years.push(i);
  }

  const [state, setState] = useState({
    brand: "",
    model: "",
    year: 0,
    maxSpeed: 0,
    isAutomatic: false,
    engine: "",
    numberOfDoors: 0,
  });

  const handleInputChange = (event) => {
    console.log(event.target.checked);
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = (event, state) => {
    event.preventDefault();
    console.log(state.isAutomatic);
    postCars(
      state.brand,
      state.model,
      state.year,
      state.maxSpeed,
      state.isAutomatic,
      state.engine,
      state.numberOfDoors
    );

    setState({
      brand: "",
      model: "",
      year: 0,
      maxSpeed: 0,
      isAutomatic: false,
      engine: "",
      numberOfDoors: 0,
    });
  };

  return (
    <form
      className="container mt-5"
      style={{ width: "300px" }}
      onSubmit={(event) => handleAdd(event, state)}
    >
      <h1 className="h3 mb-3 fw-normal">Add new car:</h1>

      <div className="form-floating mt-3">
        <input
          name="brand"
          value={state.brand}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="brand"
        />
        <label>Brand</label>
      </div>
      <div className="form-floating mt-3">
        <input
          name="model"
          value={state.model}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="model"
        />
        <label>Model</label>
      </div>
      <div className="form-floating mt-3">
        <select
          className="form-control input"
          name="year"
          onChange={handleInputChange}
        >
          <option disabled defaultValue value>
            Select year:
          </option>
          {years.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        {/* <input
          name="year"
          value={state.year}
          onChange={handleInputChange}
          type="number"
          className="form-control"
          placeholder="year"
        />
        <label>Year</label> */}
      </div>
      <div className="form-floating mt-3">
        <input
          name="maxSpeed"
          value={state.maxSpeed}
          onChange={handleInputChange}
          type="number"
          className="form-control"
          placeholder="max speed"
        />
        <label>Max Speed</label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={handleInputChange}
          name="isAutomatic"
          value={state.isAutomatic}
          placeholder="is automatic"
        />
        <label className="form-check-label" for="isAutomatic">
          {" "}
          Is Automatic
        </label>
        {/* <input
          name="isAutomatic"
          value={state.isAutomatic}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="is automatic"
        />
        <label>Is Automatic</label> */}
      </div>
      <div className="form-floating mt-3">
        <input
          name="engine"
          value={state.engine}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="engine"
        />
        <label>Engine</label>
      </div>
      <div className="form-floating mt-3">
        <input
          name="numberOfDoors"
          value={state.numberOfDoors}
          onChange={handleInputChange}
          type="number"
          className="form-control"
          placeholder="number of doors"
        />
        <label>Number of doors</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddCar;
