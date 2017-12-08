const sheets = new Sheets({
    key: '1kTtU8Me3ADNl2fd44cV9KK4GvFFLMqeyOZ-qy5bKvUw',
    query: 'select E, count(A) group by E order by count(A) desc'
});

/*sheets.getData(data => {
    data.records.forEach(record => {
        //1. create the list item:
        const li = document.createElement('li')
        li.innerHTML = record.st_ + ': ' + record.count_original_data_format
        document.getElementById('unordered-list').appendChild(li)
    })
});*/

sheets.getData(data => {
    data.records.forEach(record => {
        //1. create the list item:
        const div = document.createElement('div')
        div.innerHTML = '<div class="bar" style="width: ' + 3 * record.count_original_data_format + 'px"></div>'
        div.innerHTML += ' ' + record.st_
        document.getElementById('container').appendChild(div)
    })
});
