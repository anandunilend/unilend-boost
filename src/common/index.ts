import MetamaskLogo from "assets/metamask.svg";
import ConnectWalletLogo from "assets/walletconnect-logo.svg";
import EthereumLogo from "assets/ethereumLogo.svg";
import BinanceLogo from "assets/binance.svg";
import PolygonLogo from "assets/polygonmaticLogo.svg";

export const walletList = (chain: any) => {
  let list = [
    {
      id: 1,
      walletName: "Metamask",
      logo: MetamaskLogo,
    },
  ];

  return chain === 1
    ? [
        ...list,
        {
          id: 2,
          walletName: "WalletConnect",
          logo: ConnectWalletLogo,
        },
      ]
    : list;
};

export const chainList = [
  {
    id: 1,
    name: "Ethereum",
    logo: EthereumLogo,
  },
  {
    id: 2,
    name: "Binance",
    logo: BinanceLogo,
  },
  {
    id: 3,
    name: "Polygon",
    logo: PolygonLogo,
  },
];

export const dexList = [
  {
    id: 1,
    name: "Zeroswap",
  },
  {
    id: 2,
    name: "Darkpool",
  },
  {
    id: 3,
    name: "quickswap",
  },
];

export const coinList = [
  {
    id: 1,
    name: "ETH",
    cost: "20.45"
  },
  {
    id: 2,
    name: "BNB",
    cost: "40.45"
  },
  {
    id: 3,
    name: "UFT",
    cost: "30.45"

  },
  {
    id: 4,
    name: "USDC",
    cost: "20.45"
  },
  {
    id: 5,
    name: "CFI",
    cost: "40.45"
  },
  {
    id: 6,
    name: "UFT",
    cost: "30.45"

  },
];