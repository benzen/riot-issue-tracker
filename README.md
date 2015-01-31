Riot issue tracker
--------------

It's just a toy project to see what could be done with Riot.
For more info on Riot see [Riot's website](https://muut.com/riotjs/guide/#tag-syntax).

This repo contains everything you need to just run the app.
To build a new version you'll need to install the Riot compiler

Install
````bash
npm install riot -g
````

Build
````bash
riot *.tag -w  riot-issue.js
````

Run (using npm's http-server)
````bash
http-server -p 5000
````
