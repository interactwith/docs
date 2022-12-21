# Project setup

In order to follow this tutorial, you need to setup a Node.js project. You can use any IDE of your choice. In this tutorial, we will use VS Code.

## Create a Node.js project

Create a new folder and initialize a node.js project in it.

```bash
mkdir node-mint-nft
cd node-mint-nft
npm init -y
```

## Install dependencies

Install the following dependencies:

- `@interactwith/node` - to interact with InteractWith API
- `express` - to serve the web application

```bash
npm install @interactwith/node express
```

## Express server

Create a new file `index.js` and add the following code:

```js showLineNumbers
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Run the server:

```bash
node index.js
```

Open http://localhost:3000 in your browser. You should see `Hello World!` in your browser.

## Mocking Databasea

We need to store the NFTs somewhere. For this tutorial, we will use a simple array. Let's create a new variable `db` in beginning of `index.js` and fill it will test data:

```js showLineNumbers
const db = {
  
  items: [
    {
      id: 1,
      name: 'Sword',
      description: 'A sword',
      image: 'https://i.imgur.com/1Q1Z1Yx.png',
      is_minted: false,
      owner: null,
    },
    {
      id: 2,
      name: 'Shield',
      description: 'A shield',
      image: 'https://i.imgur.com/1Q1Z1Yx.png',
      is_minted: false,
      owner: null,
    },
  ]
};
```

## Project structure

The project structure should look like this:

```text
node-mint-nft
├── index.js
├── package.json
└── package-lock.json
```