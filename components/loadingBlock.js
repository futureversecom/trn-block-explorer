export default function LoadingBlock({ title }) {
  return (
    <div className=" bg-white px-4 py-3 sm:px-6 border border-gray-100 rounded-md shadow-md text-center">
      <span className="font-semibold">Retrieving {title}...</span>
    </div>
  );
}
