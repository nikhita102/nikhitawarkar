import React from "react";
import { useState } from "react";

function NameChanger(){
    const[name,setName]=useState("bolu")
    const changeName1=()=>setName("golu")
    const changeName2=()=>setName("molu")
    const changeName3=()=>setName("dolu")

    return(
        <div>
  <h2>Name: {name}</h2>
  <button onClick= {{changeName1,changeName2,changeName3}}>Change name</button>
</div>
    ); 
}

export default NameChanger;