var Sheets = function () {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://spreadsheets.google.com/tq?callback=test&key=1kTtU8Me3ADNl2fd44cV9KK4GvFFLMqeyOZ-qy5bKvUw';

    this.getData = (callback) => {
        fetch(proxyUrl + targetUrl)
          .then(blob => blob.text())
          .then(response => {
              response = convertToJSON(response)
              callback(response)
              //console.log(response)
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
        columns.forEach(cell => {
            row.push(cell ? cell.label : '')
        })
        data.push(row)

        //add data rows:
        records.forEach(record => {
            const row = []
            const cells = record.c
            cells.forEach(cell => {
                row.push(cell ? cell.v : '')
            })
            data.push(row)
        })
        return data
    }
};
