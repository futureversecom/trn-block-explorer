export default function ContainerLayout({ children }) {
	return (
		<div className="overflow-hidden lg:pb-32 xl:pb-36">
			<div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8">
				{children}
			</div>
		</div>
	);
}
