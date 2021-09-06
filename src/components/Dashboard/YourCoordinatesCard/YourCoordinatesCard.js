import React from 'react';
import TEXT from '../../../locales/hebrew';
import './YourCoordinatesCard.css';

const YourCoordinatesCard = ({ status, lat, lng }) => {
   return (
      <>
         <h2>{TEXT['dashboard.header-your-coordinates']}</h2>
         <div>
            <div className='coordinates-content'>
               <p>{status}</p>
               {lat && <p>Latitude: {lat}</p>}
               {lng && <p>Longitude: {lng}</p>}
            </div>
         </div>
      </>
   );
};

export default YourCoordinatesCard;
