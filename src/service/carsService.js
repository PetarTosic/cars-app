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
  max_speed,
  is_automatic,
  engine,
  number_of_doors,
  index
) => {
return API.put(`/cars/${index}`, {
  brand,
  model,
  year,
  max_speed,
  is_automatic,
  engine,
  number_of_doors
});
};

export const postCars = (
    brand,
    model,
    year,
    max_speed,
    is_automatic,
    engine,
    number_of_doors
) => {
  return API.post("/cars", {
    brand,
    model,
    year,
    max_speed,
    is_automatic,
    engine,
    number_of_doors
  });
};