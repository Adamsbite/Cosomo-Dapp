import React, { MouseEventHandler, ReactNode } from "react";
// import {
//   Box,
//   Button,
//   Center,
//   Flex,
//   Heading,
//   Icon,
//   Spinner,
//   Stack,
//   Text,
//   useColorMode,
// } from "@interchain-ui/react";

export const GetBalance = ({
    balance,
    // response,
    isFetchingBalance,
    isConnectWallet,
    getBalanceButtonText,
    handleClickGetBalance,
    // sendTokensButtonText,
    // handleClickSendTokens,
  }: {
    balance: number;
    // response?: string;
    isFetchingBalance: boolean;
    isConnectWallet: boolean;
    // sendTokensButtonText?: string;
    // handleClickSendTokens: () => void;
    getBalanceButtonText?: string;
    handleClickGetBalance: () => void;
  }) => {
    // const { colorMode } = useColorMode();
    if (!isConnectWallet) {
      return (
        <div>
            Please Connect Your Wallet!
        </div>
      );
    }
    return (
      <section>
        <section>
          <h1>
            Balance:&ensp;
              {balance}
          </h1>
          <button
            onClick={handleClickGetBalance}
          >
            {getBalanceButtonText || "Fetch Balance"}
          </button>
        </section>
        <section>
          {/* <button>
            {sendTokensButtonText || "Send Tokens (to self)"}
          </button> */}
        </section>
        {/* {response && (
          <section>
            <h1>Result</h1>
            <div>
              <pre>{response}</pre>
            </div>
          </section>
        )} */}
      </section>
    );
  };
  