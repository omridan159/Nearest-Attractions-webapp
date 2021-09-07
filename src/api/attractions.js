function getAttractionsData() {
   const requestOptions = {
      method: 'GET',
      redirect: 'follow',
   };
   console.log(process.env.REACT_APP_API_URL)
   return fetch(`${process.env.REACT_APP_API_URL}/attractions`, requestOptions);
}

function updateOneAttractionFavoriteStatus(id, status) {
   const myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');

   const params = JSON.stringify({
      id,
      favoriteStatus: status,
   });

   const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: params,
      redirect: 'follow',
   };

   return fetch(`${process.env.REACT_APP_API_URL}/attractions`, requestOptions);
}

export { getAttractionsData, updateOneAttractionFavoriteStatus };
