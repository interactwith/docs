# Project setup

Welcome to the project setup portion of this tutorial on minting your first NFT using the Minter API. In this section, we will guide you through the process of setting up a Node.js project and installing the necessary dependencies.

To start, let's create a new folder and initialize a Node.js project within it. To do this, open a terminal and enter the following commands:

```bash
mkdir node-mint-nft
cd node-mint-nft
npm init -y
```

This will create a new folder called `node-mint-nft` and initialize a Node.js project within it. The `-y` flag will accept all default values for the project initialization.

Next, we need to install the necessary dependencies. In this tutorial, we will be using the `@interactwith/node` package to interact with the InteractWith API and the `express` package to serve our web application. To install these dependencies, enter the following command in your terminal:

```bash
npm install @interactwith/node express
```

Now that we have our dependencies installed, let's create a new file called `index.js` and add some code to it. Specifically, we will be setting up an Express server that will listen for incoming requests on port 3000. To do this, add the following code to `index.js`:

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

Now, run the server by entering the following command in your terminal:

```bash
node index.js
```

With the server running, open [http://localhost:3000](http://localhost:3000) in your browser. You should see the message `Hello World!` displayed in your browser.

For the purposes of this tutorial, we will also need to create a simple database to store our NFTs. In this case, we will be using a simple array to store the NFTs. Add the following code to the beginning of `index.js` to create this array:

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

Finally, let's take a look at the project structure to ensure that everything is set up correctly. Your project structure should look like this:

```text
node-mint-nft
├── index.js
├── package.json
└── package-lock.json
```

With the project set up and the necessary dependencies installed, we are now ready to move on to the next step of minting our first NFT.