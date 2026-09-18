/**
 * Scenario Simulator Engine Forwarder
 * Points to SimulatorEngine (ScenarioSimulatorEngine)
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['./simulator-engine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = require('./simulator-engine');
  } else {
    // Browser or JSC global
    if (typeof ScenarioSimulatorEngine === 'undefined' && typeof load === 'function') {
      try {
        load('js/simulator-engine.js');
      } catch (e) {}
    }
    if (typeof ScenarioSimulatorEngine !== 'undefined') {
      root.ScenarioSimulatorEngine = ScenarioSimulatorEngine;
    }
  }
}(typeof self !== 'undefined' ? self : this, function (SimulatorEngine) {
  return SimulatorEngine || (typeof ScenarioSimulatorEngine !== 'undefined' ? ScenarioSimulatorEngine : null);
}));
