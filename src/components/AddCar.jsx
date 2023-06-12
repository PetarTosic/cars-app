import { useEffect, useState } from "react";
import { editCars, getCar, postCars } from "../service/carsService";
import { Link, useNavigate } from "react-router-dom";

let years = [];

for (let i = 1990; i <= 2018; i++) {
  years.push(i);
}

const AddCar = ({index}) => {
  const [state, setState] = useState({
    brand: "",
    model: "",
    year: 0,
    maxSpeed: 0,
    isAutomatic: false,
    engine: "",
    numberOfDoors: 0,
  });

  useEffect(() => {
    if(index != undefined) {
      getCar(index).then(({data}) => setState(data));
    }
  }, []);
  let navigate = useNavigate();

  let placeholder = 'Add';
  if(index != undefined) {
    placeholder = 'Edit';
  }

  const handleInputBool = (event) => {

    const name = event.target.name;
    const value = event.target.checked;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = (event, state) => {
    event.preventDefault();

    if(state.brand.length < 2 || state.model.length < 2 || state.engine.length < 1) {
      alert('Brand and Model names need to be longer than 2 chars.');
      return;
    }
    if(index == undefined) {
      postCars(
        state.brand,
        state.model,
        state.year,
        state.maxSpeed,
        state.isAutomatic,
        state.engine,
        state.numberOfDoors
      );
    }else{
      editCars(
        state.brand,
        state.model,
        state.year,
        state.maxSpeed,
        state.isAutomatic,
        state.engine,
        state.numberOfDoors,
        index
      );
    }
    resetInput();

    navigate('/cars');
  };

  const resetInput = () => {
    setState({
      brand: "",
      model: "",
      year: 0,
      maxSpeed: 0,
      isAutomatic: false,
      engine: "",
      numberOfDoors: 0,
    });
  }

  return (
    <div className="container mt-5" style={{ width: "300px"}}>
      <form
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
            onChange={handleInputBool}
            name="isAutomatic"
            value={state.isAutomatic}
            placeholder="is automatic"
          />
          <label className="form-check-label" for="isAutomatic">
            {" "}
            Is Automatic
          </label>
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
          {placeholder}
        </button>
      </form>
      <button onClick={resetInput} className="w-100 btn btn-lg btn-primary mt-3">
        Reset
      </button>
    </div>
  );
};

export default AddCar;
