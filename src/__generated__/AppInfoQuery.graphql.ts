/**
 * @generated SignedSource<<fbddf946802090f06e09b6639038152b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppInfoQuery$variables = {};
export type AppInfoQuery$data = {
  readonly info: string;
};
export type AppInfoQuery = {
  response: AppInfoQuery$data;
  variables: AppInfoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "info",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppInfoQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "da0cb5ae9f25874420ca3b1a88c38d8e",
    "id": null,
    "metadata": {},
    "name": "AppInfoQuery",
    "operationKind": "query",
    "text": "query AppInfoQuery {\n  info\n}\n"
  }
};
})();

(node as any).hash = "5a0a7a78d384f079fefd31a006f36f62";

export default node;
