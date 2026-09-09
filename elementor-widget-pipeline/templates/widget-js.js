(function ($) {
  'use strict';

  var selector = '[data-your-widget]';
  var instances = [];

  function createInstance(root) {
    var cleanups = [];

    function addCleanup(fn) {
      if (typeof fn === 'function') cleanups.push(fn);
    }

    // Initialize scoped listeners, observers, timers, RAF or video here.
    // Every long-lived resource must register its teardown with addCleanup().

    return {
      root: root,
      destroy: function () {
        for (var i = cleanups.length - 1; i >= 0; i--) cleanups[i]();
        cleanups = [];
        delete root.dataset.yourWidgetInit;
      },
      addCleanup: addCleanup
    };
  }

  function pruneDisconnected() {
    for (var i = instances.length - 1; i >= 0; i--) {
      if (!instances[i].root.isConnected) {
        instances[i].destroy();
        instances.splice(i, 1);
      }
    }
  }

  function initInstance(root) {
    if (!root || root.dataset.yourWidgetInit === '1') return;
    root.dataset.yourWidgetInit = '1';
    instances.push(createInstance(root));
  }

  function initAll(context) {
    pruneDisconnected();
    var root = context || document;
    var els = [];

    if (root.nodeType === 1 && root.matches(selector)) {
      els.push(root);
    }

    var descendants = root.querySelectorAll ? root.querySelectorAll(selector) : [];
    for (var i = 0; i < descendants.length; i++) els.push(descendants[i]);

    for (var i = 0; i < els.length; i++) initInstance(els[i]);
  }

  function registerElementorHook() {
    if (!window.elementorFrontend || !window.elementorFrontend.hooks) return;

    window.elementorFrontend.hooks.addAction(
      'frontend/element_ready/your-widget-name.default',
      function ($scope) {
        var scope = $scope && $scope[0] ? $scope[0] : null;
        if (scope) initAll(scope);
      }
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAll(document);
    });
  } else {
    initAll(document);
  }

  if (window.elementorFrontend && window.elementorFrontend.hooks) {
    registerElementorHook();
  } else if ($) {
    $(window).on('elementor/frontend/init', registerElementorHook);
  }

  window.addEventListener('pagehide', function () {
    for (var i = instances.length - 1; i >= 0; i--) instances[i].destroy();
    instances = [];
  }, { once: true });
})(window.jQuery);
