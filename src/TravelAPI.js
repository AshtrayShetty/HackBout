import React, {useState, useEffect} from 'react'
import Map from 'mapmyindia-react'
import boxStyle from './charts/box.module.css'

const TravelAPI=(props)=>{
    
    // const [passenger, setPassenger]=useState(0);
    // const [seat, setSeat]=useState(0);

    const [pasSeat, setPasSeat]=useState({});

    
    useEffect(()=>{
        getLatLong();
    }, []);

    const getLatLong=async()=>{
        const response=await fetch('http://localhost:4010/buses');
        const data=await response.json();
        console.log(data.buses);
        let obj={
            passengers: data.buses[0].passengers,
            seats: data.buses[0].seats
        }
        console.log(obj);
        setPasSeat(obj);
    }
    
    
    return(
        <div className={boxStyle.box} style={{width: '600px', height: '590px'}}>
            <h1 className={boxStyle.header}>{props.title}</h1>
            <Map
                center={[12.9857, 77.6057]}
                location= {false}
                markers={[
                    {
                        position:[12.8706, 77.6558],
                        draggable: false,
                        title: 'user'
                    },
                    {
                        position:[12.9857, 77.6057],
                        draggable: false,
                        title: `bus\nPassenger onboard: 50\nEmpty Seats: 20`
                    }
                ]}
                />
                {console.log(pasSeat)}
        </div>
    );
}

// const [latLong, setLatLong]=useState([]);
// const [center, setCenter]= useState([0, 0]);

// const getLatLong=async()=>{
    //     const response=await fetch('http://localhost:4010/buses');
//     const data=await response.json();
//     let arr=[];
//     let pass=data.buses[0].passengers;
//     let seat=data.buses[0].seats;
    
    // let latSum=0, longSum=0;
    // let obj={
    //     passengerCount: 0,
    //     seatCount: 0
    // };
    // data.buses.forEach(bus => {
    //     obj.position.push(bus.latitude);
    //     obj.position.push(bus.longitude);
    //     obj.title=bus.route;
    //     arr.push(obj);
    //     obj={position: [], title: '', draggable: false};
    //     // latSum+=bus.latitude;
    //     // longSum+=bus.longitude;
    // });
    // latSum=latSum/(data.buses.length);
    // longSum=longSum/(data.buses.length);
    // arr.push({
    //     position: [12.9141, 74.8560],
    //     title: 'user',
    //     draggable: false
    // })
    // console.log(pass, seat);
    // setPassenger(pass);
    // setSeat(seat);
    // console.log(latSum);
    // console.log(longSum);
    // setCenter([latSum, longSum]);
// }
// const customMarker=()=>{
//     window.addEventListener('load', ()=>{

//     });
// }

export default TravelAPI;