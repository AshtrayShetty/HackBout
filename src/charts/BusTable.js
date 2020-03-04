import React, {useState, useEffect} from 'react'
import boxStyle from './box.module.css'
import tableStyle from './table.module.css'
import ColorTime from './ColorTime'

const BusTable=(props)=>{

    const [colorMax, setColorMax]=useState([]);

    useEffect(()=>{
        getColorTime();
    }, []);

    const getColorTime=async()=>{

        const response=await fetch('http://localhost:4010/analytics/routes');
        const data=await response.json();
        let objList=[];

        data.routes.forEach(route => {

            let obj={
                route: route.route,
                days: []
            };

            route.days.forEach(day=>{
                let max=0;
                day.forEach(passCount=>{
                    if(passCount>max){max=passCount;}
                });
                obj.days.push(max);
            });

            objList.push(obj);

        });
        
        setColorMax(objList);
    }

    return(
        <div className={boxStyle.box} style={{width:'1200px'}}>
            <h1 className={boxStyle.header}>{props.title}</h1>
            <table className={tableStyle.table_style}>
                <tr className={tableStyle.rowStyle}>
                    <th className={tableStyle.headStyle} rowSpan="2" style={{fontSize:'18px'}}>Route</th>
                    <th className={tableStyle.headStyle} colSpan="7" style={{fontSize:'18px'}}>Maximum Passengers Per Hour</th> 
                </tr>
                <tr className={tableStyle.rowStyle}>
                    <th className={tableStyle.headStyle}>8:00-9:00 AM</th>
                    <th className={tableStyle.headStyle}>9:00-10:00 AM</th>
                    <th className={tableStyle.headStyle}>10:00-11:00 AM</th>
                    <th className={tableStyle.headStyle}>12:00-1:00 PM</th>
                    <th className={tableStyle.headStyle}>2:00-3:00 PM</th>
                    <th className={tableStyle.headStyle}>4:00-5:00 PM</th>
                    <th className={tableStyle.headStyle}>6:00-7:00 PM</th>
                </tr>
                {colorMax.map(obj=><ColorTime route={obj.route} days={obj.days} />)}
            </table>
        </div>
    );
}


export default BusTable