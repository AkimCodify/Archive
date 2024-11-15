import React, { useContext } from "react";
import { AutoContext } from "./context/AutoContextProvider";

function App() {
  const {questions} = useContext(AutoContext)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
