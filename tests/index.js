define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

require('events/tests/legacy-compat');

// we do this to easily wrap each file in a mocha test
// and also have browserify be able to statically analyze this file
var orig_require = require;
var require = function(file) {
    test(file, function() {
        orig_require(file);
    });
}

require('events/tests/add-listeners.js');
require('events/tests/check-listener-leaks.js');
require('events/tests/listener-count.js');
require('events/tests/listeners-side-effects.js');
require('events/tests/listeners.js');
require('events/tests/max-listeners.js');
require('events/tests/modify-in-emit.js');
require('events/tests/num-args.js');
require('events/tests/once.js');
require('events/tests/set-max-listeners-side-effects.js');
require('events/tests/subclass.js');
require('events/tests/remove-all-listeners.js');
require('events/tests/remove-listeners.js');

return module.exports;});
