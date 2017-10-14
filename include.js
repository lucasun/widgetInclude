'use strict';

// Node
var fs = require('fs');
var path = require('path');
/**
 * Attempts to find the project root by finding the nearest package.json file.
 * @private
 * @param {String} currentPath - Path of the file doing the including.
 * @return {String?}
 */
function findProjectRoot() {
  var result = undefined;
  var baseUrl = path.resolve('./src/widgets');
  
  result = baseUrl;
  return result;
}

/**
 * Creates the include function wrapper around <code>require</code> based on the path of the calling file and not the
 * install location of the module.
 * @param {String} callerPath - Path of the calling file.
 * @return {Function}
 * @example
 *
 * var include = require('include')(__dirname);
 *
 * var projectFn = include('src/method');
 */
function createInclude(callerPath) {
    var projectRoot = findProjectRoot();
    var filePath = path.resolve(projectRoot,callerPath);
    return fs.readFileSync(filePath);
}

module.exports = function(callerPath){
    var exportsString = "module.exports = ";
	return exportsString + createInclude(callerPath)  + ";";
};
