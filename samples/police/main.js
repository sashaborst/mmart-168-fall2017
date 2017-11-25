var sheets = new Sheets();

sheets.getData(records => {
    //loop through records and output to the screen:
    console.log(records)
    records.forEach(record => {
        console.log(record)
    })
});
