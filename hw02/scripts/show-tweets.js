console.log(tweets);
const tweet1 = () => {
    console.log(tweets.statuses[0])
    document.querySelector("#tweet3 .message").innerHTML = tweets.statuses[0].text
    document.querySelector("#tweet3 .username").innerHTML = tweets.statuses[0].user.screen_name
    document.querySelector("#tweet3 .date").innerHTML = tweets.statuses[0].created_at
}

const tweet2 = () => {
    console.log(tweets.statuses[1])
    document.querySelector("#tweet2 .message").innerHTML = tweets.statuses[1].text
}

const tweet3 = () => {
    console.log(tweets.statuses[2])
    document.querySelector("#tweet1 .message").innerHTML = tweets.statuses[2].text
}


const appendTweet = (id) => {
    console.log(id)
    console.log(tweets.statuses[id])
    document.querySelector(".main").innerHTML += '<article id="tweet' + (id + 1) + '" class="tweet"> \
        <i class="fa fa-user"></i> \
        <a href="#"></a> \
        <span class="username"></span> &bull; \
        <span class="date"></span> \
        <div class="message"></div> \
    </article>'
    document.querySelector("#tweet" + (id + 1) + " .message").innerHTML = tweets.statuses[id].text
    document.querySelector("#tweet" + (id + 1) + " .username").innerHTML = tweets.statuses[id].user.screen_name
    document.querySelector("#tweet" + (id + 1) + " .date").innerHTML = tweets.statuses[id].created_at
}
