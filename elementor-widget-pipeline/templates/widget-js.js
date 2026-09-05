(function ($) {
  'use strict';

  var selector = '[data-your-widget]';

  function initInstance(root) {
    if (!root || root.dataset.yourWidgetInit === '1') return;
    root.dataset.yourWidgetInit = '1';
  }

  function initAll(context) {
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
})(window.jQuery);
