const sheets = new Sheets({
    key: '1J-UuARS1ZgsRa1w6KXsnk5G_aDJf6zmYsI0-T0PORlc' //,
    //query: "select * where D = 'C'"
});

sheets.getData(data => {
    //loop through records and output to the screen:
    console.log(data)
    let num = 1
    data.records.forEach(record => {
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = num
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.year
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.category
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.code
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.event
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.location
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.note
        tr.appendChild(td)

        document.querySelector('#content tbody').appendChild(tr)
        ++num
    })
});
