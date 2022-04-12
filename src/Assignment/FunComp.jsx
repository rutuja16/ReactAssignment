import React from "react";
import { useState } from "react";


function FunctionComponent() {
    const [change,setChange]=useState(false)

    function ShowHide() {
        if(change===false){
            setChange(true)
        }
        else{
            setChange(false)
        }
    
    }
    

    return (
        <div className="box1">
            <button onClick={ShowHide}>To see Styling Using Functional Component</button>
            {
               change?
                <div className="compBox c1">
                    <h1>This is created using Functional Component</h1>
                    <p className="ext">This is done using External CSS</p>
                    <p style={{ color: 'blue' }}>This is done using Inline CSS</p>
                </div>:null
            }
        </div>
    )
}

export default FunctionComponent;