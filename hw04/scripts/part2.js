const clearData = () => {
    const element = document.getElementById("results")
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const getData = () => {
    const term = document.getElementById("term").value;
    let url = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    url += '&lang=en' //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            // output statuses:
            console.log(json.statuses)

            // clear out existing tweets:
            clearData()

            let div
            let textNode

            // output the text of the first tweet:
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(json.statuses[0].text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // output the text of the second tweet:
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(json.statuses[1].text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // output the text of the third tweet:
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(json.statuses[2].text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)
        })
};
