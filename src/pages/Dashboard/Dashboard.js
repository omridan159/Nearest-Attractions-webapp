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
      <div>
         <button onClick={getLocation} className='btn-shine'>
            <span>הצג מיקום</span>
         </button>

         <h2>נתוני המיקום שלך</h2>
         {lng ? (
            <div>
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
               <button className='btn-shine btn-find-attractions'>
                  <span>מצא אטרקציות בסביבתי</span>
               </button>
            </Link>
         ) : (
            ''
         )}
      </div>
   );
};

export default Dashboard;
