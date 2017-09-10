const addList (status) => {
    document.getElementById("results").innerHTML = "<ul></ul>"
};

const addListItem (status) => {
    var li = document.createElement("li")
    li.innerHTML = status.text
    document.querySelector("ul").appendChild(li)
};

const getData () => {
    let term = document.getElementById("term").value;
    fetch("https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=" + term)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            addList()
            json.statuses.forEach(function (status) {
                addListItem(status)
            })
        });
};

document.querySelector("#go").addEventListener("click", getData)
