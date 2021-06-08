import React from 'react';
//import WbSunnyIcon from '@material-ui/icons/WbSunny';
import "./weather.style.css";
const Weather = (props) =>{
    return (
     <div className = "container text-light">
        <div className = "cards pt-4">
            <h1 classname = "py-3">{props.city}</h1>
            <h5 className = "py-4 height-2">
               <i className =  {` wi ${props.weathericon} display-1`} />
            </h5>
            {props.temp?(
                <h1 className = "py-2">{props.temp}&deg;</h1>
            ):null}
            {/**show max and min temperature **/}
            {minmaxTemp(props.temp_min, props.temp_max)}
            
            <h4 className = "py-3">{props.description}</h4>
        </div>
     </div>
 )
}

const  minmaxTemp = (min,max) =>{
    if(min && max){
    return (
        <h3>
            <span className = "px-4">Min {min}&deg;</span>
            <span className = "px-4">Max {max}&deg;</span>
        </h3>
    )
    }
};
export default Weather;