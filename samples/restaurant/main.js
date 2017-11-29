const sheets = new Sheets({
    key: '1kTtU8Me3ADNl2fd44cV9KK4GvFFLMqeyOZ-qy5bKvUw',
    query: 'select E, count(A) group by E'
});

sheets.getData(data => {
    //loop through records and output to the screen:
    console.log(data)
    /*data.records.forEach(record => {
        console.log(record)
    })*/
});
