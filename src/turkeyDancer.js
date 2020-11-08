var TurkeyDancer = function(top, left, timeBetweenSteps) {
  debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('turkeyDancer');
  this.name = 'turkeyDancer';
};

TurkeyDancer.prototype = Object.create(Dancer.prototype);
TurkeyDancer.prototype.constructor = TurkeyDancer;

TurkeyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle(1000);
};

TurkeyDancer.prototype.lineUp = function () {
  this.setPosition(500, this.left);
};