module.exports = {
	output: 'export',
	webpack: (config) => {
		config.resolve.alias.canvas = false;

		return config;
	},
};
