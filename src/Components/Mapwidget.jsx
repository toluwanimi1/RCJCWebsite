import { marker } from 'leaflet'
import "leaflet/dist/leaflet.css";
import React from 'react'
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import { Icon, divIcon, point } from "leaflet";



const Mapwidget = () => {
  const position = [39.29528705799907, -76.43124745291672];

  const customIcon = new Icon({
    iconUrl: require("../Assets/placeholder.png"),
    iconSize: [38, 38] // size of the icon
  });
  

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ flex:1, width:"100%",height: "100%"}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position} icon={customIcon}>
      <Popup>
      Resurrection Church of Jesus Christ. <br /> <a href="https://maps.app.goo.gl/nJyaQFWwDyiWUT2P9" target="_blank">601 Back River Neck Rd, Essex, MD 21221</a>
      </Popup>
    </Marker>
  </MapContainer>
  
  )
}

export default Mapwidget


