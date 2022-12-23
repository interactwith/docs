# Overview

Syncer is a powerful tool designed to help developers maintain consistency between their backend systems and a blockchain by using blockchain events (logs). If you are a developer working with a blockchain-based application, Syncer can save you time and effort in keeping your backend in sync with the latest changes on the blockchain.

## How Syncer Works

Using Syncer is straightforward. First, you will need to create a Syncer instance and provide the address and ABI of the contract that you want to scan. The Syncer will then use the EmCaster API to listen for relevant events on the blockchain. When an event occurs, the EmCaster API will send a notification to your backend system through either Websockets or Webhooks (depending on your preference).

With Syncer, you can easily stay up-to-date with the latest events on the blockchain, ensuring that your backend system remains consistent with the blockchain at all times. This can be especially useful for applications that rely on real-time data from the blockchain, as Syncer allows you to quickly and easily react to changes on the blockchain.

## Customizing Syncer to Your Needs

Syncer is highly customizable, allowing you to tailor it to your specific needs. You can choose which events you want to track, and you can even specify custom filters to ensure that you only receive notifications for the events that are most relevant to your application.

## Conclusion

We hope that this overview of Syncer has given you a good idea of the benefits it can offer to developers working with blockchain-based applications. For more detailed information on using Syncer, please refer to the rest of this documentation. We are confident that Syncer will help you save time and effort in maintaining consistency between your backend systems and the blockchain.