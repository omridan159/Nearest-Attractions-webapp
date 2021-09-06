import React, { useState } from 'react';
import Button from '../../components/shared/Button/Button';
import ShowNearestAttractionsBtn from '../../components/Dashboard/ShowNearestAttractionsBtn/ShowNearestAttractionsBtn';
import YourCoordinatesCard from '../../components/Dashboard/YourCoordinatesCard/YourCoordinatesCard';
import TEXT from '../../locales/hebrew';
import './Dashboard.css';

const Dashboard = () => {
   const [lat, setLat] = useState(null);
   const [lng, setLng] = useState(null);
   const [status, setStatus] = useState(null);
   const [showNearestAttractionsBtn, setShowNearestAttractionsBtn] =
      useState(false);

   const getLocation = () => {
      if (!navigator.geolocation) {
         setStatus('Geolocation is not supported by your browser');
      } else {
         setStatus('Locating...');
         navigator.geolocation.getCurrentPosition(
            (position) => {
               setStatus(null);
               setLat(position.coords.latitude);
               setLng(position.coords.longitude);
               setShowNearestAttractionsBtn(true);
            },
            () => {
               setStatus('Unable to retrieve your location');
            }
         );
      }
   };

   return (
      <div>
         <Button
            className={'btn-shine btn-show-coordinates'}
            onClick={getLocation}
            text={TEXT['dashboard.header-show-coordinates']}
         />

         {lng && lat && (
            <>
               <YourCoordinatesCard status={status} lat={lat} lng={lng} />
            </>
         )}

         {showNearestAttractionsBtn && (
            <ShowNearestAttractionsBtn lat={lat} lng={lng} />
         )}
      </div>
   );
};

export default Dashboard;
