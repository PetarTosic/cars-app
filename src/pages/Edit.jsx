import AddCar from "../components/AddCar";
import { useParams } from "react-router-dom";

const Edit = () => {
  const {id} = useParams();
  
  return <AddCar index={id}/>
}

export default Edit;