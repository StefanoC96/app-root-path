'use strict';

module.exports = function(dirname: any) {
	var path = require('path');
	var resolve = require('./resolve.js');
	var appRootPath = resolve(dirname);

	var publicInterface = {
		resolve: function(pathToModule: any) {
			return path.join(appRootPath, pathToModule);
		},

		require: function(pathToModule: any) {
			return require(publicInterface.resolve(pathToModule));
		},

		toString: function() {
			return appRootPath;
		},

		setPath: function(explicitlySetPath: any) {
			appRootPath = path.resolve(explicitlySetPath);
			publicInterface.path = appRootPath;
		},

		path: appRootPath
	};

	return publicInterface;
};