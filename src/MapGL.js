import React, { useState, useEffect } from  'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import boxStyle from './charts/box.module.css'


// ReactMapGL.accessToken="pk.eyJ1IjoiYXNocmF5MSIsImEiOiJjazdlMnpucW4wbGUwM29ud2Fxb3RzNzlyIn0.eI9IYzHKk124afJRPcFi6Q";
 
const MapGl=(props)=>{

    const [viewPort, setViewPort]=useState({
        latitude: 12.918075,  
        longitude: 77.5989,
        width:'560px',
        height: '500px',
        zoom: 15
    });

    // http://localhost:4010/buses
    const [object, setObject]=useState([]);
    const [stop, setStop]=useState([]);
    const [selectedLoc, setSelectedLoc]=useState(null);
    const [selectedStop, setSelectedStop]=useState(null);

    useEffect(()=>{
        getObjectArr();
    }, []);

    const getObjectArr=async()=>{
        const response=await fetch('http://c93139fb.ngrok.io/buses');
        const data=await response.json();
        console.log(data.buses);
        setObject(data.buses);
        let arr=[]
        data.routes.forEach(route => {
            route.stops.forEach(Stop=>arr.push(Stop));
        });
        setStop(arr);
    }

    return(
        <div className={boxStyle.box} style={{width: '600px', height: '590px'}}>
            <h1 className={boxStyle.header}>{props.title}</h1>
            <ReactMapGL 
                {...viewPort} 
                mapboxApiAccessToken="pk.eyJ1IjoiYXNocmF5MSIsImEiOiJjazdlMnpucW4wbGUwM29ud2Fxb3RzNzlyIn0.eI9IYzHKk124afJRPcFi6Q"
                onViewportChange={viewPort=>setViewPort(viewPort)}
                mapStyle="mapbox://styles/ashray1/ck7e9vzl106zu1ilgo9rorno8"
            >
                {object.map(obj=>(
                    <Marker key={object.indexOf(obj)} latitude={obj.longitude} longitude={obj.latitude}>
                        <button 
                            className={boxStyle.markerBtn}
                            onClick={(e)=>{
                                e.preventDefault();
                                setSelectedLoc(obj);
                            }}
                        >
                            <img src="./bus.png" alt="bus location" />
                        </button>
                        {console.log(obj)}
                    </Marker>
                ))}
                {stop.map(stp=>(
                    <Marker key={stop.indexOf(stp)} latitude={stp.longitude} longitude={stp.latitude}>
                        <button 
                            className={boxStyle.markerBtn}
                            onClick={(e)=>{
                                e.preventDefault();
                                setSelectedStop(stp);
                            }}
                        >
                            <img src="./location.png" alt="stop location" />
                        </button>
                        {console.log(stp)}
                    </Marker>
                ))}
                {selectedLoc ? (
                    <Popup 
                        latitude={selectedLoc.longitude} 
                        longitude={selectedLoc.latitude}
                        onClose={()=>setSelectedLoc(null)}
                    >
                        <div>
                            <strong>Bus number: {selectedLoc.bus}</strong><br />
                            Passengers on board: {selectedLoc.passengers}<br />
                            Seats vacant: {selectedLoc.seats}<br />
                        </div>
                    </Popup>
                ) : null}
                {selectedStop ? (
                    <Popup 
                        latitude={selectedStop.longitude} 
                        longitude={selectedStop.latitude}
                        onClose={()=>setSelectedStop(null)}
                    >
                        <div>
                            <strong>Stop: {selectedStop.name}</strong>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}

export default MapGl;