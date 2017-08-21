# Instructions
Web authentication is a little complex, because you don't want to put your username and password in your source code (because anyone can then inspect it by using the Browser's "View Source" capabilities). Therefore, we are going to create a local proxy server to hide your credentials.
## I. Installing and configuring your proxy server
> Note: You will only have to do these steps once
1. Install Twitter Proxy Server from the Terminal: https://www.npmjs.com/package/twitter-proxy
   <br>```npm install -g twitter-proxy```
2. Edit your config.json file w/appropriate consumerKey and consumer secret values

## II. Viewing your Twitter app
> Note: You will have to follow these steps each time you want to run your twitter app
### A. Turn on your proxy server
1. Open Terminal and navigate to your twitter directory<br>Example: ```cd your/twitter/directory```
2. Start the proxy server in Terminal by issuing the following command:<br>```twitter-proxy config.json```

### B. Turn on your local web server
AJAX requests, for security reasons, require that you run your HTML, CSS, and JavaScript files as if you are on an actual web server. To do this:
1. Open another Terminal window / tab and navigate to your twitter directory<br>Example: ```cd your/twitter/directory```
2. Start a local server in Terminal by issuing the following command:<br> ```python -m SimpleHTTPServer 8000```

### C. View your app
Now, open your browser and navigate to http://localhost:8000. It should allow you to GET, POST, and DELETE Twitter data.
