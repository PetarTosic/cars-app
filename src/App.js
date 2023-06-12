import './App.css';
import { API } from './shared/api';
import { Route, Routes } from "react-router-dom";
import AppCars from './components/AppCars';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Welcome from './components/Welcome';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  // API.get("Messages/greet").then((response) => console.log(response.data.greeting));
  // API.get("/cars").then(({data}) => console.log(data));

  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<Welcome />}></Route>
        <Route path="/cars" element={<AppCars />}></Route>
        <Route path="/add/" element={<Add />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;