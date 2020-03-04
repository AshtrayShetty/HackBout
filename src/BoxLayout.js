import React from "react"
import Money from './Money'
import MaxPassengers from './MaxPassengers'
import BusTable from './BusTable'
import Heatmap from './Heatmap'

const BoxLayout=()=>{

    return(
        <div className="box-layout">
            <MaxPassengers title="Usage Statistics" />
            <Money title="Max" img_or_href="lmao"/>
            <Heatmap />
            <BusTable title="Bus Table" />
        </div>
    );
}

export default BoxLayout;