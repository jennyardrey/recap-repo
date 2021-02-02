function RecordLabel() {
    this.bands = [];
  }
RecordLabel.prototype.addBand = function addband(band) {
    bands.push(band);
};

// Below, build a plain (ES5) object that fits the following specifications: 
// 1. Describes a band
// 2. Contains properties that describe the bands name, the genre of music the band make, and the 
// number of members.

// write your code here please!

// Now, use ES6 syntax to refactor your plain object and make a reusable prototype of Band, that will allow us to create instances of different bands with the same structure. 
// Add a method to your class that adds an album name to a new property on the class called albums. 
// run - npm test toClass.test.js - and make sure they all pass.


module.exports = { RecordLabel, Band };