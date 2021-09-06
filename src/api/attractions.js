function getAttractionsData() {
    const requestOptions = {
       method: 'GET',
       redirect: 'follow',
    };
 
    return fetch(`${process.env.API_HOST}/attractions`, requestOptions);
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
 
    return fetch(`${process.env.API_HOST}/attractions`, requestOptions);
 }
 
 export { getAttractionsData, updateOneAttractionFavoriteStatus };