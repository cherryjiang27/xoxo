import React from "react";

import { CometProvider, LoginButton } from "@comet-labs/react";

const cometProviderConfig = {
  publishableKey: "oAEGrKqbF4GHUZBnE3EJtvw1VELcc2mT",
};

const TestComet = () => {
  return (
    // <React.StrictMode>
    <CometProvider config={cometProviderConfig}>
      <LoginButton />
    </CometProvider>
    // </React.StrictMode>
  );
};

export default TestComet;

{
  "id": "6c2715377717",
  "name": "my test collection",
  "symbol": "TEST",
  "type": "milky_way_nft",
  "chainType": "solana",
  "chainId": 101,
  "subtype": "numbered_pass",
  "description": "whats good",
  "infiniteSupply": false,
  "maxSupply": 100,
  "price": 10,
  "pricingModel": "pay_once",
  "deployed": false,
  "isCometToken": true,
  "backgroundUpload": "OxnAlTCm9se8sMlnu0CeExmawJ0YVFGd4WcVgUCs3ZCfPbNm7NT9ewIfNKRfCgj7"
}
