# Overview

Web3Auth is a free-to-use public API that makes it easy for developers to add sign-in/sign-up functionality with wallet support to their apps. With Web3Auth, developers don't need to worry about installing multiple wallet providers in their app - just use Web3Auth to support all possible wallets.

Web3Auth is designed to be simple and straightforward for developers to implement, while also providing a secure and convenient experience for users. It allows developers to easily incorporate wallet-based authentication into their apps, making it easy for users to sign in and sign up using their preferred wallet.

## How it works

The authentication process with Web3Auth happens through an external link (similar to how sign-in with Google occurs on the Google.com side). When a developer integrates Web3Auth into their app, they can make a sign-in request, which will trigger Web3Auth to return a link to the sign-in session. The user is then redirected to this link, where they will be presented with a list of wallets to choose from.

Once the user selects a wallet, the response with the verified wallet address is returned to the original app. Along with the wallet address, a signed message is also returned to prove that the user is the owner of the wallet. This helps to ensure the security of the authentication process and confirm that the user is indeed the owner of the wallet they have selected.

In summary, Web3Auth is a simple and effective way for developers to add wallet-based authentication to their apps. It supports all possible wallets, making it convenient for users to sign in and sign up using their preferred wallet, while also providing a secure authentication process.