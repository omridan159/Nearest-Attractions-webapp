const defaultSortInfo = { name: 'Distance', dir: -1, type: 'number' };

const gridStyle = {
   minHeight: 550,
   maxHeight: 700,
};

const columns = [
   { name: '_id', header: 'Key', maxWidth: 70, defaultFlex: 1 },
   { name: 'Id', header: 'מזהה אטרקציה', minWidth: 50, defaultFlex: 1 },
   { name: 'Name', header: 'שם', minWidth: 50, defaultFlex: 1 },
   { name: 'Address', header: 'כתובת', minWidth: 50, defaultFlex: 1 },
   {
      name: 'Opening_Hours',
      header: 'שעות פתיחה',
      minWidth: 50,
      defaultFlex: 1,
   },
   { name: 'URL', header: 'לינק לאתר', minWidth: 50, defaultFlex: 1 },
   {
      name: 'Distance',
      header: 'מרחק (בק"מ)',
      type: 'number',
      minWidth: 50,
      defaultFlex: 1,
   },
];

export { defaultSortInfo, columns, gridStyle };
