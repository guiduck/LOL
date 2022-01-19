# LOL

### Overview

https://lol-zeta.vercel.app

  This is a simple layout that calculates the cost of a call for given duration, location and selected plan. Made using NextJS, Typescript, eslint, prettier, Chakra-ui and Axios. The app asks for the desired location, gets the prices from an api and simulate a call.

This project was bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

## Presentation
### Screenshots

![hero](https://github.com/guiduck/LOL/blob/main/public/images/hero.jpeg)
![heroLight](https://github.com/guiduck/LOL/blob/main/public/images/herow.jpeg)
![pricing](https://github.com/guiduck/LOL/blob/main/public/images/pricing.jpeg)
![calculator](https://github.com/guiduck/LOL/blob/main/public/images/calculator.jpeg)

## Tech Stack
### Devlopment
* UI: [React](https://reactjs.org/)
* State Control: [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* Styling: [Chakra-ui](https://chakra-ui.com) 
* HTTP Client: [Axios](https://github.com/axios/axios)
* Icons: [Chakra-ui](https://chakra-ui.com/docs/media-and-icons/icon)

### API
* [json server](https://github.com/typicode/json-server)

### Linter
* [Prettier](https://github.com/prettier/prettier)
* [ESLint](https://github.com/eslint/eslint)

## Usage
### Comands

Install dependencies:

```sh
yarn (or npm i)
```

Done! Start the service:

```sh
yarn dev
```

#Development mode

```sh
# run the app in development mode
yarn dev
# next dev starts the application in development mode with hot-code reloading, error reporting, and more.
```
#Production mode

```sh
# When building the Next.js app for production, you'll want to use next build:
next build
# next build creates an optimized production build of your application. The output displays information about each route.

Size – The number of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies.
First Load JS – The number of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric.

# Followed by either next start, when you want to start the production server:
next start
# next start starts the application in production mode. The application should be compiled with next build first.

# Or next export, when exporting the app as static HTML:
next export
# next export allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.

# For more information refer to  docs.

For more information refer to * [Next.js CLI](https://nextjs.org/docs/api-reference/cli) docs.
```

## Project Structure

* `src/` code base;
* `src/hooks` config and custom hook for data fetch, used to get the token and messages in this project;
* `src/components` components isolated with its styling (if any);
* `src/Pages/` first level router components;
