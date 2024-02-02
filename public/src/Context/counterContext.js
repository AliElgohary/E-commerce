import { createContext, useState } from "react";

export const counterContect = createContext();

export default function CounterContextProvider(props) {
    console.log(props);
  let [counter, setCounter] = useState(10);
  
  return <counterContect.Provider value={{counter,setCounter}}>
    {props.children}
  </counterContect.Provider>;
}
