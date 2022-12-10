---

sidebar_position: 6

---

# About Event Emitters

Event Emitters are somekind of an instance that is responsible for consistency between InteractWith and your backend. It is a way to notify your backend about some events that happen on InteractWith. For example when some NFT is transferred to another wallet the Event Emitter will notify your backend about this event and wait until your backend confirms that the event was processed. If your backend confirms that the event was processed, the Event Emitter will mark the event as processed and will not notify your backend about this event again. If your backend does not confirm that the event was processed, the Event Emitter will notify your backend about this event again after some time.


## Event Emitter Types

There are two types of Event Emitters:

### Webhook Event Emitter

Webhook Event Emitters are Event Emitters that notify your backend about events by sending HTTP requests to your backend. You can use Webhook Event Emitters to notify your backend about events that happen on InteractWith.

### Websocket Event Emitter

Websocket Event Emitters are Event Emitters that notify your backend about events by sending messages to your backend through a WebSocket connection. You can use Websocket Event Emitters to notify your backend about events that happen on InteractWith. Useful for private networks, local development, and other cases where you can't expose your backend to the Internet.

**Example:**

```js
const { InteractWith } = require('@interactwith/node');

const interactwith = new Interact({
  apiKey: 'API_KEY',
})

const event_emitter = new interactwith.EventEmitter({
  event_emitter_id: 'EVENT_EMITTER_ID',
});

event_emitter.on('Minter.NftTransferred', (event) => {
  
});
```

:::tip

You must make your handlers idempotent. This means that if you receive the same event multiple times, you must not process it multiple times. You can use the `event.id` field to identify the event. The same applies to the webhook event emitter.

:::

**Response:**

```js
{
  id: 'EVENT_ID',
  event_emitter_id: 'EVENT_EMITTER_ID',
  event_type: 'Minter.NftTransferred',
  event_data: {
    nft_id: 'NFT_ID',
    from: 'FROM_WALLET_ID',
    to: 'TO_WALLET_ID',
  },
  processed: false,
  created_at: '2021-07-01T12:00:00.000Z',
  updated_at: '2021-07-01T12:00:00.000Z',
}
```