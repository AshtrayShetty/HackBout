import React, {useState, useEffect} from "react"
import boxStyle from "./box.module.css"
import {Line} from 'react-chartjs-2';

const Money=(props)=>{

    var moneyArr=[];
    const [money, setMoney]=useState(0);
    const [data, setData]=useState({});

    useEffect(()=>{
        moneyAnalytics();
    }, []);

    const moneyAnalytics=async()=>{

        const response=await fetch('http://127.0.0.1:4010/analytics/money');
        const data=await response.json();
        let sum=0;

        data.money.forEach(mon => {
            sum+=mon.money;
            moneyArr.unshift(mon.money);
        });
        moneyArr.unshift(0);

        const context={
            data:{
                labels:["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets:[
                    {
                        label:"Amount Transacted",
                        backgroundColor: 'rgba(42, 125, 202, 0.68)',
                        data: moneyArr,
                        borderColor: 'rgb(16, 90, 160)'
                    }
                ]
            }
        }

        setMoney(sum);
        setData(context);
    };

    return(
        <div className={boxStyle.box} style={{position:'relative'}}>
            <h1 className={boxStyle.header}>{props.title}</h1>
            <Line 
                options={{responsive: true}} 
                data={data.data}    
            />
            <div><strong><em><u>Total Amount Transacted</u></em></strong>: Rs.{money}</div>
        </div>
    );  
};

export default Money;