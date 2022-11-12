import { useQuery } from "@tanstack/react-query";
import Image from "next/future/image";
import fetch from "node-fetch";
import { Fragment } from "react";

const externaImageLoader = ({ src }) => `${src}`;

export default function DisplayNFTImage({ args, uri, width, height }) {
	if (!uri || !args?.tokenId) return <Fragment />;
	let metadataPath = `${uri}${args?.tokenId}`;
	if (metadataPath.includes("{id}")) {
		metadataPath = metadataPath.replace("{id}", args?.tokenId);
	}
	const query = useQuery([uri, args?.tokenId], async () => {
		let data = await fetch(metadataPath).then((resp) => resp.json());
		let image = data?.image;
		if (data?.image?.includes("ipfs")) {
			image = `https://gateway.ipfs.io/ipfs/${image.replace("ipfs://", "")}`;
		}
		return image || null;
	});

	return (
		<Fragment>
			{query?.data && (
				<div>
					<Image
						loader={externaImageLoader}
						src={query?.data}
						width={width || 100}
						height={height || 100}
					/>
				</div>
			)}
		</Fragment>
	);
}
