# API Key

The API key is a unique identifier that is used to authenticate your requests to the InteractWith API. It is an essential part of accessing the API and is required for all requests to the API. You can find your API key in the InteractWith dashboard, which is the centralized hub for managing your API access and settings.

## How to Use the API Key

To use the API key, you need to include it in the HTTP header of your request. The header is the part of the request that contains additional information about the request, such as the type of content being sent, the intended recipient, and so on. To include the API key in the header, you need to add a special header called X-API-KEY with a value of your API key.

Here is an example of how you might include the API key in a request using the curl command line tool:

```bash
curl -X POST https://api.interactwith.com/graphql \
  -H 'Content-Type: application/json' \
  -H 'X-API-KEY: your-api-key-here' \
  -d '{ "query": "query { currentUser { name } }" }'
```

In this example, the `-H` flag is used to add a header to the request, and the `X-API-KEY` header is set to the value of your API key. You will need to replace `your-api-key-here` with the actual value of your API key.

It is important to keep your API key safe and secure, as it provides access to potentially sensitive information. You should take care not to share your API key with anyone else, and you should be sure to keep it stored securely. If you suspect that your API key may have been compromised, you should reset it immediately to protect your data and prevent unauthorized access to the API.