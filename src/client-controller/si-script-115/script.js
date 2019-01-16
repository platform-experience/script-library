function TestController(spUtil) {
  var c = this;
  c.getWidget = getWidget;

  c.$onInit = function() {
    getWidget();
  };

  function getWidget() {
    return spUtil.get('widget-cool-clock').then(function(response) {
      c.exampleWidget = response;
    });
  }
}
