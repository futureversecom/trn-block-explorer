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
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div>Hello World!</div>
      </div>
    </div>
  );
}