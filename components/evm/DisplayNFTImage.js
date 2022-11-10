import { useQuery } from "@tanstack/react-query";
import Image from "next/future/image";
import fetch from "node-fetch";
import { Fragment } from "react";

const externaImageLoader = ({ src }) => `${src}`;

export default function DisplayNFTImage({ args, uri }) {
	const metadataPath = `${uri}${args?.tokenId}`;
	const query = useQuery([metadataPath], async () => {
		const data = await fetch(metadataPath).then((resp) => resp.json());
		return data?.image || null;
	});

	return (
		<Fragment>
			{query?.data && (
				<div className="border">
					<Image
						loader={externaImageLoader}
						src={query?.data}
						width={100}
						height={100}
					/>
				</div>
			)}
		</Fragment>
	);
}
