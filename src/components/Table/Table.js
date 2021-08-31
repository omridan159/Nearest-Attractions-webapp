import React from 'react';
import './Table.css'
import { useDispatch } from 'react-redux';
import '@inovua/reactdatagrid-enterprise/index.css';
import '@inovua/reactdatagrid-enterprise/theme/default-dark.css';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import { updateAttractionsData } from '../../store/slices/attractionsDataSlice';
import { gridStyle, columns, defaultSortInfo } from '../../constants/Table';


const Table = ({ data }) => {
   const dispatch = useDispatch();

   const onEditComplete = ({ value, columnId, rowIndex, data }) => {
      const key = data._id;
      dispatch(updateAttractionsData({ value, columnId, key }));
   };

   return (
      <div className='table-wrapper'>
         <ReactDataGrid
            idProperty='id'
            onEditComplete={onEditComplete}
            rtl={true}
            defaultSortInfo={defaultSortInfo}
            columns={columns}
            dataSource={data}
            theme={'default-dark'}
            style={gridStyle}
         />
      </div>
   );
};

export default Table;
