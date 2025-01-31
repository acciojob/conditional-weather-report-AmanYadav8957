import React from "react"
const WeatherDisplay=({data})=>{
  const {temperature,condition}=data;
  return (
    <div>
    <p> Temperature :{temperature}
    
    </p>
    </div>
    )
}
