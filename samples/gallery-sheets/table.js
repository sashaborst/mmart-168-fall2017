//https://developers.google.com/chart/interactive/docs/querylanguage
const sheets = new Sheets({
    key: '1SXAqtLEsNBGgfMCsCbDtlELOalLTY7388B0cJYkPPb0'
});

const loadColoringBook = (elem) => {
    alert(elem.src)
}

sheets.getData(data => {
    //loop through records and output to the screen:
    console.log(data)
    let num = 1
    data.records.shift()
    data.records.forEach(record => {
        //Goal:
        /*<div class="col-sm-6 col-md-3">
            <a class="lightbox" href="ai/a.png">
                <img src="ai/a.png" alt="A">
            </a>
        </div>
        */

        //container div
        const div = document.createElement('div')
        div.className = 'col-sm-6 col-md-3'

        // link
        const a = document.createElement('a')
        a.className = 'lightbox'
        a.href = record.B

        //image
        const img = document.createElement('img')
        img.alt = record.A
        img.src = record.B

        div.appendChild(a)
        a.appendChild(img)
        document.getElementById('letter-image').appendChild(div)

    })
});
