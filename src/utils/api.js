function getAttractionsData() {
   const requestOptions = {
      method: 'GET',
      redirect: 'follow',
   };

   return fetch('http://localhost:8080/attractions', requestOptions);
}

export { getAttractionsData };
