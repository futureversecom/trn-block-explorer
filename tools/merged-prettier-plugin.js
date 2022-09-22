const tailwind = require("prettier-plugin-tailwindcss");
const sortImports = require("@trivago/prettier-plugin-sort-imports");

const combinedFormatter = {
	...tailwind,
	parsers: {
		...tailwind.parsers,
		...Object.keys(sortImports.parsers).reduce((acc, key) => {
			acc[key] = {
				...tailwind.parsers[key],
				preprocess(code, options) {
					return sortImports.parsers[key].preprocess(code, options);
				},
			};
			return acc;
		}, {}),
	},
};

module.exports = combinedFormatter;
