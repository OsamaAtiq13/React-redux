
import React from 'react';
import {incNumber,decNumber} from "./actions/index"
import {useSelector, useDispatch} from 'react-redux';
function App() {
  const dispatch =useDispatch()
  const myState=useSelector((state)=>state.ChangeTheNumber)
  return (
    <>
    
    <div>
      <a onClick={()=>{
        dispatch(decNumber())
      }}><span>Subtract</span></a>
      <input type="text" value={myState}  />
      <a onClick={()=>{
        dispatch(incNumber(5))
      }}><span>Addition</span></a>

    </div>
    </>
  );
}

export default App;
