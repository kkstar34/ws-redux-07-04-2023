import { useDispatch, useSelector } from "react-redux"
import changeName from "./redux/actions/changeName";
import NavBar from './NavBar';


function App() {

  let dispatch = useDispatch();

  const state = useSelector((state) => state)

  const handleChangeName= () => {
    dispatch(changeName({
      name : "Axel",
      lastName :"Mangli"
    }));
  }
 
  return (
    <div>
      <p>Hello my name is : {state.name} and my lastName is : {state.lastName}</p>
      <button onClick={handleChangeName}>Change</button>


      <NavBar/>
    </div>
  )
}

export default App