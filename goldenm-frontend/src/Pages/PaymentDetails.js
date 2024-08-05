
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const PaymentDetails = () => {
  
//   const location = useLocation();
//  // const { selectedCoinData, walletAddressData } = location.state || {};
//   const selectedCoinData= location.state && location.state.selectedCoinData;
//   const {  coinToken,waVerificationCode} = selectedCoinData;
//   console.log("data....selected here....",selectedCoinData);
//   console.log(waVerificationCode.data.walletAddress);
  
//   const walletAddressData = location.state && location.state.walletAddressData;
// console.log(walletAddressData);
  

//   return (
//     <div>
//       <h2>Payment Details</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Wallet Address</th>
//             <th>Coin Token</th>
//             <th>Referral Code</th>
//             <th>Value 9%</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{waVerificationCode.data.walletAddress}</td>
//             <td>{coinToken}</td>
//             <td>{walletAddressData}</td>
//              <td>{coinToken * 0.09}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };
//------------------------------2
// export default PaymentDetails;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { contractAddress } from "../Contracts/address"
// import contractAbi from "../Contracts/contractAbi.json"
// import {ethers} from 'ethers';
// import { parseUnits } from '@ethersproject/units';

// import axios from 'axios';

// const PaymentDetails = () => {
//   const [userSigner, setUserSigner] = useState();
//   const [userProvider, setUserProvider] = useState()
//   const [userAddress, setUserAddress] = useState()
//   const [contract, setContract] = useState()

//   const location = useLocation();
//   // const { selectedCoinData, walletAddressData } = location.state || {};
//   const selectedCoinData = location.state && location.state.selectedCoinData;
//   const { coinToken, waVerificationCode } = selectedCoinData;
//   console.log("data....selected here....", selectedCoinData);
//   console.log(waVerificationCode.data.walletAddress);

//   const walletAddressData = location.state && location.state.walletAddressData;
//   console.log("Wallet address data", walletAddressData);

//   const connectWithMetaMask = async () => {
//     try {
//       if (window.ethereum) {
//         const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//         const chainId = await provider.send('eth_chainId');

//         // Check if connected chain matches Mumbai chain ID (80001)
//         if (chainId !== '0x13881') { // Mumbai testnet chain ID
//           await window.ethereum.request({
//             method: 'wallet_switchEthereumChain',
//             params: [{ chainId: '0x13881' }], // Switch to Mumbai testnet
//           });
//         }

//         // Prompt user for account connections
//         await provider.send("eth_requestAccounts", []);
//         setUserSigner(provider)

//         const signer = provider.getSigner();
//         setUserProvider(signer)

//         setUserAddress(await signer.getAddress())
//         console.log("Account:", await signer.getAddress());

//         console.log("contract Address:", contractAddress);

//         const _contract = new ethers.Contract(contractAddress, contractAbi, signer);
//         setContract(_contract)
//       } else {
//         console.error("MetaMask not detected. Please install MetaMask.");
//       }
//     } catch (error) {
//       console.error("Error connecting with MetaMask:", error);
//     }
//   }


//   const referralBuy = (amount, ref) => {
//     const EtherToWei = ethers.utils.parseUnits(amount.toString(), "ether")
//     contract?.buyTokensWithRef(EtherToWei, ref).then(async (res) => {
//       console.log("result for buyTokensWithRef:", res)
//     })
//   }


//   const buyToken = (amount) => {
//     const EtherToWei = ethers.utils.parseUnits(amount.toString(), "ether")
//     contract?.buyTokens(EtherToWei).then(async (res) => {
//       console.log("result for buyTokens:", res)
//     })
//   }
//   useEffect(() => {


//   }, [])

//   return (
//     <div style={{ maxWidth: '900px', margin: 'auto', height: '86vh' }}>
//       <h2>Payment Details</h2>
//       <button
//         onClick={connectWithMetaMask}
//         style={styles.connectWalletButton}
//       >
//         {userAddress ? userAddress : " Connect Wallet"}
//       </button>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Wallet Address</th>
//             <th>Coin Token</th>
//             <th>Referral Code</th>
//             <th>Value 9%</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{waVerificationCode.data.walletAddress}</td>
//             <td>{coinToken}</td>
//             <td>{walletAddressData}</td>
//             <td>{coinToken * 0.09}</td>
//             {/* <td>{"0x76399c8A5027fD58A1D1b07500ccC8a223BEE0c3"}</td>
//             <td>{2000}</td>
//             <td>{"0x9fc1aA5157Ee24801a6e27A09784170eB12C502d"}</td>
//             <td>{2000 * 0.09}</td> */}
//           </tr>
//         </tbody>
//       </table>
//       <div onClick={() => {
//         walletAddressData ? referralBuy(coinToken, walletAddressData) : buyToken(coinToken)
//       }} style={styles.buyButton}>Buy Token</div>
//     </div>
//   );
// };

// const styles = {
//   connectWalletButton: {
//     padding: ' 10px',
//     backgroundColor: '#008CBA',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginRight: '10px',
//     marginBottom: "10px",
//     width: '100%'
//   },
//   buyButton: {
//     padding: '10px 20px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     textAlign: 'center',
//     width: "200px",
//     marginLeft: 'auto',
//     marginRight: 'auto'
//   },
// };

// export default PaymentDetails;


//------------------------3
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Contract } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';  // Updated import
import { contractAddress } from "../Contracts/address";
import contractAbi from "../Contracts/contractAbi.json";
import { ethers } from 'ethers';

const PaymentDetails = () => {
  const [userSigner, setUserSigner] = useState();
  const [userAddress, setUserAddress] = useState();
  const [contract, setContract] = useState();

  const location = useLocation();
  const selectedCoinData = location.state && location.state.selectedCoinData;
  const { coinToken, waVerificationCode } = selectedCoinData;
  const walletAddressData = location.state && location.state.walletAddressData;

  const connectWithMetaMask = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const chainId = await provider.send('eth_chainId');

        if (chainId !== '0x13881') { // Mumbai testnet chain ID
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x13881' }], // Switch to Mumbai testnet
          });
        }

        await provider.send("eth_requestAccounts", []);
        setUserSigner(provider);

        const signer = provider.getSigner();
        setUserAddress(await signer.getAddress());

        const _contract = new Contract(contractAddress, contractAbi, signer);
        setContract(_contract);
      } else {
        console.error("MetaMask not detected. Please install MetaMask.");
      }
    } catch (error) {
      console.error("Error connecting with MetaMask:", error);
    }
  }

  const referralBuy = async (amount, ref) => {
    try {
      const EtherToWei = parseUnits(amount.toString(), "ether");  // Updated usage
      const tx = await contract?.buyTokensWithRef(EtherToWei, ref);
      console.log("Transaction for buyTokensWithRef:", tx);
    } catch (error) {
      console.error("Error in referralBuy:", error);
    }
  }

  const buyToken = async (amount) => {
    try {
      const EtherToWei = parseUnits(amount.toString(), "ether");  // Updated usage
      const tx = await contract?.buyTokens(EtherToWei);
      console.log("Transaction for buyTokens:", tx);
    } catch (error) {
      console.error("Error in buyToken:", error);
    }
  }

  useEffect(() => {
    // Additional logic if needed
  }, []);

  return (
    <div style={{ maxWidth: '900px', margin: 'auto', height: '86vh' }}>
      <h2>Payment Details</h2>
      <button
        onClick={connectWithMetaMask}
        style={styles.connectWalletButton}
      >
        {userAddress ? userAddress : "Connect Wallet"}
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Wallet Address</th>
            <th>Coin Token</th>
            <th>Referral Code</th>
            <th>Value 9%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{waVerificationCode?.data?.walletAddress}</td>
            <td>{coinToken}</td>
            <td>{walletAddressData}</td>
            <td>{coinToken * 0.09}</td>
          </tr>
        </tbody>
      </table>
      <div 
        onClick={() => {
          walletAddressData ? referralBuy(coinToken, walletAddressData) : buyToken(coinToken)
        }} 
        style={styles.buyButton}
      >
        Buy Token
      </div>
    </div>
  );
};

const styles = {
  connectWalletButton: {
    padding: '10px',
    backgroundColor: '#008CBA',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    marginBottom: "10px",
    width: '100%'
  },
  buyButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    width: "200px",
    marginLeft: 'auto',
    marginRight: 'auto'
  },
};

export default PaymentDetails;
