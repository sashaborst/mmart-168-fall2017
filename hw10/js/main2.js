const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            // PART III.A.: Use a loop to populate the select menu with *ALL*
            // of the stations that are returned from the BART data feed:
            const stations = json.stations.station
            stations.forEach((station) => {
            console.log(station.name)
            const option = document.createElement("option")
            option.innerHTML = station.name
            document.getElementById('station_list').appendChild(option)
  })
// for ( let i = 0; i < stations.length; i++ )
// {
// const stationName = document.createElement("option")
// stationName.value = json.stations.station[i].abbr
// stationName.innerHTML = json.stations.station[i].name
// document.getElementById('station_list').appendChild(stationName)
// }

})
        .catch((err) => {
            console.log(err)
        })

const getArrivalTimes = () => {
    const stationList = document.getElementById('station_list')
    // PART III.B.1: The bartStationCode should read from the list and query
    // for the corresponding station
    const bartStationCode = 'DBRK'
    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            console.log(json)
            const results = document.getElementById('results')
            results.innerHTML = ''
            json.station = json.station[0]
            if (!Array.isArray(json.station.etd)) {
                json.station.etd = [ json.station.etd ]
            }
            json.station.etd.forEach(trainLine => {
                if (!Array.isArray(trainLine.estimate)) {
                    trainLine.estimate = [ trainLine.estimate ]
                }
                // PART III.B.2: Instead of printing this info to the console,
                // output it to the DOM
                console.log('------------------------------------------------------------------------')
                console.log('FROM:', stationList.options[stationList.selectedIndex].text.toUpperCase())
                console.log('TO:', trainLine.destination.toUpperCase())
                console.log('------------------------------------------------------------------------')
                trainLine.estimate.forEach(estimate => {
                    // PART III.B.2. Instead of printing this info to the console,
                    // output it to the DOM
                    console.log(
                        ' * Direction:', estimate.direction,
                        ', Leaving: ', estimate.minutes,
                        ', Color: ', estimate.hexcolor,
                        ', Platform:', estimate.platform,
                        ', Delay?:', estimate.delay
                    )
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

makeStationList()
