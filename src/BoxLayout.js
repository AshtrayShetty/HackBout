import React from "react"
import Money from './charts/Money'
import MaxPassengers from './charts/MaxPassengers'
import BusTable from './charts/BusTable'
import Heatmap from './charts/Heatmap'
// import TravelAPI from './TravelAPI'
import MapGL from './MapGL'

const BoxLayout=()=>{

    return(
        <div className="box-layout">
            <MaxPassengers title="Usage Statistics" />
            <Money title="Money Transactions" />
            <Heatmap title="Passenger Density per Day" />
            <BusTable title="Bus Table" />
            {/* <TravelAPI title="Bus Tracker"/> */}
            <MapGL title="Bus Tracker" />
        </div>
    );
}

export default BoxLayout;