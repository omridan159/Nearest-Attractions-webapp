import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../shared/Button/Button';
import TEXT from '../../../locales/hebrew';

const ShowNearestAttractionsBtn = ({ lat, lng }) => {
   return (
      <>
         <Link
            to={{
               pathname: `/nearest-attractions`,
               state: { lat, lng },
            }}
         >
            <Button
               className={'btn-shine btn-find-attractions'}
               text={TEXT['dashboard.header-find-attractions']}
            />
         </Link>
      </>
   );
};

export default ShowNearestAttractionsBtn;
