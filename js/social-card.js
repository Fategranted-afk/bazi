/**
 * 社交名片引擎别名入口 (Social Card Engine Alias/Wrapper)
 * Points to js/social-card-engine.js for compatibility with both naming conventions.
 */

if (typeof require !== 'undefined') {
  module.exports = require('./social-card-engine.js');
}
