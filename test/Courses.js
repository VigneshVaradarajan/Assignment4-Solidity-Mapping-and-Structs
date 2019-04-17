var Courses = artifacts.require('./Courses.sol');
contract('Courses:setInstructor', function(accounts) {
  it("should save instructor values", function(done) {
    var courses = Courses.deployed();
    courses.then(function(contract){
      return contract.setInstructor("0xfe771a17071804d9f6016026fbc28d82b3138faf", 22, "John", "Doe"); 
    }).then(function(result){
        
      done();
    })
  });
});

contract('Courses:getInstructors', function(accounts) {
    it("should get instructor address", function(done) {
      var courses = Courses.deployed();
      courses.then(function(contract){
        contract.setInstructor("0xfe771a17071804d9f6016026fbc28d82b3138faf", 22, "John", "Doe"); 
        return contract.getInstructors(); 
      }).then(function(result){
          var arr = ["0xFe771a17071804D9F6016026fbc28D82B3138faf"];
          assert.equal(result[0],arr[0]);
        done();
      })
    });
  });

  contract('Courses:getInstructor', function(accounts) {
    it(" get instructor values", function(done) {
      var courses = Courses.deployed();
      courses.then(function(contract){
        contract.setInstructor("0xfe771a17071804d9f6016026fbc28d82b3138faf", 22, "John", "Doe"); 
        return contract.getInstructor("0xfe771a17071804d9f6016026fbc28d82b3138faf"); 
      }).then(function(result){
          assert.equal(result[0].toNumber(),22);
          assert.equal(result[1],"John");
          assert.equal(result[2],"Doe");
        done();
      })
    });
  });

  contract('Courses:countInstructors', function(accounts) {
    it(" get instructor count", function(done) {
      var courses = Courses.deployed();
      courses.then(function(contract){
        contract.setInstructor("0xfe771a17071804d9f6016026fbc28d82b3138faf", 22, "John", "Doe"); 
        contract.setInstructor("0x4F7709cEBa1b1d5BfB7e47CbA38926217Ea4929f", 23, "Jane", "Doe"); 
        return contract.countInstructors(); 
      }).then(function(result){
          assert.equal(result.toNumber(),2);

        done();
      })
    });
  });

