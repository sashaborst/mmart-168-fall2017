const sheets = new Sheets({
    key: '16wEqV5PBvvEae8ifD7TsafVUL7CxeO1pUHgqy6AQS-E',
    query: 'where A = 10 or A = 11 or A = 12 or A = 13'
});

sheets.getData(data => {
    //loop through records and output to the screen:
    console.log(data)
    /*data.records.forEach(record => {
        console.log(record)
    })*/
});
