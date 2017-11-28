const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
    // url that asks the question you want to ask. In this case, give me
    // a list of all of the BART stations:
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            //DO SOMETHING COOL WITH YOUR DATA
            json = json.root
            console.log(json)
            json.stations.station.forEach((station) => {
                //1. Create the element you want to add to the DOM.
                const option = document.createElement("option")

                //2. Assign data to some part of the element:
                option.innerHTML = station.name
                option.value = station.abbr

                //FAMOUS ATTRIBUTES ARE:
                /*
                    * id
                    * class (for assigning CSS classes)
                    * name (for form data)
                    * value (for form data)
                    * src (for images)
                    * alt (for accessibility)
                    * href (for links)
                    * innerHTML (what goes inside the tag)
                */

                //3. Append the newly created element to the DOM somewhere:
                document.getElementById('station_list').appendChild(option)
            })


            //How do I use the data returned from BART to populate my
            //dropdown menu??????

            /*
            // PART III.A.: Use a loop to populate the select menu with *ALL*
            // of the stations that are returned from the BART data feed:
            const option1 = document.createElement("option")
            option1.value = 'DBRK'
            option1.innerHTML = 'Downtown Berkeley'
            document.getElementById('station_list').appendChild(option1)
            */
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
