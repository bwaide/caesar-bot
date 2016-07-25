# Caesar Bot

This is a Facebook chat bot template project with minimal functionality.
It translates roman numbers into arabic ones. Oh - and it is talking
German only. This repository is meant to be a companion to an article
published in [t3n magazin](http://t3n.de/magazin/) (Nr. 45, 2016) but
you are free to use it anyhow you like.

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000?style=flat-square)](LICENSE.txt)

## Prerequisites

You should know [git](https://git-scm.com/ "Git Homepage") and
[node.js](https://nodejs.org/en/ "Get nodejs") and have installed both.

## Setup

To create your own version of this bot just:

1. Clone or copy this repository
    
    ```bash
git clone https://github.com/smartsteuer/caesar-bot.git name-of-your-bot
    ```
    
2. Change into the new directory
    
    ```bash
cd name-of-your-bot
    ```
    
3. Install the dependencies
    
    ```bash
npm install
    ```
    
4. Test if everythink worked out.
    
    ```bash
npm test
    ```
    
## Customize

At this point you are free to optimize, extend and change this bot as
you like. What ever you are intending to do in the future, the first
think to do is to change the verify token with which Facebook is going
to check your webhook.

1. Open `webhook-get.spec.js` and change the
   (token)[app/fb/webhook-get.spec.js#L14] to a freely selectable value.
   (your are going to share this value with facebook later on)
2. Run `npm test` again
3. Fix all broken tests

You'r good to go public!

## Deployment

Your bot is running locally - good. But we want the world to see it… (We
are going to deploy on heroku but you are free to take any provider you
like)

1. Be familiar with
   [Heroku](https://www.heroku.com/home "Heroku homepage") and install
   their toolbelt.
2. Login (if you haven't done this already)
    
    ```bash
heroku login
    ```
    
3. Create a new Heroku app
    
    ```bash
heroku create
    ```
    
4. Deploy (a.k.a. push to the heroku git) the app.
    
    ```bash
git push heroku master
    ```
    
More information on node on heroku can be found here:
[getting started](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

## Register your app with Facebook

I won't go into detail here. But with your app running on Heroku you now
have a URL which you can feed into the FB registration process for new
messenger apps. It's general structure is straitforward and looks like
this:

```
https://name-of-your-bot.herokuapp.com/fb
```

This is the webhook Facebook is going to communicate with.

## Configuration

For your app to work you need to set the access token which was
generated by Facebook during the registration process.

1. Open the Heroku dashboard https://dashboard.heroku.com/apps
2. Find and open your app
3. Change to `Settings`
4. Reveal your config vars
5. Add a new var with the key set to `FB_ACCESS_TOKEN` and the value to
   the token you got from Facebook.

# Feedback

If you have anythink in mind concerning this repro or the article, let
us know! Use the issue tracker or contact us on twitter. Björn
[@waide](https://twitter.com/waide), Eike
[@stagzta](https://twitter.com/stagzta)


