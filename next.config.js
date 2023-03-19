const removeImports = require("next-remove-imports")();

module.exports = removeImports({
	swcMinify: true,
	reactStrictMode: true,
	experimental: { images: { allowFutureImage: true }, esmExternals: true },
	async redirects() {
		return [
			{
				source: "/transfers",
				destination: "/",
				permanent: true,
			},
			{
				source: "/transfer/:path*",
				destination: "/",
				permanent: true,
			},
			{
				source: "/account/:path*",
				destination: "/address/:path*",
				permanent: true,
			},
		];
	},
});
