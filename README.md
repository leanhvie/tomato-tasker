# tomato-tasker
Repository for a pomodoro timer web application

## Setup

Make sure you have [node.js](https://nodejs.org/en/) installed on your computer.

Copy and paste the following commands into the command line:

```
git clone https://github.com/leanhvie/tomato-tasker.git
cd tomato-tasker
npm install
npm run build
```
`npm install` command will download all the needed dependencies for running the application. The process may take a while.

From here there are two ways to run the application:
* Run the application with webpack-dev-server by typing `npm run dev` into the command line, where changes to the code will affect the running application.
* Run the application by simply opening the `index.html` file.

## Things to work on
* Individual user authentication with firebase (currently anybody can add and access tasks)
* Fix visual glitch with SVG radial progress
* Implement queue and order system for tasks
* Coming up with more creative ideas
