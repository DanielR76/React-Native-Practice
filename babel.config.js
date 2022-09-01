module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./src"],
					extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
					alias: {
						"@apis": "./src/apis",
						"@components": "./src/components",
						"@store": "./src/context",
						"@hooks": "./src/hooks",
						"@navigation": "./src/navigation",
						"@screens": "./src/screens",
						"@utilities": "./src/utilities",
					},
				},
			],
		],
	};
};
