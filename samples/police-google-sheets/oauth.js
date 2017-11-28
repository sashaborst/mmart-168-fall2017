// https://developers.google.com/sheets/api/quickstart/js
const CLIENT_ID = '187501729402-djltrqifholvsktsqo0djoplria6urbh.apps.googleusercontent.com'
const CLIENT_SECRET = 'vhGu7zdpLQktWd7OdKGclwfY'
const API_KEY = 'AIzaSyDZChbA2WHUG-TD9lU76lNalCniDUQnuz4'

var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(function () {
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            // Handle the initial sign-in state.
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            authorizeButton.onclick = handleAuthClick;
            signoutButton.onclick = handleSignoutClick;
    });
}

function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
            authorizeButton.style.display = 'none';
            signoutButton.style.display = 'block';
            showDeaths();
      } else {
            authorizeButton.style.display = 'block';
            signoutButton.style.display = 'none';
      }
}


function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

const showDeaths = () => {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1kTtU8Me3ADNl2fd44cV9KK4GvFFLMqeyOZ-qy5bKvUw',
        range: 'Updated Data (Cleaned)!A1:L2000',
    }).then(
        function(response) {
            document.getElementById('content').innerHTML = ''
            const records = response.result.values;
            if (records.length > 0) {
                records.forEach(function (record) {
                    const tr = document.createElement('tr')
                    const selectRecords = [
                        record[2], record[4], record[5], record[6], record[7], record[9]
                    ]
                    selectRecords.forEach((cell) => {
                        const td = document.createElement('td')
                        td.innerHTML = cell
                        tr.appendChild(td)
                    })
                    document.getElementById('content').appendChild(tr)
                })
            } else {
                console.log('No data found.');
            }
        },
        function(response) {
            console.error('Error: ' + response.result.error.message)
        }
    );
}
