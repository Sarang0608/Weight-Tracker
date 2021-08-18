import React, { useState, useEffect } from 'react'
import classes from './WeightGraph.module.css'
import { Line } from 'react-chartjs-2'

function WeightGraph(props) {
 
    let [weightState, setWeightState] = useState({
        weights: [],
        dates: []
    })

    useEffect(() => {
        let graphData = props.weightData

        graphData = graphData.sort((a,b) => {
            return Date.parse(a.date) - Date.parse(b.date)
        })

        let weightData = []
        let dateData = []
        let dataArray = [...graphData]

        for(let obj in dataArray) {
            weightData.push(dataArray[obj]['weight'])
            dateData.push(dataArray[obj]['date'])
        }
        setWeightState({
            weights: weightData,
            dates: dateData
        })
        
    }, [props])

    let state = {
        labels: weightState.dates,
        datasets: [
            {
                label: 'Weight',
                fill: false,
                lineTension: 0.75,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: weightState.weights
            }
        ]
    }
    
    return(
        <div className = {classes['weight-graph']}>
            <h3 className = {classes.header}>Weight History</h3>
            <div className = {classes.graph}>
            <Line 
                data= {state} 
                options= {{
                    title: {
                        display: true,
                        text: 'Your weight distribution according to dates',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}/>
            </div>
        </div>
    )
}

export default WeightGraph