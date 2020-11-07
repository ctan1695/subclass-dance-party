var TurkeyDancer = function(top, left, timeBetweenSteps) {
  debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('turkeyDancer');
  this.$node.removeClass('dancer');
};

TurkeyDancer.prototype = Object.create(Dancer.prototype);
TurkeyDancer.prototype.constructor = TurkeyDancer;

TurkeyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};

TurkeyDancer.prototype.lineUp = function () {
  this.setPosition(500, this.left);
};