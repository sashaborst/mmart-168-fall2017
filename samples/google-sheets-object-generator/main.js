const sheets = new Sheets({
    key: '164Z-UgfGFfCoF0jhjsisE-SfI5SbbUN6s6nyb2JokT8'
  })

sheets.getData(data => {
    console.log(data)
})
