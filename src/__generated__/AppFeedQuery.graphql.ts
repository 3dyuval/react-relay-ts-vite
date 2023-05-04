/**
 * @generated SignedSource<<3dfbfb907988b9f136918e9d1980ed16>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppFeedQuery$variables = {};
export type AppFeedQuery$data = {
  readonly feed: ReadonlyArray<{
    readonly comments: ReadonlyArray<{
      readonly body: string;
      readonly id: string;
    } | null> | null;
    readonly description: string;
    readonly id: string;
    readonly url: string;
  }>;
};
export type AppFeedQuery = {
  response: AppFeedQuery$data;
  variables: AppFeedQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Link",
    "kind": "LinkedField",
    "name": "feed",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "comments",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "body",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppFeedQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppFeedQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "31a756364065f7f4c215ebc33a2f38da",
    "id": null,
    "metadata": {},
    "name": "AppFeedQuery",
    "operationKind": "query",
    "text": "query AppFeedQuery {\n  feed {\n    id\n    description\n    url\n    comments {\n      id\n      body\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c30192536ff013017a4656c85d545a26";

export default node;
