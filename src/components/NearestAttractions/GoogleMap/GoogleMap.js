import React from 'react';
import './GoogleMap.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {
   mapContainerStyle,
   options,
   mapCenter,
   libraries,
} from '../../../constants/GoogleMaps-config';

const GoogleMaps = ({ data }) => {
   const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
   });

   if (loadError) return 'An error occurred while loading maps';
   if (!isLoaded) return 'Loading Maps...';

   return (
      <div className='gmap-container'>
         <GoogleMap
            id='map'
            mapContainerStyle={mapContainerStyle}
            zoom={7}
            center={mapCenter}
            options={options}
            defaultZoom={7}
            defaultCenter={{ lat: 34.0853, lng: 32.7818 }}
         >
            {data.map((attraction) => (
               <Marker
                  key={attraction._id}
                  position={{
                     lat: Number(attraction.Y),
                     lng: Number(attraction.X),
                  }}
               />
            ))}
         </GoogleMap>
      </div>
   );
};

export default GoogleMaps;
