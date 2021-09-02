function getAttractionsData() {
   const requestOptions = {
      method: 'GET',
      redirect: 'follow',
   };

   return fetch('http://localhost:3000/attractions', requestOptions);
}

export { getAttractionsData };
