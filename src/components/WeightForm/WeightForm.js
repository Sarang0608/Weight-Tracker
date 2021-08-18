import React, { useState, useEffect } from 'react'
import classes from './WeightForm.module.css'

function WeightForm(props) {

    let [weightState, setWeightState] = useState([])

    let date
    let weight

    function handleDateChange(event) {
        date = event.target.value
    }

    function handleWeightChange(event) {
        weight = event.target.value
    }

    function addData(event) {
        event.preventDefault()
        let newWeighObject = {}
        if(date && weight) {
            newWeighObject['date'] = date
            newWeighObject['weight'] = weight
            let newState = weightState.concat(newWeighObject)
            setWeightState(newState)
        }

        weight = 0
        date = undefined
    }

    useEffect(() => {
        props.liftState(weightState)
        //console.log(weightState)
    }, [weightState])

    return(
        <form className = {classes.form} onSubmit = {addData}>
            <label htmlFor="date-of-tracking"  className = {classes.date}>Date of Tracking the Weight:</label>
            <input type= "date" id="dot" name="dot" onChange = {handleDateChange} value = {date}/>
            <label htmlFor="weight" className = {classes.weight}>Weight (in Kilos)</label>
            <input type= "number" min= "0" step= "0.01" onChange = {handleWeightChange} value = {weight}/>
            <button className = {classes.submit}>Add Data</button>
        </form>
    )
}

export default WeightForm