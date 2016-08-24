/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-getowner-polyfill',

  init: function() {
    this._super && this._super.init && this._super.init.apply(this, arguments);

    this.options = this.options || {};
    this.options.babel = this.options.babel || {};
    this.options.babel.loose = true;
  }
};
