let map = null
const locations = [
    {
        lat: 37.8697651,
        lng: -122.2711251
    },
    {
        lat: 37.77,
        lng: -122.43
    },
    {
        lat: 37.9,
        lng: -122.23
    },
    {
        lat: 37.8397651,
        lng: -122.278
    }
]
var initMap = function () {
    alert('please replace my API key with your own!')
    map = new google.maps.Map(document.getElementById('map'), {
        center: locations[0],
        zoom: 12, //1-20
        mapTypeId: google.maps.MapTypeId.SATELLITE
    })
    locations.forEach((location) => {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        })
    })
}
