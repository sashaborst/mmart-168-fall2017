const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
    // url that asks the question you want to ask. In this case, give me
    // a list of all of the BART stations:
    const url = 'https://api.bart.gov/api/stn.aspx?key=MW9S-E7SL-26DU-VV8V&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            //DO SOMETHING COOL WITH YOUR DATA
            json = json.root
            console.log(json)
            console.log(json.stations.station)
            json.stations.station.forEach((station) => {
                //1. Create the element you want to add to the DOM.
                const option = document.createElement("option")

                //2. Assign data to some part of the element:
                option.innerHTML = station.name
                option.value = station.abbr

                //3. Append the newly created element to the DOM somewhere:
                document.getElementById('station_list').appendChild(option)
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

makeStationList()




const getArrivalTimes = () => {
    // go out and find the element with the ID stationList (which is a select
    // element) and store it in a variable called stationList.
    const stationList = document.getElementById('station_list')
    const bartStationCode = stationList.value

    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=MW9S-E7SL-26DU-VV8V&cmd=etd&orig=' +
            bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root

            // 1. clear out existing div:
            document.getElementById('results').innerHTML = ''

            // 2. log all of the train lines:
            json.station[0].etd.forEach((line) => {

                // print name of train line to p tag and append to the DOM:
                const trainLine = document.createElement("h3")
                trainLine.innerHTML = line.destination

                // also add the platform:
                trainLine.innerHTML += ': Platform #' + line.estimate[0].platform

                // also add the direction:
                trainLine.innerHTML += ' (' + line.estimate[0].direction + ')'

                // now append to the DOM:
                document.getElementById('results').appendChild(trainLine)

                // now add the color of the train:
                const square = document.createElement("span")
                square.style.background = line.estimate[0].hexcolor
                square.classList.add('train-square')
                document.getElementById('results').appendChild(square)

                // 4. log all of the estimates for each train line:
                const departureTimes = []
                line.estimate.forEach((estimate) => {
                    departureTimes.push(estimate.minutes)
                    console.log('Estimate:', estimate)
                })

                // encapsulate each time estimate in a span tag
                const departureTime = document.createElement("span")
                departureTime.innerHTML = departureTimes.join(', ')
                departureTime.innerHTML += ' minutes'
                document.getElementById('results').appendChild(departureTime)
            })
        })
}
