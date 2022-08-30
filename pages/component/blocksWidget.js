export default function BlocksWidget() {
  return (
    <div>
      <div className="flex flex-row justify-between py-3">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Blocks
          </h3>
        </div>
        <div>
          <button>View All</button>
        </div>
      </div>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 space-y-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
          <BlockItem
            key={key}
            height={5000}
            extrinsics={25}
            events={30}
            timestamp={34000}
          />
        ))}
      </div>
    </div>
  );
}

const BlockItem = ({ height, extrinsics, events, timestamp }) => {
  return (
    <div className="border-b-gray-100 block">
      <div className="flex flex-row justify-between">
        <div className="font-bold">Block# {height}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <span className="text-gray-500">Includes</span> {extrinsics}
          <span className="text-gray-500">Events</span> {events}
        </div>
        <div>{timestamp}</div>
      </div>
    </div>
  );
};
