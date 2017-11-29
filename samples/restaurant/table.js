//https://developers.google.com/chart/interactive/docs/querylanguage

const getCalories = () => {
    document.querySelector('#content tbody').innerHTML = ''
    const query = document.getElementById('dish').value
    const sheets = new Sheets({
        key: '16wEqV5PBvvEae8ifD7TsafVUL7CxeO1pUHgqy6AQS-E',
        query: query
    })

    sheets.getData(data => {
        //loop through records and output to the screen:
        console.log(data)
        let calories = 0
        data.records.forEach(record => {
            const tr = document.createElement('tr')
            let td = document.createElement('td')
            td.innerHTML = record.B
            td.className = 'letter'
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = '<img src="' + record.C + '" />'
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = record.D //calories
            td.className = 'letter'
            tr.appendChild(td)

            //calculate calories:
            calories += record.D

            document.querySelector('#content tbody').appendChild(tr)
        })

        document.getElementById('totalCalories').innerHTML = calories
    });

}
