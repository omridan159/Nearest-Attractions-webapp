import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import RadioForm from '../RadioForm/RadioForm';
import './Table.css';
import '@inovua/reactdatagrid-enterprise/index.css';
import '@inovua/reactdatagrid-enterprise/theme/default-dark.css';
import {
   gridStyle,
   columns,
   defaultSortInfo,
   checkboxColumn,
} from '../../../constants/Table-config';
import { filterAttractionsByType } from '../../../utils/helpers';

const Table = ({ data, attractionsTypes, unfavoriteAttractions }) => {
   const [gridRef, setGridRef] = useState(null);
   const [width, setWidth] = useState(window.innerWidth);
   const [filteredAttractions, setFilteredAttractions] = useState(null);
   const [selectedAttractionType, setSelectedAttractionType] = useState(null);

   const handleRadio = (e) => {
      const value = e.target.value;
      setSelectedAttractionType(value);
   };

   useEffect(() => {
      if (selectedAttractionType) {
         const attractionsByType = filterAttractionsByType(
            selectedAttractionType,
            data
         );

         const delayTheSerachExecution = setTimeout(() => {
            setFilteredAttractions(attractionsByType);
         }, 200);

         return () => clearTimeout(delayTheSerachExecution);
      }
   }, [selectedAttractionType, data]);

   useEffect(() => {
      function handleResize() {
         setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, [width]);

   //When the screen resizes, scroll to the right side of the table to see the start of it
   const scrollToLeft = useCallback(() => {
      return (
         gridRef &&
         gridRef.current.smoothScrollTo(900, {
            orientation: 'horizontal',
            duration: 500,
         })
      );
   }, [gridRef]);

   useEffect(() => {
      width < 1340 && scrollToLeft();
   }, [width, scrollToLeft]);

   return (
      <div className='table-container'>
         <RadioForm
            handleRadio={handleRadio}
            attractionsTypeList={attractionsTypes}
            selectedAttractionType={selectedAttractionType}
         />
         <ReactDataGrid
            onReady={setGridRef}
            idProperty='_id'
            rtl={true}
            columns={columns}
            defaultSortInfo={defaultSortInfo}
            checkboxColumn={checkboxColumn}
            checkboxOnlyRowSelect={true}
            defaultSelected={true}
            defaultUnselected={unfavoriteAttractions}
            dataSource={filteredAttractions ? filteredAttractions : data}
            theme={'default-dark'}
            style={gridStyle}
         />
      </div>
   );
};

export default Table;
