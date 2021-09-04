const mapContainerStyle = {
   height: '50vh',
   width: '80vw',
   margin: 'auto',
};

const options = {
   disableDefaultUI: true,
   zoomControl: true,
};

const mapCenter = { lat: 31.854, lng: 36.550 };

const libraries = ['places'];

export { mapContainerStyle, options, mapCenter, libraries };
