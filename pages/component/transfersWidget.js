export default function TransfersWidget() {
  return (
    <div>
      <div className="flex flex-row justify-between py-3">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Transfers
          </h3>
        </div>
        <div>
          <button>View All</button>
        </div>
      </div>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 space-y-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
          <TransferItem
            key={key}
            from={"0xbE4c83Bf1dF0748804B2A92c5Bb81Ab6cCc0B94F"}
            to={"0xF3918988Eb3Ce66527E2a1a4D42C303915cE28CE"}
            id={`1762842-${item}`}
            timestamp={"123"}
            amount={"1234"}
            status={true}
          />
        ))}
      </div>
    </div>
  );
}

const TransferItem = ({ from, to, id, timestamp, amount, status }) => {
  return (
    <div className="border-b-gray-100 block">
      <div className="flex flex-row justify-between">
        <div className="font-bold">Extrinsic# {id}</div>
        <div>{amount} ROOT</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <span className="text-gray-500">From</span> {from}{" "}
          <span className="text-gray-500">to</span> {to}
        </div>
        <div>{timestamp}</div>
      </div>
    </div>
  );
};
