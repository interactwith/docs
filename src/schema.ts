export const schema = {
  "queries": {
    "type": "ObjectTypeDefinition",
    "fields": [
      {
        "name": "me",
        "arguments": [],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "User"
      },
      {
        "name": "users",
        "arguments": [],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "User"
      },
      {
        "name": "dassets_nfts",
        "arguments": [
          {
            "name": "filter",
            "isDeprecated": false,
            "noNull": false,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IDassetsNftsFilter"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "DassetsNft"
      },
      {
        "name": "dassets_nft",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "DassetsNft"
      },
      {
        "name": "syncer_events",
        "arguments": [
          {
            "name": "filter",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ISyncerEventsFilter"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "SyncerEvent"
      },
      {
        "name": "event_emitter_instances",
        "arguments": [
          {
            "name": "filter",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IEventEmitterInstancesFilter"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "EventEmitterInstance"
      },
      {
        "name": "event_emitter_instance",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "EventEmitterInstance"
      },
      {
        "name": "syncer_instances",
        "arguments": [
          {
            "name": "filter",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ISyncerInstancesFilter"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "SyncerInstance"
      },
      {
        "name": "syncer_instance",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "SyncerInstance"
      },
      {
        "name": "projects",
        "arguments": [],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "Project"
      },
      {
        "name": "project",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "Project"
      },
      {
        "name": "project_groups",
        "arguments": [],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "ProjectGroup"
      },
      {
        "name": "project_group",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "ProjectGroup"
      },
      {
        "name": "key_bunches",
        "arguments": [],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "KeyBunch"
      },
      {
        "name": "key_bunch",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "KeyBunch"
      },
      {
        "name": "dassets_checkout_session",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "DassetsCheckoutSession"
      }
    ],
    "values": [],
    "types": [],
    "implementedTypes": []
  },
  "mutations": {
    "type": "ObjectTypeDefinition",
    "fields": [
      {
        "name": "userSignUp",
        "arguments": [
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IUserSignUp"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "User"
      },
      {
        "name": "syncerEventsProcess",
        "arguments": [
          {
            "name": "ids",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "Void"
      },
      {
        "name": "eventEmitterInstanceUpdate",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          },
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IEventEmitterInstanceUpdate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "EventEmitterInstance"
      },
      {
        "name": "eventEmitterInstanceCreate",
        "arguments": [
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IEventEmitterInstanceCreate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "EventEmitterInstance"
      },
      {
        "name": "syncerInstanceCreate",
        "arguments": [
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ISyncerInstanceCreate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "SyncerInstance"
      },
      {
        "name": "syncerInstanceUpdate",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          },
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ISyncerInstanceUpdate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "SyncerInstance"
      },
      {
        "name": "syncerInstanceDelete",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "Void"
      },
      {
        "name": "projectCreate",
        "arguments": [
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IProjectCreate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "Project"
      },
      {
        "name": "projectUpdate",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          },
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IProjectUpdate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "Project"
      },
      {
        "name": "projectGroupCreate",
        "arguments": [
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IProjectGroupCreate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "ProjectGroup"
      },
      {
        "name": "projectGroupUpdate",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          },
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IProjectGroupUpdate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "ProjectGroup"
      },
      {
        "name": "projectGroupDelete",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "Void"
      },
      {
        "name": "keyBunchCreate",
        "arguments": [
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IKeyBunchCreate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "KeyBunch"
      },
      {
        "name": "dassetsCheckoutSessionCreate",
        "arguments": [
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IDassetsCheckoutSessionCreate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "DassetsCheckoutSession"
      },
      {
        "name": "dassetsCheckoutSessionUpdate",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          },
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IDassetsCheckoutSessionUpdate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "DassetsCheckoutSession"
      },
      {
        "name": "dassetsCheckoutSessionAttachStripePaymentIntent",
        "arguments": [
          {
            "name": "id",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ObjectId"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "DassetsCheckoutSession"
      }
    ],
    "values": [],
    "types": [],
    "implementedTypes": []
  },
  "scalars": {
    "DateTime": {
      "type": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.",
        "block": true,
        "loc": {
          "start": 267,
          "end": 368
        }
      },
      "fields": [],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ObjectId": {
      "type": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A simple ObjectId scalar. (example: \"62d13a8b029b95001b881441\")",
        "block": true,
        "loc": {
          "start": 386,
          "end": 455
        }
      },
      "fields": [],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "Network": {
      "type": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A network scalar. See https://docs.interactwith.com/docs/getting-started/supported-chains for the full list of supported networks. (example: \"eth\")",
        "block": true,
        "loc": {
          "start": 896,
          "end": 1057
        }
      },
      "fields": [],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "Address": {
      "type": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A simple Address parser (example: \"0x509016ec41c0F4b3072cA7c000034845163ECA0E\")",
        "block": true,
        "loc": {
          "start": 1074,
          "end": 1161
        }
      },
      "fields": [],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "Keccak256": {
      "type": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A keccak256 scalar. (example: \"0xbbdf3616512df59a06f9c800ac8da843b3a0926340249b3910b18d7d64992124\")",
        "block": true,
        "loc": {
          "start": 1178,
          "end": 1285
        }
      },
      "fields": [],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "JSON": {
      "type": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
        "block": true,
        "loc": {
          "start": 1304,
          "end": 1460
        }
      },
      "fields": [],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "Void": {
      "type": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Void type (example: true)",
        "block": true,
        "loc": {
          "start": 5956,
          "end": 5987
        }
      },
      "fields": [],
      "values": [],
      "types": [],
      "implementedTypes": []
    }
  },
  "objects": {
    "User": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "created_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "updated_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "email",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "EventEmitterInstance": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "created_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "updated_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "is_webhook_emitter",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Boolean"
        },
        {
          "name": "webhook_endpoint",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "syncer_instance",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "is_stopped",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Boolean"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "SyncerInstanceContract": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "created_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "updated_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "network",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Network"
        },
        {
          "name": "address",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Address"
        },
        {
          "name": "deploy_tx",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Keccak256"
        },
        {
          "name": "contract_name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "events",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "String"
        },
        {
          "name": "abi",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "JSON"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "SyncerInstance": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "created_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "updated_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "contracts",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "SyncerInstanceContract"
        },
        {
          "name": "project",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "preset",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ProjectSyncerSettings": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "include_networks",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "Network"
        },
        {
          "name": "contracts_base_url",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ProjectDassetsSettings": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "include_networks",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "String"
        },
        {
          "name": "token_base_url",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "webhook_events_url",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "Project": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "created_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "updated_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "user",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "pic",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "dassets_settings",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ProjectDassetsSettings"
        },
        {
          "name": "syncer_settings",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ProjectSyncerSettings"
        },
        {
          "name": "dassets_syncer_instance",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "SyncerInstance"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "DassetsNft": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "created_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "updated_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "project",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "owner",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Address"
        },
        {
          "name": "mint_tx",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Keccak256"
        },
        {
          "name": "mint_block",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Int"
        },
        {
          "name": "network",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Network"
        },
        {
          "name": "token_id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Int"
        },
        {
          "name": "asset_id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "owner_synced_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Int"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "SyncerEvent": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "created_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "updated_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "internal_id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "payload",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "JSON"
        },
        {
          "name": "args",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "JSON"
        },
        {
          "name": "event_emitter_instance",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "metadata",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "JSON"
        },
        {
          "name": "is_processed",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Boolean"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "DassetsNftAssetInfo": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "description",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "image_url",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "DassetsCheckoutSessionPriceEstimate": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "price",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Float"
        },
        {
          "name": "total_eth",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Float"
        },
        {
          "name": "eth_price",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Float"
        },
        {
          "name": "gas_price",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Float"
        },
        {
          "name": "gas",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Float"
        },
        {
          "name": "slippage",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Float"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "DassetsCheckoutSession": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "created_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "updated_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "project",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "address",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Address"
        },
        {
          "name": "mint_tx",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Keccak256"
        },
        {
          "name": "mint_token_id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Float"
        },
        {
          "name": "mint_request_id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "payment_id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "payment_expires_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "network",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Network"
        },
        {
          "name": "contract_type",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "is_succeeded",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Boolean"
        },
        {
          "name": "expires_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "asset_info",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DassetsNftAssetInfo"
        },
        {
          "name": "is_payed",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Boolean"
        },
        {
          "name": "url",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "is_minted",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Boolean"
        },
        {
          "name": "is_expired",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Boolean"
        },
        {
          "name": "price_estimation",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DassetsCheckoutSessionPriceEstimate"
        },
        {
          "name": "stripe_pi_client_secret",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ProjectGroup": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "created_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "updated_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "user",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "pic",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "projects",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "ObjectId"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "KeyBunch": {
      "type": "ObjectTypeDefinition",
      "fields": [
        {
          "name": "created_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "updated_at",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "DateTime"
        },
        {
          "name": "id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "user",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "project",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "description",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "public_key",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "secret_key",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    }
  },
  "inputs": {
    "IDassetsNftsFilter": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "network",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Network"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ISyncerEventsFilter": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "event_emitter_instance",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "is_processed",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Boolean"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IEventEmitterInstancesFilter": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "syncer_instance",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ISyncerInstancesFilter": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "project",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IUserSignUp": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "email",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "password",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IEventEmitterInstanceUpdate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "is_webhook_emitter",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Boolean"
        },
        {
          "name": "webhook_endpoint",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IEventEmitterInstanceCreate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "is_webhook_emitter",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Boolean"
        },
        {
          "name": "webhook_endpoint",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "syncer_instance",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ISyncerInstanceCreate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "project",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "preset",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "contracts",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "ISyncerInstanceCreateContracts"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ISyncerInstanceCreateContracts": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "address",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Address"
        },
        {
          "name": "deploy_tx",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Keccak256"
        },
        {
          "name": "contract_name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "events",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "String"
        },
        {
          "name": "abi",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "JSON"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ISyncerInstanceUpdate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "project",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "preset",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "contracts",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "ISyncerInstanceUpdateContracts"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ISyncerInstanceUpdateContracts": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "address",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Address"
        },
        {
          "name": "deploy_tx",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Keccak256"
        },
        {
          "name": "contract_name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "events",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "String"
        },
        {
          "name": "abi",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "JSON"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IProjectCreate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IProjectUpdate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "dassets_settings",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "IProjectDassetsSettingsUpdate"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IProjectDassetsSettingsUpdate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "include_networks",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "Network"
        },
        {
          "name": "token_base_url",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "webhook_events_url",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IProjectGroupCreate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "pic",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "projects",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "ObjectId"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IProjectGroupUpdate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "pic",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "projects",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": true,
          "noNullArrayValues": true,
          "type": "ObjectId"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IKeyBunchCreate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "project",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IDassetsCheckoutSessionCreate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "project",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ObjectId"
        },
        {
          "name": "asset_info",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "IDassetsCheckoutSessionCreateAssetInfo"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IDassetsCheckoutSessionCreateAssetInfo": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "id",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "name",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "description",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "image_url",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IDassetsCheckoutSessionUpdate": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "address",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Address"
        },
        {
          "name": "network",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Network"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    }
  },
  "interfaces": {}
};