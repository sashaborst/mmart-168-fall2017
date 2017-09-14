const getData = () => {
    const term = document.getElementById("term").value
    let url = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    url += '&lang=en' //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            // output statuses:
            console.log(json.statuses)
            // output the text of the first tweet:
            let pre = document.createElement("pre")
            pre.innerHTML = syntaxHighlight(JSON.stringify(json, null, "    "))
            document.getElementById("results").appendChild(pre)
        })
}

/*****************************************************************/
/* IGNORE THIS CODE: JUST A WAY TO ADD COLOR TO THE JSON RESULTS */
/*****************************************************************/
const syntaxHighlight = (json) => {
    // This is just a convenience function to add color to the JSON response:
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number'
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key'
            } else {
                cls = 'string'
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean'
        } else if (/null/.test(match)) {
            cls = 'null'
        }
        return '<span class="' + cls + '">' + match + '</span>'
    })
}
