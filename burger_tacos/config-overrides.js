const path = require('path');

module.exports = function override(config, env) {
	config['resolve'] = {
		alias: {
			Assets: path.resolve(__dirname, 'src/assets'),
			HeaderComponents: path.resolve(__dirname, 'src/components/Header'),
			BodyComponents: path.resolve(__dirname, 'src/components/Body'),
			FooterComponents: path.resolve(__dirname, 'src/components/Footer'),
			BodyStyle: path.resolve(__dirname, 'src/styles/BodyStyle'),
			HeaderStyle: path.resolve(__dirname, 'src/styles/HeaderStyle'),
			FooterStyle: path.resolve(__dirname, 'src/styles/FooterStyle'),
		},
		extensions: ['.js'],
	};

	return config;
};
