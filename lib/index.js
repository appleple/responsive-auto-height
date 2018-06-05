'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('./util');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResponsiveAutoHeight = function () {
  function ResponsiveAutoHeight(selector, options) {
    var _this = this;

    _classCallCheck(this, ResponsiveAutoHeight);

    this.selector = selector;
    this.elements = document.querySelectorAll(selector);
    this.options = options;
    window.addEventListener('resize', function () {
      _this.run();
    });
    this.run();
  }

  _createClass(ResponsiveAutoHeight, [{
    key: 'recalc',
    value: function recalc() {
      this.elements = document.querySelectorAll(this.selector);
      this.run();
    }
  }, {
    key: 'makeGroups',
    value: function makeGroups(elements) {
      var group = [];
      [].forEach.call(elements, function (element) {
        element.style.height = '1px';
        element.style.overflow = 'hidden';
      });
      var idx = 0;
      var height = (0, _util.getOffset)(elements[0]).top;
      group[0] = [];
      [].forEach.call(elements, function (element) {
        if ((0, _util.getOffset)(element).top !== height) {
          height = (0, _util.getOffset)(element).top;
          idx += 1;
          group[idx] = [];
        }
        group[idx].push(element);
      });
      [].forEach.call(elements, function (element) {
        element.style.height = '';
        element.style.overflow = '';
      });
      return group;
    }
  }, {
    key: 'autoHeight',
    value: function autoHeight(group) {
      var heights = group.map(function (element) {
        var computedStyle = getComputedStyle(element);
        var boxSizing = computedStyle.boxSizing;
        if (boxSizing === 'border-box') {
          return element.offsetHeight;
        }
        return element.offsetHeight - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom);
      });
      var maxHeight = Math.max.apply(Math, _toConsumableArray(heights));
      group.forEach(function (element) {
        element.style.height = maxHeight + 'px';
      });
    }
  }, {
    key: 'run',
    value: function run() {
      var _this2 = this;

      var elements = this.elements;

      var groups = this.makeGroups(elements);
      groups.forEach(function (group) {
        _this2.autoHeight(group);
      });
    }
  }]);

  return ResponsiveAutoHeight;
}();

exports.default = ResponsiveAutoHeight;
module.exports = exports['default'];