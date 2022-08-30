// Frontpage queries
export const getLatestTransfers = () => {
  return Array(10).fill({
    id: Math.floor(Math.random() * 10000),
    timestamp: Math.floor(new Date().getTime()) - 1000,
  });
};
export const getLatestBlocks = () => {
  return Array(10).fill({
    height: Math.floor(Math.random() * 10000),
    timestamp: Math.floor(new Date().getTime()) - 1000,
  });
};

export const getLatestChainData = () => {
  return [
    {
      name: "Transfers",
      stat: Math.floor(Math.random() * 10000),
    },
    {
      name: "Finalized Blocks",
      stat: Math.floor(Math.random() * 10000),
    },
    {
      name: "Holders",
      stat: Math.floor(Math.random() * 10000),
    },
  ];
};
