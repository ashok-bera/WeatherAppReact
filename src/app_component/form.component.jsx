import React from 'react';
import './form.style.css';
const Form = props =>{
    // here in form onSumit clicked we are loading the weather for specified city and country
    return (
        <div className = "container h-100">
           <form onSubmit = {props.loadweather}>
            <div>{props.error?error():""}</div> 
               <div className = "row">
                <div className = "col-md-3 offset-md-2">
                    <input type = "text" className = "form-control" 
                           name = "city" autoComplete="off" 
                           placeholder = "city"/>
                </div>

                <div className = "col-md-3">
                <input type = "text" 
                       className = "form-control" name = "country" 
                       autoComplete="off" placeholder = "country"/>
                </div>

                <div className = "col-md-3 mt-md-0  py-2 text-md-left">
                    <button  className = "btn btn-warning br-20 ">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    )
}

const  error = ()=>{
    return (
        <div classname = "alert alert-danger mx-5" role = "alert"> Plaese enter city and countyr </div>
    )
}

export default Form;