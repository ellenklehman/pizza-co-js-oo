describe("Pizza", function() {
  describe("slices", function() {
    it("determines the number of pizza slices", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 10;
      expect(testPizza.slices()).to.equal(12);
    });
  });

  describe("cost", function() {
    it("determines the cost of the pizza based on size", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 10;
      expect(testPizza.cost()).to.equal(12.50);
    });
  });
});
