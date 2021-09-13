import React from 'react';



function Hello(props){

    function ClickMe(){
        alert("Button is clicked");
    }

    return(
        <div>
            <h1>Hello my name is: {props.name} and i'm a {props.lastname}</h1>
            <button className="btn btn-success" onClick={ClickMe}>click me</button>
        </div>
    )

}


export default Hello;