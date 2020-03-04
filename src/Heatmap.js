import React, {useState, useEffect} from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import boxStyle from './box.module.css'

const Heatmap=()=>{

    let startDate=new Date();
    startDate.setMonth(startDate.getMonth-4);
    let endDate=new Date();
    let tempDate=startDate;

    // while(tempDate<=endDate){
    //     dateArr.push(tempDate);
    //     
    // }

    const [countDate, setCountDate]=useState([]);
    
    useEffect(()=>{
        getCountArr();
    }, []);

    const getCountArr=async()=>{
        const response= await fetch('http://localhost:4010/analytics/routes');
        const data=await response.json();
        let countArr=[];
        let obj={
            date: '',
            count: 0
        };
        for(let i=data.routes.days.length-5; i<data.routes.days.length; i++){
            let dayArr=data.route.days[i];
            for(let j=0; j<dayArr.length && tempDate<=endDate; j++){
                obj.date=tempDate;
                obj.count=dayArr[j];
                countArr.push(obj);
                tempDate.setDate(tempDate.getDay()+1);
            }
        }
        while(tempDate<=endDate){
            obj.count=0;
            obj.date=tempDate;
            tempDate.setDate(tempDate.getDay()+1);
            countArr.push(obj);
        }
        setCountDate(countArr);
    }


    return(
        <div className={boxStyle.box} style={{width: '1000px', height: '1000px'}}>
            <div style={{width: '500px', height: '200px'}}>
                <CalendarHeatmap
                    startDate={startDate}
                    endDate={endDate}
                    values={countDate}
                    showMonthLabels={true}
                    showWeekdayLabels={true}
                />
            </div>
        </div>
    );
}

export default Heatmap;