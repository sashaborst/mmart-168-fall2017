const app = new Clarifai.App({
    apiKey: 'c89a5c260af54d7686af7e3afcbc70ec'
});

const identify = (elem) => {
    const imageURL = elem.src
    app.models.predict(Clarifai.GENERAL_MODEL, imageURL).then(
        function(response) {
        console.log(response.rawData.outputs[0].data.concepts);
        const concepts = response.rawData.outputs[0].data.concepts
        document.getElementById('results').innerHTML = ""
        concepts.forEach((concept) => {
            const p = document.createElement('p')
            const textNode = document.createTextNode(concept.name)
            p.appendChild(textNode)
            document.getElementById('results').appendChild(p)
            console.log(concept.name)
        })
      },
      function(err) {
        console.error(err);
      }
    );

}
