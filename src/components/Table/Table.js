import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './Table.css';
import '@inovua/reactdatagrid-enterprise/index.css';
import '@inovua/reactdatagrid-enterprise/theme/default-dark.css';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import RadioForm from '../RadioForm/RadioForm';
import {
   getAttractionTypesList,
   filterAttractionsByType,
} from '../../utils/helpers';
import {
   gridStyle,
   columns,
   defaultSortInfo,
   checkboxColumn,
} from '../../constants/Table';

const Table = ({ data, unfavoriteAttractions }) => {
   const [gridRef, setGridRef] = useState(null);
   const [width, setWidth] = useState(window.innerWidth);
   const [filteredAttractions, setFilteredAttractions] = useState(null);
   const [selectedAttractionType, setSelectedAttractionType] = useState(null);

   useEffect(() => {
      function handleResize() {
         setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, [width]);

   const scrollToLeft = () => {
      return gridRef && gridRef.current.setScrollLeft(900);
   };

   useEffect(() => {
      width < 600 && scrollToLeft();
   }, [width]);

   const handleRadio = (e) => {
      const value = e.target.value;
      setSelectedAttractionType(value);
   };

   const attractionsTypesList = useMemo(() => {
      return getAttractionTypesList(data);
   }, [data]);

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

   return (
      <div className='table-wrapper'>
         <RadioForm
            handleRadio={handleRadio}
            attractionsTypeList={attractionsTypesList}
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
