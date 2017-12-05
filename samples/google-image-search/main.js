
const key = 'AIzaSyAcEjG1lFpFwk6zFbxEgI9eia5VFWrx-1c'
const searchEngineID = '013124996647730497019:tujt-f3xcz0'
const term = 'puppies'
const url = 'https://www.googleapis.com/customsearch/v1?key=' + key +
            '&cx=' + searchEngineID + '&q=' + term


fetch(url)
    .then(function(response) {
    return response.json();
}).then(function(json) {
    console.log(json)
    const items = json.items
    items.forEach((item) => {
        console.log(item.pagemap.cse_image[0].src)
        const img = document.createElement('img')
        img.src = item.pagemap.cse_image[0].src
        document.getElementById('results').appendChild(img)
    })
});
