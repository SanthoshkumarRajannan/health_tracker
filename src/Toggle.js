import React,{useState} from 'react';
import './Toggle.css'
const Toggle=()=>{
    
    const [Toggle,setToggle]=useState(false);

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
        </div>
    );
}

export default Toggle;