export default function Search() {
  return (
    <div className="bg-white border-b border-b-gray-200">
      <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-300 rounded-md flex flex-row justify-between">
          <div className="w-full">
            <input
              type="text"
              className="block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
              placeholder="Search by Block / Extrinsic / Account / Token"
            />
          </div>
          <div>
            <button
              type="button"
              className="inline-flex items-center rounded border border-transparent h-12 bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
