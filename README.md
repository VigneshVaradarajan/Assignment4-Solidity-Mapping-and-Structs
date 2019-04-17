# Assignment4-Solidity-Mapping-and-Structs
Blockchain Assignment 4

#Testing the contract
```
truffle test
```


# Testing all Functions (Set Instructor)

Function Test 1 -   Contract: Courses:setInstructor -  Ensures that an instructor is added without any error.
```
contract.setInstructor("0xfe771a17071804d9f6016026fbc28d82b3138faf", 22, "John", "Doe"); 

```

Function Test 2 -   Courses:getInstructors -  Ensures that the array of instructors are retrieved.
```
contract.setInstructor("0xfe771a17071804d9f6016026fbc28d82b3138faf", 22, "John", "Doe"); 
return contract.getInstructors(); 

Expect :

var arr = ["0xFe771a17071804D9F6016026fbc28D82B3138faf"];
assert.equal(result[0],arr[0]);

```
Function Test 3 -   Contract: Courses:getInstructor -  Ensures that an instructor is added and also retrieved.
```
contract.setInstructor("0xfe771a17071804d9f6016026fbc28d82b3138faf", 22, "John", "Doe"); 
return contract.getInstructor("0xfe771a17071804d9f6016026fbc28d82b3138faf"); 

Expect :

assert.equal(result[0].toNumber(),22);
assert.equal(result[1],"John");
assert.equal(result[2],"Doe");

```

Function Test 4 -   Contract: Courses:countInstructors -  Ensures that the correct of intructors are added.
```
//Adding two instructors
contract.setInstructor("0xfe771a17071804d9f6016026fbc28d82b3138faf", 22, "John", "Doe"); 
contract.setInstructor("0x4F7709cEBa1b1d5BfB7e47CbA38926217Ea4929f", 23, "Jane", "Doe"); 
return contract.countInstructors(); 

Expect :

assert.equal(result.toNumber(),2);

```

# Steps to reproduce test cases 1. Deploy Contract 2. Run test cases
```
$ truffle develop
$ truffle(develop)> migrate --reset

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'develop'
> Network id:      5777
> Block gas limit: 0x6691b7


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x61fecb5d92c979e641ca2a28b5d7b228ca9b05c5f6feb4675480016f1d41a138
   > Blocks: 0            Seconds: 0
   > contract address:    0x7980B23e6e07ab26C408a7ccB487A1170ed2c76B
   > block number:        6
   > block timestamp:     1555398945
   > account:             0x0D9f701D0850866965012AFFb465BA6c9eCAD649
   > balance:             99.96976414
   > gas used:            284908
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00569816 ETH


   Replacing 'Courses'
   -------------------
   > transaction hash:    0x80a875b44acc9d4d48f27c3bf96df56a123ec6a68cfc24f4df78ff1965d18614
   > Blocks: 0            Seconds: 0
   > contract address:    0x04E7Feb58593943B36068178165252C6c4Fb4c83
   > block number:        7
   > block timestamp:     1555398945
   > account:             0x0D9f701D0850866965012AFFb465BA6c9eCAD649
   > balance:             99.9565514
   > gas used:            660637
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01321274 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0189109 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.0189109 ETH

$ truffle(develop)> test
Using network 'develop'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: Courses:setInstructor
    √ should save instructor values (88ms)

  Contract: Courses:getInstructors
    √ should get instructor address (83ms)

  Contract: Courses:getInstructor
    √  get instructor values (122ms)

  Contract: Courses:countInstructors
    √  get instructor count (167ms)


  4 passing (584ms)
```

