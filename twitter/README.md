# Instructions
INSTRUCTIONS:
1. Install Twitter Proxy Server from the Terminal: https://www.npmjs.com/package/twitter-proxy
   <br>```$ npm install -g twitter-proxy```
2. Edit your config.json file w/appropriate consumerKey and consumer secret values
3. Navigate to your twitter directory in your Terminal
4. Start the proxy server:<br>```$ twitter-proxy config.json```
5. In another terminal shell, start a local server:<br> ```python -m SimpleHTTPServer 8000```
6. Open your browser and navigate to http://localhost:8000
