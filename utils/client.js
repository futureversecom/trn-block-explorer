// Frontpage queries
export const getLatestTransfers = () => {
  let a = [];
  for (let i = 0; i < 10; i++) {
    a.push({
      id: Math.floor(Math.random() * 10000),
      timestamp: Math.floor(new Date().getTime()) - 1000,
    });
  }
  return a;
};
export const getLatestBlocks = () => {
  let a = [];
  let startBlock = Math.floor(Math.random() * 10000);
  for (let i = 0; i < 10; i++) {
    a.push({
      height: startBlock,
      timestamp: Math.floor(new Date().getTime()) - 1000,
    });
    startBlock--;
  }
  return a;
};

export const getLatestChainData = () => {
  return [
    {
      name: "Transfers",
      stat: Math.floor(Math.random() * 10000000),
    },
    {
      name: "Finalized Blocks",
      stat: Math.floor(Math.random() * 1000000),
    },
    {
      name: "Holders",
      stat: Math.floor(Math.random() * 10000),
    },
  ];
};

export const getBlock = () => {
  return {
    timestamp: Math.floor(new Date().getTime()) - 1000,
    status: true,
    hash: "0xef2963d0267a1791cd9673021dcd8c180788fcdfe3a7b30fc4e48e05c9bf5c39",
    parentHash:
      "0x85d5fa526a9d2edd60eb40abc814c71b820ca625b13dd6bff385b15d8123fb77",
    stateRoot:
      "0xac08780d749b7e9412180f91ec78305e9d3c39fe72edc1eaac441e08fcda78c2",
    extrinsicsRoot:
      "0x822f02f574d4ae7a0c508c208f917354779ad8fb6b65b0c26652af5f5f301cf7",
    collator: "0x19A33caD2d311830550B41165d5faBf578347f3A",
    specVersion: 1701,
  };
};
