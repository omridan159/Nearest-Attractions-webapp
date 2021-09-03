import React, { useState, useEffect, useMemo } from 'react';
import './Table.css';
import '@inovua/reactdatagrid-enterprise/index.css';
import '@inovua/reactdatagrid-enterprise/theme/default-dark.css';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import {
   getAttractionTypesList,
   filterAttractionsByType,
} from '../../utils/helpers';
// import { updateAttractionsData } from '../../store/slices/attractionsDataSlice';
import { gridStyle, columns, defaultSortInfo } from '../../constants/Table';

const Table = ({ data }) => {
   const [attractionType, setAttractionType] = useState(null);
   const [filteredAttractions, setFilteredAttractions] = useState(null);

   /*    const onEditComplete = ({ value, columnId, rowIndex, data }) => {
      const key = data._id;
      dispatch(updateAttractionsData({ value, columnId, key }));
   }; */

   const handleRadio = (e) => {
      const value = e.target.value;
      setAttractionType(value);
   };

   const attractionsTypeList = useMemo(() => {
      return getAttractionTypesList(data);
   }, [data]);

   useEffect(() => {
      if (attractionType) {
         const attractionsByType = filterAttractionsByType(
            attractionType,
            data
         );

         const delayTheSerachExecution = setTimeout(() => {
            setFilteredAttractions(attractionsByType);
         }, 300);

         return () => clearTimeout(delayTheSerachExecution);
      }
   }, [attractionType, data]);

   return (
      <div className='table-wrapper'>
         <div className='form-container'>
            <div onChange={handleRadio} className='radio-form'>
               {attractionsTypeList.map((attraction) => {
                  return (
                     <div className='radio-wrapper' key={attraction} dir='rtl'>
                        <label className='radio-label'>
                           <input
                              type='radio'
                              readOnly
                              name={attraction}
                              value={attraction}
                              checked={attraction === attractionType}
                           />
                           <span>{attraction}</span>
                        </label>
                     </div>
                  );
               })}
            </div>
         </div>

         <ReactDataGrid
            idProperty='id'
            // onEditComplete={onEditComplete}
            rtl={true}
            columns={columns}
            defaultSortInfo={defaultSortInfo}
            dataSource={filteredAttractions ? filteredAttractions : data}
            theme={'default-dark'}
            style={gridStyle}
         />
      </div>
   );
};

export default Table;
