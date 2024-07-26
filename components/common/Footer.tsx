import {
  Box,
  Divider,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@interchain-ui/react";
import { useState } from 'react';
// import { cosmos } from 'interchain';
import { useChain } from '@cosmos-kit/react';
import { dependencies, products, Project, CHAIN_NAME, chainassets,coin } from "@/config";
import BigNumber from 'bignumber.js';

function FetchBalance(){
  const { getSigningStargateClient, address, status, getRpcEndpoint } =
  useChain(CHAIN_NAME);

  const [balance, setBalance] = useState(new BigNumber(0));
  const [isFetchingBalance, setFetchingBalance] = useState(false);
  const getBalance = async () => {
    if (!address) {
      setBalance(new BigNumber(0));
      setFetchingBalance(false);
      return;
    }
  
    let rpcEndpoint = await getRpcEndpoint();
  
    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${CHAIN_NAME}`;
    }
  
    // get RPC client
    // const client = await cosmos.ClientFactory.createRPCQueryClient({
    //   rpcEndpoint,
    // });
  
    // fetch balance
    // const balance = await client.cosmos.bank.v1beta1.balance({
    //   address,
    //   denom: chainassets?.assets[0].base as string,
    // });
  
    // Get the display exponent
    // we can get the exponent from chain registry asset denom_units
    const exp = coin.denom_units.find((unit) => unit.denom === coin.display)
      ?.exponent as number;
  
    // show balance in display values by exponentiating it
    // const a = new BigNumber(balance.balance.amount);
    // const amount = a.multipliedBy(10 ** -exp);
    // setBalance(amount);
    setFetchingBalance(false);
  };

  return (
    <div className="fetch-container">
      <div>
        <h2>Balance</h2>
        <p>0</p>
      </div>

      <button>Fetch Balance</button>
    </div>
  )
}

function SendToken(){
  return (
    <div className="sendTokens-container">
      <button>Send Token</button>
    </div>
  )
}

export function Footer() {
  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={"40px"}
        color={"Black"}
        height={"230px"}
      >
        <FetchBalance />
        <SendToken />
      </Box>
      <Box mb="$6">
        <Divider />
      </Box>
      
    </>
  );
}
