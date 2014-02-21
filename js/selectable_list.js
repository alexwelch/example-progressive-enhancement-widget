(function($){
  $.SelectableList = function(el, options){
    var base = this;

    base.$el = $(el);
    base.el = el;
    base.options = options;

    base.init = function(){
      base.toggleSubmit(false);
      base.bindEvents();
    };

    base.bindEvents = function() {
      base.$el.on('change', base.options.checkboxSelector, base.handleCheck);
    };

    base.handleCheck = function(e) {
      var count = base.getSelectedItemsCount()
      base.updateTitle(count);
      base.toggleSubmit(count);
    };

    base.toggleSubmit = function(enabled) {
      base.options.$submitElement.prop('disabled', !enabled);
    };

    base.updateTitle = function(count) {
      base.options.$titleElement.html(count + ' members selected')
    };

    base.getSelectedItemsCount = function() {
      return base.options.$checkboxElements.filter(':checked').length;
    };
  };
})(jQuery);
