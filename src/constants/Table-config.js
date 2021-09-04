import { store } from '../store/store';
import { updateAttractionFavoriteStatus } from '../store/actions/attractions';

const defaultSortInfo = { name: 'Distance', dir: -1, type: 'number' };

const gridStyle = {
   minHeight: 400,
   maxHeight: 500,
};

const checkboxColumn = {
   renderCheckbox: (checkboxProps, cellProps) => {
      const { onChange, checked } = checkboxProps;

      const background = !checked ? '#313943' : '#7986cb';
      const border =
         checked === false ? '2px solid #7C8792' : checked === true ? '2px solid #7986CB' : '';

      return (
         <div
            style={{
               cursor: 'pointer',
               background,
               borderRadius: '50%',
               height: '24px',
               width: '24px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               border,
               fontSize: 12,
               color: checked === false ? 'inherit' : '#E8E8E8',
            }}
            onClick={(e) => {
               if (!Array.isArray(cellProps.data)) {
                  const id = cellProps.data._id;
                  const params = { id, favoriteStatus: !checked };
                  store.dispatch(updateAttractionFavoriteStatus(params));
                  onChange(!checked);
               }
            }}
         >
            {checked === false ? '✰' : checked === true ? '⭐' : ''}
         </div>
      );
   },
};

const columns = [
   {
      name: '_id',
      header: 'Key',
      maxWidth: 70,
      defaultFlex: 1,
      sortable: false,
   },
   {
      name: 'Id',
      header: 'מזהה אטרקציה',
      minWidth: 150,
      defaultFlex: 1,
      sortable: false,
   },
   {
      name: 'Attraction_Type',
      header: 'סוג אטרקציה',
      minWidth: 150,
      defaultFlex: 1,
      sortable: false,
   },
   {
      name: 'Name',
      header: 'שם',
      minWidth: 150,
      defaultFlex: 1,
      sortable: false,
   },
   {
      name: 'Address',
      header: 'כתובת',
      minWidth: 150,
      defaultFlex: 1,
      sortable: false,
   },
   {
      name: 'Opening_Hours',
      header: 'שעות פתיחה',
      minWidth: 150,
      defaultFlex: 1,
      sortable: false,
   },
   {
      name: 'URL',
      header: 'לינק לאתר',
      minWidth: 150,
      defaultFlex: 1,
      sortable: false,
   },
   {
      name: 'Distance',
      header: 'מרחק (בק"מ)',
      type: 'number',
      minWidth: 150,
      defaultFlex: 1,
   },
];

export { checkboxColumn, defaultSortInfo, columns, gridStyle };
