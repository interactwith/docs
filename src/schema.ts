export const schema = {
  "queries": {
    "type": "ObjectTypeDefinition",
    "fields": [
      {
        "name": "chain_networks",
        "arguments": [],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "ChainNetwork"
      },
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
        "name": "minter_nfts",
        "arguments": [
          {
            "name": "filter",
            "isDeprecated": false,
            "noNull": false,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IMinterNftsFilter"
          },
          {
            "name": "pagination",
            "isDeprecated": false,
            "noNull": false,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IPagination"
          },
          {
            "name": "sort",
            "isDeprecated": false,
            "noNull": false,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "ISort"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "MinterNft"
      },
      {
        "name": "minter_nft",
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
        "type": "MinterNft"
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
            "type": "IEcpEventsFilter"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "EcpEvent"
      },
      {
        "name": "ecps",
        "arguments": [
          {
            "name": "filter",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IEcpsFilter"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": true,
        "noNullArrayValues": true,
        "type": "Ecp"
      },
      {
        "name": "ecp",
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
        "type": "Ecp"
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
        "name": "minter_checkout_session",
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
        "type": "MinterCheckoutSession"
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
        "name": "ecpUpdate",
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
            "type": "IEcpUpdate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "Ecp"
      },
      {
        "name": "ecpCreate",
        "arguments": [
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IEcpCreate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "Ecp"
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
        "name": "minterCheckoutSessionCreate",
        "arguments": [
          {
            "name": "data",
            "isDeprecated": false,
            "noNull": true,
            "isArray": false,
            "noNullArrayValues": false,
            "type": "IMinterCheckoutSessionCreate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "MinterCheckoutSession"
      },
      {
        "name": "minterCheckoutSessionUpdate",
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
            "type": "IMinterCheckoutSessionUpdate"
          }
        ],
        "isDeprecated": false,
        "noNull": true,
        "isArray": false,
        "noNullArrayValues": false,
        "type": "MinterCheckoutSession"
      },
      {
        "name": "minterCheckoutSessionAttachStripePaymentIntent",
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
        "type": "MinterCheckoutSession"
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
        "value": "A simple ObjectId scalar. (type: string) (example: \"62d13a8b029b95001b881441\")",
        "block": true,
        "loc": {
          "start": 386,
          "end": 472
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
        "value": "A network scalar. See https://docs.interactwith.com/docs/getting-started/supported-chains for the full list of supported networks. (type: string) (example: \"eth\")",
        "block": true,
        "loc": {
          "start": 1101,
          "end": 1271
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
        "value": "A simple Address parser (type: string) (example: \"0x509016ec41c0F4b3072cA7c000034845163ECA0E\")",
        "block": true,
        "loc": {
          "start": 1288,
          "end": 1390
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
        "value": "A keccak256 scalar. (type: string) (example: \"0xbbdf3616512df59a06f9c800ac8da843b3a0926340249b3910b18d7d64992124\")",
        "block": true,
        "loc": {
          "start": 1407,
          "end": 1529
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
          "start": 1548,
          "end": 1704
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
        "value": "Void type (type: boolean) (example: true)",
        "block": true,
        "loc": {
          "start": 6456,
          "end": 6503
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
    "Ecp": {
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
    "ChainNetwork": {
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
          "name": "default_rpc",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "archive_rpc",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "type",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "block_time",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Float"
        },
        {
          "name": "native_curr_symbol",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "icon_url",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "scan_url",
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
    "ProjectMinterSettings": {
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
          "name": "minter_settings",
          "arguments": [],
          "isDeprecated": false,
          "noNull": true,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "ProjectMinterSettings"
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
          "name": "minter_syncer_instance",
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
    "MinterNft": {
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
    "EcpEvent": {
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
          "name": "ecp",
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
    "MinterNftAssetInfo": {
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
    "MinterCheckoutSessionPriceEstimate": {
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
    "MinterCheckoutSession": {
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
          "type": "MinterNftAssetInfo"
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
          "type": "MinterCheckoutSessionPriceEstimate"
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
    "IMinterNftsFilter": {
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
    "IPagination": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "take",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Int"
        },
        {
          "name": "page",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "Int"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "ISort": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "direction",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "SortDirection"
        },
        {
          "name": "by_field",
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
    "IEcpEventsFilter": {
      "type": "InputObjectTypeDefinition",
      "fields": [
        {
          "name": "ecp",
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
    "IEcpsFilter": {
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
        },
        {
          "name": "type",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "String"
        },
        {
          "name": "search",
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
    "IEcpUpdate": {
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
    "IEcpCreate": {
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
          "name": "minter_settings",
          "arguments": [],
          "isDeprecated": false,
          "noNull": false,
          "isArray": false,
          "noNullArrayValues": false,
          "type": "IProjectMinterSettingsUpdate"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IProjectMinterSettingsUpdate": {
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
    "IMinterCheckoutSessionCreate": {
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
          "type": "IMinterCheckoutSessionCreateAssetInfo"
        }
      ],
      "values": [],
      "types": [],
      "implementedTypes": []
    },
    "IMinterCheckoutSessionCreateAssetInfo": {
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
    "IMinterCheckoutSessionUpdate": {
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
  "enums": {
    "SortDirection": {
      "type": "EnumTypeDefinition",
      "fields": [],
      "values": [
        "ASC",
        "DESC"
      ],
      "types": [],
      "implementedTypes": []
    }
  },
  "interfaces": {}
};