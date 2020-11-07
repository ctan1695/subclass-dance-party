var FadingDancer = function(top, left, timeBetweenSteps) {
  debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fadingDancer');
  this.$node.removeClass('dancer');
};

FadingDancer.prototype = Object.create(Dancer.prototype);
FadingDancer.prototype.constructor = FadingDancer;

FadingDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};

FadingDancer.prototype.lineUp = function () {
  this.setPosition(500, this.left);
};