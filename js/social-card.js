/**
 * 社交名片引擎别名入口 (Social Card Engine Alias/Wrapper)
 * Points to js/social-card-engine.js for compatibility with both naming conventions.
 */

if (typeof require !== 'undefined') {
  module.exports = require('./social-card-engine.js');
} else if (typeof load === 'function' && typeof SocialCardEngine === 'undefined') {
  load('js/social-card-engine.js');
}

if (typeof SocialCardEngine !== 'undefined') {
  if (typeof window !== 'undefined') {
    window.SocialCard = SocialCardEngine;
    window.SocialCardEngine = SocialCardEngine;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.SocialCard = SocialCardEngine;
    globalThis.SocialCardEngine = SocialCardEngine;
  }
}
