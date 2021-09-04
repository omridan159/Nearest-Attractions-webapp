Number.prototype.toRad = function () {
   return (this * Math.PI) / 180;
};

function calculateDistance(lat1, lon1, lat2, lon2) {
   var R = 6371; // km
   //has a problem with the .toRad() method below.
   var x1 = lat2 - lat1;
   var dLat = x1.toRad();
   var x2 = lon2 - lon1;
   var dLon = x2.toRad();
   var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1.toRad()) *
         Math.cos(lat2.toRad()) *
         Math.sin(dLon / 2) *
         Math.sin(dLon / 2);
   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   var d = R * c;

   return d;
}

const getAttractionTypesList = (data) => {
   const mapAttractionTypes = data.map((attraction) => {
      return attraction.Attraction_Type;
   });
   mapAttractionTypes.push('הכל');

   const attractionTypes = [...new Set(mapAttractionTypes)];

   return attractionTypes;
};

const getUnfavoriteAttractionsList = (data) => {
   let unfavoriteObject = {};

   data.map((attraction, index) => {
      if (attraction.favorite === false) {
         unfavoriteObject[index + 1] = !attraction.favorite;
      }
   });

   return unfavoriteObject;
};

function filterAttractionsByType(attractionType, data) {
   return attractionType === 'הכל'
      ? data
      : data.filter((attraction) => {
           return attraction.Attraction_Type === attractionType;
        });
}

export {
   calculateDistance,
   getAttractionTypesList,
   filterAttractionsByType,
   getUnfavoriteAttractionsList,
};
