describe('#findDistribution', function() {
  it('returns the breakpoints distributed over the range', function() {
    var output = findDistribution(100);
    expect(output).to.eql([1, 4, 8, 9,10, 20, 24, 50, 68, 77, 81, 85, 89, 93, 97, 100]);
  });
});

describe('#distribute', function() {
  it('returns a function', function() {
    var distributor = distribute(2);
    expect(distributor).to.be.a('Function');
  });
});

describe('#distributor', function() {
  it('multiplies the input w. the predefined number', function() {
    var distributor = distribute(2);
    expect(distributor(4)).to.equal(8);
  });
});