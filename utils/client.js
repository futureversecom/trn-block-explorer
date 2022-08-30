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
