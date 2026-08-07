import { useEffect } from "react";
import Home from "./pages/Home";


function App() {


  useEffect(() => {

    window.history.scrollRestoration = "manual";

    window.scrollTo(0,0);


  }, []);




  return (

    <Home />

  );

}


export default App;