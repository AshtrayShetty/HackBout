import React from "react"
import Money from './Money'
import MaxPassengers from './MaxPassengers'
import BusTable from './BusTable'
import Heatmap from './Heatmap'
// import TravelAPI from './TravelAPI'

const BoxLayout=()=>{

    return(
        <div className="box-layout">
            <MaxPassengers title="Usage Statistics" />
            <Money title="Money Transactions" />
            <Heatmap title="Passenger Density per Day" />
            <BusTable title="Bus Table" />
        </div>
    );
}

export default BoxLayout;