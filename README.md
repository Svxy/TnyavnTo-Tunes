<a id="top"></a>
<a href="https://tnyavnto-tunes.com" target="_blank"><h1 align="center">TnyavnTo Tunes</h1></a>
  
<h5 align="center"><a href="https://tnyavnto-tunes.com" target="_blank">Invite TnyavnTo Tunes?</a></h5>

<h2 align="center">Now released in open source!</h2>

<h2 align=center>Site and Bot Shutting down March 24, 2023</h2>

<br>

<p align="center"><a href="https://tnyavnto-tunes.com" target="_blank">TnyavnTo Tunes</a> (TnyavnTo meaning 'fried' in Greek) is a Discord music bot, written with <a href="https://javascript.com" target="_blank">JavaScript</a> in <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>, and hosted via terminal with a local <a href="https://www.docker.com/" target="_blank">Docker</a> server. This bot features a ton of music commands with functionality provided by a tool called <a href="https://ffmpeg.org/" target="_blank">FFmpeg</a>.</p> 

<br>

<p align="center">Use /help for all commands and their descriptions, and !deploy on first join!</p>

___


## Table of content

* [Requirements](#requirements)
* [Getting started](#getting-started)
* [Starting The Bot](#start-app)
* [Command List](#commandz)
* [Preview](#preview-boi)
* [Common errors](#common-errors)
* [Contributing](#contributing)
* [Building The Website](#build-website)
* [Author](#author)
* [License](#license)

___

<br>

## Requirements

- [Docker](https://www.docker.com/) - Recommended
- [Node](https://nodejs.org/en/) - Version 16 or higher (optional)
- [NPM](https://www.npmjs.com/)
- [FFmpeg](https://www.ffmpeg.org/)

</a> <a href="https://www.docker.com/" target="_blank">
<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/docker/docker-original.svg" alt="Logo" width="64" height="64"></a>
</a> <a href="https://nodejs.org/en/" target="_blank">
<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" alt="Logo" width="64" height="64"></a>
</a> <a href="https://www.npmjs.com/" target="_blank">
<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg" alt="Logo" width="64" height="64"></a>
</a> <a href="https://ffmpeg.org/" target="_blank">
<img src="https://ffmpeg.org/img/ffmpeg3d_white_20.png" alt="Logo" width="58" height="58"></a>

<br>

___

<br>

## Getting started

First, make sure you have all the required tools installed on your local machine then continue with these steps.

### Installation

```bash
# Clone the repository
git clone https://github.com/Svxy/TnyavnTo-Tunes.git

# Enter into the directory
cd TnyavnTo-Tunes

# Install the dependencies
npm install
```
Now open Docker Desktop, you'll find your created image in the images tab, run it to start your bot after configuration.

<br>

## Required permissions

**Important:** Make sure that your bot has the `applications.commands` application scope enabled, which can be found under the `OAuth2` tap on the [developer portal](https://discord.com/developers/applications/)

### Configuration

After cloning the project and installing all dependencies, you need to add your Discord API token in the config.json file.

<a id="start-app"></a>

___

<br>

### Starting the application using Docker

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

```bash
# Using VSCode
# Build the image
docker build --tag discordbot . # Period represents current directory

# Run the image
docker run -d discordbot
```

<br>

### Starting the application using NodeJS

```bash
node index.js
```

___

<br>

## Deploying commands

### Before you can use the bots slash command you first need to add them to your Discord server. You can use the `!deploy` command to do so.

<img src="./assets/deploy-commands.png">

### After deploying the commands you should be able to see and access them by typing a slash:

<img src="./assets/commands.png">

<a id="commandz"></a>

___

<br>

## Features & Commands

> Note: These will not always be catagorized accurately, please refer to the TnyavnTo Tunes <a href="https://tnyavnto-tunes.com" target="_blank">Website</a>.

### - Enabled

* 🎶 Play music from YouTube via url

`/play YOUTUBE_URL`

* 🎶 Play music from using song name

`/play SONG_NAME`

* 📃 Pause music

`/pause`

* 🎓 Resume music

`/resume`

* 💿 Skip song

`/skip`

* 🔇 Stop music

`/stop`

* 🔀 Shuffle Queue

`/shuffle`

* ↕ Move song position

`/move TRACK_POSITION TARGET_POSITION`

* ↔️ Swap song positions

`/swap POSITION_1 POSITION_2`

* ⏏️ Remove song

`/remove POSITION`

* 🏡 Display TnyavnTo Tunes website

`/website`

* 📈 Display links to upvote TnyavnTo Tunes

`/upvote`

* Now Playing 

`/nowplaying`

### - Disabled

* Get information about a user 

`/userinfo USER`

* Ban a user 

`/ban USER`

* Delete the latest chat messages 

`/purge NUM_OF_MESSAGES`

<a id="preview-boi"></a>

___

<br>

# Preview
<img src="./assets/showcase.png">

___

<br>

# Common errors

Here is a list of common errors and how you can fix them.

<br>

### Dependencies aren't up to date

The packages used in this repository get updated often, especially the ytdl-core package. That is why it is always worth a try updating those if you get an error like `invalid URL: undefined` or when the bot crashes when running the play command.

```bash
npm install ytdl-core@latest
```

<br>

### FFmpeg is not installed on the machine running the bot

The `play` command requires FFmpeg to be installed on the machine that is running the bot. You can download it on the official [FFmpeg website](https://www.ffmpeg.org/). Note: This isn't relevant if you use the Dockerfile because it will install FFmpeg inside of the container.

___

<br>

# Contributing

You are welcome to contribute by submitting a Pull Request to the repository.

<a id="build-website"></a>

<br>

# Building The Website

<br>

### TnyavnTo Tunes <a href="https://tnyavnto-tunes.com" target="_blank">Website</a> is hosted on</a> <a href="https://www.netlify.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/1920px-Netlify_logo.svg.png?20180815190440" alt="Logo" width="100" height="24"></a>
### If you intend to use my website template for the bot I would recommend redesigning the site before the bot.
### Only rebuild this site if you have atleast 3-6 months of experience doing frontend web development working on HTML/CSS, this site includes no JavaScript.
<br>

> - First, after cloning the repo, open the website folder in your preferred code editor.

> - Second, start with the main page 'index.html', and change the bots information near the header/footer of the page.

> - Third, change the copyright ownership line in the footer to your organization or alias.

> - Fourth, reset the bots statistics as given the fact there arent any custom scripts or api's on this site you need to manually set the bots stats every now and then.

> - Fifth, change the vote buttons at the header to your own bot, or remove the div altogether (class="page-header2").

> - Sixth, make sure to go through the page's head and change titles, descriptions, links, etc, and change invite/redirect links to your own.
<br>

## Building the suggestions page

### The TnyavnTo Tunes <a href="https://tnyavnto-tunes.com" target="_blank">website</a> features a suggestions page, which consists of a form that uses netlifys data attribute in its tag, which allows netlify to detect and recieve data from the form.
<br>

> - First, with that being said, make a netlify account. If you already have one i would recommend reading their documentation on forms if you haven't already.

> - Second, change the bots name and suggestion head description.

> - Third, use 'Building The Website' step three, six, and the second part of step two.

> ### Note: Make sure to clean up CSS when removing divs.

___

<br>

<h2 align="center">Author</h2>

<h3 align="center"><a href="https://tnyavnto.com">TnyavnTo</a></h3>

<h2 align="center">License</h2>

<h4 align="center">This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE.md</a> file for details</h4>

<h2 align="center"><a href="#top">Back To Top?</a></h2>

# Support Me

<a href="https://paypal.me/aidanmcgraw943?country.x=US&locale.x=en_US" target="_blank"><img src="https://pics.paypal.com/00/s/MjkwMTU5ZWYtYzY3NS00OGNlLWFkYzAtNjA3YTBjZTJhYzky/file.PNG" width="120" height="32"/></a>
