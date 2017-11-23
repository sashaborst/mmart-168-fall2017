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
            // console.log(json.stations.station)
            const stations = json.stations.station
            // for ( let i=0; i < stations.length; i++)
            // { console.log(stations[i].name) }
            stations.forEach((station) =>
            {
            // console.log(station.name)
            const option = document.createElement("option")
            option.value = station.abbr
            option.innerHTML = station.name
            document.getElementById('station_list').appendChild(option)
            })
            /*
            // PART III.A.: Use a loop to populate the select menu with *ALL*
            // of the stations that are returned from the BART data feed:
            const option1 = document.createElement("option")
            option1.value = 'DBRK'
            option1.innerHTML = 'Downtown Berkeley'
            document.getElementById('station_list').appendChild(option1) */
        })
        .catch((err) => {
            console.log(err)
        })
}
makeStationList()

const getArrivalTimes = () => {
    const stationList = document.getElementById('station_list')
    // PART III.B.1: The bartStationCode should read from the list and query
    // for the corresponding station
    const bartStationCode = stationList.value
    console.log(bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            // console.log(json.station[0])

            document.getElementById('results').innerHTML = ''

            const result = document.createElement("h2")
            result.innerHTML = 'From: ' + json.station[0].name
            document.getElementById('results').appendChild(result)

            json.station[0].etd.forEach((line) => {
              console.log(line)
              const trainLine = document.createElement("h3")
              trainLine.innerHTML = 'TO: ' + line.destination + ' (' + line.estimate[0].direction + ')' + "<br>" + '<h4>Platform #' + line.estimate[0].platform +'</h4>'
              document.getElementById('results').appendChild(trainLine)

              // const color = document.createElement("span")
              // color.style.background = line.estimate[0].hexcolor
              // color.classList.add(colorsquare)
              // document.getElementById('results').appendChild(color)

              line.estimate.forEach((estimate) => {
                console.log(estimate)
                const departureTime = document.createElement("span")
                departureTime.innerHTML = estimate.minutes + ' min, '
                departureTime.style.background = estimate.color
                if (estimate.bikeflag === "0") {
                  departureTime.innerHTML = estimate.minutes + ' min , ' + 'no bike are allowed'
                }
                document.getElementById('results').appendChild(departureTime)

            // estimate.platform
            // const destination = document.createElement("p")
            // destination.innerHTML = 'Train to : ' + json.etd.destination[0]
            // document.getElementById('result').appendChild(destination)

            // 2. Instead of printing all of the train arrival estimates to the console, output the following information to the DOM for each train:
            //     * time of arrival

            //     * direction
            //     * whether or not there is a delay
            // -
            //     * whether or not bikes are allowed
            // -
            //     * which platform
            //     * the color of the train line


            // json.station = json.station[0]
            // if (!Array.isArray(json.station.etd)) {
            //     json.station.etd = [ json.station.etd ]
            // }
            // json.station.etd.forEach(trainLine => {
            //     if (!Array.isArray(trainLine.estimate)) {
            //         trainLine.estimate = [ trainLine.estimate ]
            //     }

                // const results = document.getElementById('results')
                // results.innerHTML = 'FROM:', stationList.options[stationList.selectedIndex].text.toUpperCase()
            //     // PART III.B.2: Instead of printing this info to the console,
            //     // output it to the DOM <div id="results">
            //     console.log('------------------------------------------------------------------------')
            //     console.log('FROM:', stationList.options[stationList.selectedIndex].text.toUpperCase())
            //     console.log('TO:', trainLine.destination.toUpperCase())
            //     console.log('------------------------------------------------------------------------')
            //     trainLine.estimate.forEach(estimate => {
            //         // PART III.B.2. Instead of printing this info to the console,
            //         // output it to the DOM
            //         console.log(
            // const dir = document.createElement("p")
            // dir.innerHTML = 'Direction:' + estimate.direction
            // document.getElementById('result').appendChild(dir)
            //             ' * Direction:', estimate.direction,
            //             ', Leaving: ', estimate.minutes,
            //             ', Color: ', estimate.hexcolor,
            //             ', Platform:', estimate.platform,
            //             ', Delay?:', estimate.delay
            //         )
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
