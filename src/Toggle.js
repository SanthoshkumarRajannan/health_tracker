import React,{useState} from 'react';
import './Toggle.css'
//import SelectOption from './SelectOptions/SelectOptions';
const Toggle=()=>{
    
    const [Toggle,setToggle]=useState(false);
console.log("Toggle",Toggle);
  const  toggleHandler =()=>{
        const presentState= Toggle;
        setToggle(!presentState);
       
    }
    let displayContent  ="Hello World";
if(Toggle){
    displayContent= "";
}

    return(
      
        <div>
            <button onClick={toggleHandler} className="btn">Toggle</button>
                <div className="content"> 
                {displayContent}
                </div>  
                {/* <SelectOption /> */}
        </div>
    );
}

export default Toggle;