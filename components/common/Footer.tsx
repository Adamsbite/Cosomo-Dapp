import {
  Box,
  Divider,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@interchain-ui/react";
// import { cosmos } from 'interchain';
import { useChain } from '@cosmos-kit/react';
import { dependencies, products, Project } from "@/config";

// function Product({ name, desc, link }: Project) {
//   return (
//     <Link href={link} target="_blank" underline={false}>
//       <Stack
//         space="$5"
//         direction="vertical"
//         attributes={{
//           height: "$full",
//           minHeight: "$24",
//           padding: "$9",
//           justifyContent: "center",
//           borderRadius: "$xl",
//           color: {
//             base: "$text",
//             hover: useColorModeValue("$purple600", "$purple300"),
//           },
//           boxShadow: {
//             base: useColorModeValue(
//               "0 2px 5px #ccc",
//               "0 1px 3px #727272, 0 2px 12px -2px #2f2f2f",
//             ),
//             hover: useColorModeValue(
//               "0 2px 5px #bca5e9",
//               "0 0 3px rgba(150, 75, 213, 0.8), 0 3px 8px -2px rgba(175, 89, 246, 0.9)",
//             ),
//           },
//         }}
//       >
//         <Text as="h2" fontSize="$xl" color="inherit" attributes={{ margin: 0 }}>
//           {name}&ensp;&rarr;
//         </Text>
//         <Text
//           color="inherit"
//           as="p"
//           fontSize="$md"
//           fontWeight="$normal"
//           attributes={{ marginY: "$1" }}
//         >
//           {desc}
//         </Text>
//       </Stack>
//     </Link>
//   );
// }

// function Dependency({ name, desc, link }: Project) {
//   return (
//     <Link href={link} target="_blank" underline={false}>
//       <Stack
//         key={name}
//         space="$6"
//         direction="horizontal"
//         attributes={{
//           height: "$full",
//           padding: "$8",
//           justifyContent: "center",
//           borderWidth: "1px",
//           borderStyle: "solid",
//           borderColor: useColorModeValue("$blackAlpha200", "$whiteAlpha100"),
//           borderRadius: "$xl",
//           boxShadow: {
//             base: "none",
//             hover: useColorModeValue(
//               "0 2px 5px #ccc",
//               "0 1px 3px #727272, 0 2px 12px -2px #2f2f2f",
//             ),
//           },
//         }}
//       >
//         <Box
//           color={useColorModeValue("$primary500", "$primary200")}
//           flex="0 0 auto"
//         >
//           <Icon name="link" size="$md" attributes={{ mt: "$2" }} />
//         </Box>

//         <Stack space="$2" direction="vertical">
//           <Text
//             as="p"
//             fontSize="$lg"
//             fontWeight="$semibold"
//             attributes={{ marginY: "$1" }}
//           >
//             {name}
//           </Text>
//           <Text
//             as="p"
//             fontSize="$md"
//             fontWeight="$light"
//             attributes={{
//               color: useColorModeValue("$blackAlpha700", "$whiteAlpha700"),
//               lineHeight: "$short",
//               marginY: "$1",
//             }}
//           >
//             {desc}
//           </Text>
//         </Stack>
//       </Stack>
//     </Link>
//   );
// }

import {
  CHAIN_NAME,
} from '../../config';

// const { getSigningStargateClient, address, status, getRpcEndpoint } =
// useChain(CHAIN_NAME);

// let rpcEndpoint = await getRpcEndpoint();

// if (!rpcEndpoint) {
//   console.log('no rpc endpoint — using a fallback');
//   rpcEndpoint = `https://rpc.cosmos.directory/${CHAIN_NAME}`;
// }

// // get RPC client
// const client = await cosmos.ClientFactory.createRPCQueryClient({
//   rpcEndpoint,
// });

// fetch balance
// const balance = await client.cosmos.bank.v1beta1.balance({
//   address,
//   denom: chainassets?.assets[0].base as string,
// });

function FetchBalance(){
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
        {/* {dependencies.map((dependency) => (
          <Dependency key={dependency.name} {...dependency}></Dependency>
        ))} */}
        <FetchBalance />
        <SendToken />
      </Box>
      <Box mb="$6">
        <Divider />
      </Box>
      
    </>
  );
}
