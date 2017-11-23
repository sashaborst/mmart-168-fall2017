
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://spreadsheets.google.com/tq?callback=test&key=1kTtU8Me3ADNl2fd44cV9KK4GvFFLMqeyOZ-qy5bKvUw'

const getData = () => {
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.text())
      .then(response => {
          response = convertToJSON(response)
          console.log(response)
          makeTable(response)
      })
}

const makeTable = (records) => {
    let i = 0
    records.forEach(function (record) {
        const tr = document.createElement('tr')
        const selectRecords = [
            record[2], record[4], record[5], record[6], record[7], record[9]
        ]
        selectRecords.forEach((cell) => {
            const td = (i === 0) ? document.createElement('th') : document.createElement('td')
            td.innerHTML = cell
            tr.appendChild(td)
        })
        document.getElementById('content').appendChild(tr)
        ++i
    })
}

const convertToJSON = (response) => {
    // get rid of prefix: google.visualization.Query.setResponse(
    response = response.split('google.visualization.Query.setResponse(')[1]
    // get rid of trailing );
    response = response.substring(0, response.length - 2)
    response = JSON.parse(response)
    return simplifyData(response)
}

const simplifyData = jsonData => {
    const data = []
    const columns = jsonData.table.cols
    const records = jsonData.table.rows

    //add header row:
    const row = []
    columns.forEach(function (cell) {
        row.push(cell ? cell.label : '')
    })
    data.push(row)

    //add data rows:
    records.forEach(function (record) {
        const row = []
        const cells = record.c
        cells.forEach(cell => {
            row.push(cell ? cell.v : '')
        })
        data.push(row)
    })
    return data
}

getData()
