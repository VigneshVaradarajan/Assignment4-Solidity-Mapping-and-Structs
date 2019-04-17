const Migrations = artifacts.require("Migrations");
var Courses = artifacts.require('./Courses.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Courses);
};
