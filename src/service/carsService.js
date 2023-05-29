import { API } from "../shared/api";

export const getCars = () => {
  return API.get("/cars");
}

export const getCar = (id) => {
  return API.get(`/cars/${id}`)
}

export const deleteCar = (id) => {
  return API.delete(`/cars/${id}`)
}

export const editCars = (
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  engine,
  numberOfDoors,
  index
) => {
return API.put(`/cars/${index}`, {
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  engine,
  numberOfDoors
});
};

export const postCars = (
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    numberOfDoors
) => {
  return API.post("/cars", {
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    numberOfDoors
  });
};