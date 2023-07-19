import React from "react"
import { useState, useMemo } from "react";
import Router from "./02.navigation/Router"
import SalonContext from "./03.globals/04.Context/SalonContext"
import UserContext from "./03.globals/04.Context/UserContext";

function App() {

  const initialSalonContext = () =>
    JSON.parse(localStorage.getItem("salonContext")) || null;

  const initialUserContext = () =>
    JSON.parse(localStorage.getItem("userContext")) || null;

  const [salonContext, setSalonContext] = useState(initialSalonContext);

  const [userContext, setUserContext] = useState(initialUserContext);



  const salonValue = useMemo(() => {
    return { salonContext, setSalonContext };
  }, [salonContext]);

  const userValue = useMemo(() => {
    return { userContext, setUserContext };
  }, [salonContext]);
  
  return (
    <div className="font-texts">

   <SalonContext.Provider value={salonValue}>
   <UserContext.Provider value={userValue}>
      <Router />
  </UserContext.Provider>
  </SalonContext.Provider>
    </div>
  )
}

export default App
