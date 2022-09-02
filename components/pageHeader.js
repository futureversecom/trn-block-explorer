export default function PageHeader({ title, icon }) {
  return (
    
    <div className="flex py-3">
      {icon}
      <h3 className="text-md font-medium leading-6 text-gray-900">{title}</h3>
    </div>
  );
}
