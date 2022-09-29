export default function DummyListItem(numOfItems = 0) {
    const dummyArray = Array(numOfItems).fill();    
	return (
        dummyArray?.map((item, idx) => (
            <div key={idx} className="animate-pulse block py-3 space-y-2">
                <div className="flex flex-row justify-between my-1.5">
                    <div className="space-y-3 w-full">
                        <div className="grid grid-cols-8 gap-x-10 gap-y-2">
                            <div className="h-3 bg-gray-400 rounded col-span-2"></div>
                        </div>
                        <div className="grid grid-cols-8 gap-x-10 gap-y-2">
                            <div className="h-2 bg-gray-400 rounded col-span-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        ))
	);
}
