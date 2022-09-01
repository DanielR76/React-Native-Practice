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
						"@context": "./src/context",
						"@hooks": "./src/hooks",
						"@navigation": "./src/navigation",
						"@screen": "./src/screen",
						"@utilities": "./src/utilities",
					},
				},
			],
		],
	};
};
