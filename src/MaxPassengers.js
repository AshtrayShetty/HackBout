import React, {useState, useEffect} from "react"
import {Bar} from 'react-chartjs-2'
import boxStyle from './box.module.css'

const MaxPassengers=(props)=>{
    
    const [data, setData]=useState({});

    useEffect(()=>{
        getPassengerArray();
    }, []);

    const getPassengerArray=async()=>{

        const response=await fetch("http://localhost:4010/analytics/passengers");
        const data=await response.json();
        let prevMonth=0, max=0, countArray=[];

        data.analytics.forEach(month => {
            if(month.month!==prevMonth){
                countArray.push(max);
                max=month.passengers;
                prevMonth+=1;
            }else if(max<month.passengers){max=month.passengers;}
        });

        countArray.push(max);

        const context={
            data:{
                labels:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets:[{
                    label: "Maximum Number of Passengers",
                    data: countArray,
                    backgroundColor: [
                        'rgba(228, 80, 80, 0.57)',
                        'rgba(255, 252, 71, 0.719)',
                        'rgba(241, 125, 79, 0.774)',
                        'rgba(114, 252, 35, 0.534)',
                        'rgba(12, 207, 93, 0.534)',
                        'rgba(22, 247, 235, 0.534)',
                        'rgba(45, 155, 206, 0.534)',
                        'rgba(32, 79, 179, 0.534)',
                        'rgba(236, 40, 236, 0.651)',
                        'rgba(40, 43, 216, 0.479)',
                        'rgba(241, 43, 76, 0.808)',
                        'rgba(138, 52, 146, 0.568);'
                    ],
                    borderColor: [
                        'rgb(228, 80, 80)',
                        'rgb(255, 252, 71)',
                        'rgb(241, 125, 79)',
                        'rgb(114, 252, 35)',
                        'rgb(12, 207, 93)',
                        'rgb(22, 247, 235)',
                        'rgb(45, 155, 206)',
                        'rgb(32, 79, 179)',
                        'rgb(236, 40, 236)',
                        'rgb(40, 43, 216)',
                        'rgb(241, 43, 76)',
                        'rgb(138, 52, 146);'
                    ]
                }]
            }
        }

        setData(context);

    }
    
    
    return(
        <div className={boxStyle.box} style={{position:'relative'}}>
            <h1 className={boxStyle.header}>{props.title}</h1>
            <Bar 
                options={{
                    responsive: true, 
                    scales:{
                        yAxes: [{
                            ticks: {beginAtZero: true}
                        }]
                    }
                }} 
                data={data.data}    
            />
        </div>
    );
}

export default MaxPassengers