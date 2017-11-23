//Inspiration: https://soundnode-redux.herokuapp.com/charts/all-music
const baseURL = 'https://api.soundcloud.com/tracks'
const client_id = 'WHbr8ZvTg1c0Qjga7fdRjtfiFfvLPj1e'


const queryParams = (params) => {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

const clear = () => {
    document.getElementById('results').innerHTML = ''
}

const getMusic = () => {
    const opts = {
        q: document.getElementById('term').value,
        limit: 10,
        format: 'json',
        client_id: client_id
    }
    const url = baseURL + '?' + queryParams(opts)
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
            clear()
            json.forEach(displayTrack)
        })
}

const displayTrack = (track) => {
    /*************/
    /* ADD IMAGE */
    /*************/
    if (track.artwork_url) {
        const img = document.createElement('img')
        img.src = track.artwork_url
        document.getElementById('results').appendChild(img)
    } else {
        const div = document.createElement('div')
        const text = document.createTextNode('No Image Available')
        div.appendChild(text)
        div.classList.add('box')
        document.getElementById('results').appendChild(div)
    }

    /*************/
    /* ADD AUDIO */
    /*************/
    const audio = document.createElement('audio')
    audio.controls = true
    const source = document.createElement('source')
    source.src = track.stream_url + '?client_id=' + client_id
    audio.appendChild(source)
    document.getElementById('results').appendChild(audio)

    /*******************/
    /* ADD DESCRIPTION */
    /*******************/
    const p = document.createElement('p')
    p.innerHTML = track.description
    document.getElementById('results').appendChild(p)
}
