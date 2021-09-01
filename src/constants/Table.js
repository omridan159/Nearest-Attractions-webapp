const defaultSortInfo = { name: 'Distance', dir: -1, type: 'number' };

const gridStyle = {
   minHeight: 400,
   maxHeight: 500,
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

export { defaultSortInfo, columns, gridStyle };
