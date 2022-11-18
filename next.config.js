const removeImports = require("next-remove-imports")();

module.exports = removeImports({
	reactStrictMode: true,
	swcMinify: true,
	experimental: { images: { allowFutureImage: true }, esmExternals: true },
});