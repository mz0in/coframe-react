var coframeInit = require("./src/react-coframe");

function coframe() {
  var params = Array.prototype.slice.call(arguments);
  if (!window.coframe) {
    throw new Error("Clarity is not initialized");
  }

  window.clarity.apply(undefined, params);
}

function init(id) {
  coframeInit(id);
}

function logCoframeConversion(name) {
  coframe("logConversion", name);
}


module.exports = {
  coframe: {
    init,
    logCoframeConversion
  },
};
