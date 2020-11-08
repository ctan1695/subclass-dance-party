describe('pieDancer', function() {

  var pieDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();

    pieDancer = new PieDancer (10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pieDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should not call a step function that makes its node slide toggle', function() {
    sinon.spy(pieDancer.$node, 'slideToggle');
    pieDancer.step();
    expect(pieDancer.$node.slideToggle.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pieDancer, 'step');
      expect(pieDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pieDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pieDancer.step.callCount).to.be.equal(2);
    });
  });
});
