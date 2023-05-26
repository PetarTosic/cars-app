import './App.css';
import { API } from './shared/api';
import { Route, Routes } from "react-router-dom";
import AppCars from './components/AppCars';
import Add from './pages/Add';

function App() {
  // API.get("Messages/greet").then((response) => console.log(response.data.greeting));
  // API.get("/cars").then(({data}) => console.log(data));

  return (
    <Routes>
      <Route index element={<AppCars />}></Route>
      <Route path="/add" element={<Add />}></Route>
    </Routes>
  );
}

export default App;