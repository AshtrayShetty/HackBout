import React from 'react'
import tableStyle from './table.module.css'

const ColorTime=({route, days})=>{

    const style={
        backgroundColor: route,
        position: 'relative',
        width: '30px',
        height: '5px',
        bottom: '2.5px',
        left: '40%',
        top: '10px'
    };

    return(
        <tr className={tableStyle.rowStyle}>
            <td className={tableStyle.headStyle}>
                <div style={style}></div>
                <p style={{marginTop: '10px'}}>{route}</p>
            </td>
            {days.map(day=><td className={tableStyle.headStyle}>{day}</td>)}
        </tr>
    );
}

export default ColorTime