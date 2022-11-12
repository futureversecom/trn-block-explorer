import { useQuery } from "@tanstack/react-query";
import Image from "next/future/image";
import fetch from "node-fetch";
import { Fragment, useState } from "react";

const externaImageLoader = ({ src }) => `${src}`;

const blurUrl = `data:image/webp;base64,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`;
const fallBack = `data:image/jpeg;base64,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`;
export default function DisplayNFTImage({ args, uri, width, height }) {
	const [src, setSrc] = useState(undefined);
	let metadataPath = `${uri}${args?.tokenId}`;
	if (metadataPath.includes("{id}")) {
		metadataPath = metadataPath.replace("{id}", args?.tokenId);
	}
	const query = useQuery(
		[uri, args?.tokenId],
		() => {
			return fetch(metadataPath)
				.then((resp) => resp.json())
				.then((data) => {
					let image = data?.image;
					if (data?.image?.includes("ipfs")) {
						image = `https://gateway.ipfs.io/ipfs/${image.replace(
							"ipfs://",
							""
						)}`;
					}

					setSrc(image);
					return true;
				});
		},
		{ enabled: uri && args?.tokenId ? true : false }
	);

	if (!uri || !args?.tokenId) return <Fragment />;

	return (
		<Fragment>
			{query?.data && (
				<div>
					<Image
						loader={externaImageLoader}
						src={src}
						alt="NFT Image"
						placeholder="blur"
						blurDataURL={blurUrl}
						layout="responsive"
						onError={() => {
							setSrc(fallBack);
						}}
						width={width || 100}
						height={height || 100}
					/>
				</div>
			)}
		</Fragment>
	);
}
