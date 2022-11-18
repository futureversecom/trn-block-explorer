const removeImports = require("next-remove-imports")();

// /** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: { images: { allowFutureImage: true }, esmExternals: true },
};

module.exports = removeImports({
	...nextConfig,
	experimental: { esmExternals: true },
});