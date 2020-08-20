class SumberData {
    static cariResep(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
                .then(response => {
                    response.setHeader("Cache-Control",  "s-maxage=1", "stale-while-revalidate=59");
                    return response.json();
                })
                .then(responseJson => {
                    return Promise.resolve(responseJson.meals);
                })
                .catch(error => {
                    console.log(error);
                });
    }
}
export default SumberData;