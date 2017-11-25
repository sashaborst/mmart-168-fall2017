var sheets = new Sheets();

sheets.getData(records => {
    //loop through records and output to the screen:
    console.log(records)
    records.forEach(record => {
        const tr = document.createElement('tr')
        record.forEach(cell => {
            const td = document.createElement('td')
            td.innerHTML = cell
            tr.appendChild(td)
        })
        document.getElementById('content').appendChild(tr)
    })
});
