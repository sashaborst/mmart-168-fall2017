//https://developers.google.com/chart/interactive/docs/querylanguage
const sheets = new Sheets({
    key: '1SXAqtLEsNBGgfMCsCbDtlELOalLTY7388B0cJYkPPb0',
    query: "select * where A = 'D'"
});

const loadColoringBook = (elem) => {
    alert(elem.src)
}

sheets.getData(data => {
    //loop through records and output to the screen:
    console.log(data)
    let num = 1
    //data.records.shift()
    data.records.forEach(record => {
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = record.A
        td.className = 'letter'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = '<img src="' + record.B + '" onClick="loadColoringBook(this)" />'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.C
        tr.appendChild(td)

        document.querySelector('#content tbody').appendChild(tr)
        ++num
    })
});
