import React from 'react'
import formStyle from './createform.module.css'

const divStyle={
    position: 'absolute',
    left: '20%',
    top: '15%',
    display: 'flex', 
    flexDirection: 'column',
    height: '35vh'
}

const RemoveAccount=()=>{
    return(
        <div>
            <form style={divStyle} action="/">
                <p className={formStyle.title}>Conductor ID</p><br />
                <input type="text" className={formStyle.fullCol} required/><br />
                <input type="submit" value="Delete"  id={formStyle.submit} />
            </form>
        </div>
    );
}

export default RemoveAccount