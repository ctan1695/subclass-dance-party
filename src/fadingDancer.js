var FadingDancer = function(top, left, timeBetweenSteps) {
  debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fadingDancer"></span>');
};

FadingDancer.prototype = Object.create(Dancer.prototype);
FadingDancer.prototype.constructor = FadingDancer;

FadingDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};