import React, {useState, useEffect} from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import boxStyle from './box.module.css'
import ReactTooltip from 'react-tooltip'

const Heatmap=(props)=>{
    
    let startDate=new Date();
    startDate.setMonth(startDate.getMonth()-4);
    let endDate=new Date();
    let tempDate=new Date();
    tempDate.setMonth(startDate.getMonth());
    tempDate.setFullYear(startDate.getFullYear());    
    const [countDate, setCountDate]=useState([]);
    
    useEffect(()=>{
        getCountArr();
    }, []);
    
    const getCountArr=async()=>{
        const response= await fetch('http://localhost:4010/analytics/routes');
        const data=await response.json();
        let obj={
            date: '',
            count: 0
        };
        const countArr=[];
        data.routes.forEach(route => {
            route.days.forEach(hour=>{
                hour.forEach(population=>{
                    obj.date=`${tempDate.getFullYear()}-${tempDate.getMonth()}-${tempDate.getDate()}`;
                    obj.count=population;
                    countArr.push(obj);
                    tempDate.setDate(tempDate.getDate()+1);
                    obj={date: '', count: 0};
                });
            });
        });
        setCountDate(countArr);
    }

    const dataAttr=()=>countDate.map(data=>`${data.date} has a value: ${data.count}`)

    return(
        <div className={boxStyle.box} style={{width: '700px', height: '350px'}}>
            <h1 className={boxStyle.header}>{props.title}</h1>
            <div style={{height: '600px', width: '600px', marginTop: '20px'}}>
                <CalendarHeatmap
                    startDate={`${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`}
                    endDate={`${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`}
                    values={countDate}
                    showMonthLabels={true}
                    showWeekdayLabels={true}
                    classForValue={value => {
                        if (!value) {
                            return 'color-empty';
                        }
                        return `color-github-${(value.count)%5}`;
                    }}
                    tooltipDataAttrs={value => {
                    return {
                        'data-tip': `${value.date} had passenger count: ${value.count}`,
                    };
                    }}
                />
                <ReactTooltip />
            </div>
        </div>
    );
}

export default Heatmap;