
function arrUniqFirstMethod(_array){
  let _result=[];
  _array.forEach(
    function uniq(currentValue, item, _array) {
      if (_result.some(function(item) { return item === currentValue;})===false) {
        _result.push(currentValue);
      }
          });
  return _result;
}

function arrUniqSecondMethod(_array){
  let _result=[];
  _array.forEach(
    function uniq(currentValue, item, _array) {
      if (_array.indexOf(currentValue) === item) {
        _result.push(currentValue);
      }
          });
  return _result;
}

//From inet - not my

Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}



let Text = prompt ("Enter elements of array: ");
let FirstArray = Text.split(',');

console.log(FirstArray);

let FirstMethod = arrUniqFirstMethod(FirstArray);
let SecondMethod = arrUniqSecondMethod(FirstArray);
let ThirdMethod = FirstArray.unique();

console.log(FirstMethod);
console.log(SecondMethod);
console.log(ThirdMethod);

if(FirstMethod.join('') === SecondMethod.join('')){
  if (FirstMethod.join('') === ThirdMethod.join('')) {
    console.log("Arrays are equal!");
  } else {
    console.log("Arrays First and Third are not equal! This functions are different outputs!");
  }
} else{
  console.log("Arrays First and Second are not equal! This functions are different outputs!");
};


alarm("Open console for more information!");
