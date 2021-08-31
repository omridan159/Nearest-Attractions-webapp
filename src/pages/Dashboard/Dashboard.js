import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className='coordinates-container'>
         <button onClick={getLocation}>הצג מיקום</button>
         <h1>Coordinates</h1>
         {lng ? (
            <div className='coordinates-container'>
               <div className='coordinates-content'>
                  <p>{status}</p>
                  {lat && <p>Latitude: {lat}</p>}
                  {lng && <p>Longitude: {lng}</p>}
               </div>
            </div>
         ) : (
            ''
         )}

         {showNearestAttractionsBtn ? (
            <Link
               to={{
                  pathname: `/nearest-attractions`,
                  state: { lat, lng },
               }}
            >
               <button>מצא אטרקציות בסביבתי</button>
            </Link>
         ) : (
            ''
         )}
      </div>
   );
};

export default Dashboard;
