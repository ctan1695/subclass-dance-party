var SlidingDancer = function(top, left, timeBetweenSteps) {
  debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="slidingDancer"></span>');
};

SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;

SlidingDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.slideToggle();
};