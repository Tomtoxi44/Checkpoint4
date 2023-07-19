import React from "react"
import { useState, useMemo } from "react";
import Router from "./02.navigation/Router"
import SalonContext from "./03.globals/04.Context/SalonContext"


function App() {

  const initialSalonContext = () =>
    JSON.parse(localStorage.getItem("orgaContext")) || null;

    const [salonContext, setSalonContext] = useState(initialSalonContext);

    const salonValue = useMemo(() => {
      return { salonContext, setSalonContext };
    }, [salonContext]);

  return (
    <div className="font-texts">
   <SalonContext.Provider value={salonValue}>
      <Router />
  </SalonContext.Provider>
    </div>
  )
}

export default App
