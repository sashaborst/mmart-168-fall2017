//https://developers.google.com/chart/interactive/docs/querylanguage

const getCourses = () => {
    const query = document.getElementById('dish').value
    const sheets = new Sheets({
        key: '1vlbF1mjCpXRnrCYoYbHkV3EgDhBuY87yZPnciDrrRMI',
        query: "select * where A = 'Fall 2017'"
    })

    sheets.getData(data => {
        //loop through records and output to the screen:
        console.log(data)
        data.records.forEach(record => {
            // create a card
            const card = document.createElement('div')
            card.className = 'card'

            //create a header:
            const header = document.createElement('h3')
            header.innerHTML = record.C

            //create a
            const detail = document.createElement('p')
            detail.innerHTML = record.D

            //add the header to the card
            card.appendChild(header)
            card.appendChild(detail)

            //add the card to the HTML Document (inside of #cards)
            document.getElementById('cards').appendChild(card)

        })

    });

}

getCourses()
