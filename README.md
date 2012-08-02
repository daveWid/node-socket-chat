# Node.js Socket Chat

This was a proof of concept during the Code4Lib Midwest Hackfest (#c4lmw).

## Setup

You will need to have node.js installed. You are using
[homebrew](http://mxcl.github.com/homebrew/) right?

```
brew install node
```

Then you will need to clone this repo to your computer.

## Running

Navigate to be in the newly created `node-socket-chat` folder and run the following
command.

```
node server.js
```

Then just visit [localhost:8080/chat.html](http://localhost:8080/chat.html) on as
many browsers as you wish and chat away!

## Want to chat with someone else?

If you want to chat with someone else you will need to modify this line in `chat.html`.

```
<script src="http://localhost:1337/socket.io/socket.io.js"></script>
```

Change the localhost (and only localhost, keep the port) to your domain.
 