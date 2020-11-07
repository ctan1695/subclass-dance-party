var CasseroleDancer = function(top, left, timeBetweenSteps) {
  //debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('casseroleDancer');
  this.$node.removeClass('dancer');
};

CasseroleDancer.prototype = Object.create(Dancer.prototype);
CasseroleDancer.prototype.constructor = CasseroleDancer;

CasseroleDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.slideToggle();
};

CasseroleDancer.prototype.lineUp = function () {
  this.setPosition(this.top, 1000);
};