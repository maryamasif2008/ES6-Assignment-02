                                                //find method
let arr = [10, 50, 60, 65, 44, 15];
let result = arr.find(function (array) {
    return array < 70;
})
console.log(result);

                                              //Findindex with array
let arr2 = [10, 80, 9, 3];
let result2 = arr2.findIndex(function (array1) {
    return array1 < 9;
})
console.log(result2);

                                              //with arrow function
let arr3 = [10, 70, 40, 7, 1];
let result3 = arr3.find((array3) => array3 < 40 && array3 < 10);
console.log(result3);

                                              //function into function
let arr4 = [20, 60, 6, 14]
function custom(array4) {
    return array4 < 14;
}
let result4 = arr4.find(custom);
console.log(result4);

                                               //findindex with object
let obj = [
    { id: 10, name: "John" },
    { id: 8, name: "Ellen" },
    { id: 50, name: "John" },
    { id: 1, name: "Petter" },
    { id: 100, name: "Jassie" },
  ]
  let result5 = obj.find(function (object) {
      return object.name > "John";
  })
  console.log(result5);
  
  //Compare arrow function are simplest another functions.

                                                //Anonymous function
  let arr5 = [10, 70, 40, 7, 1];
  let test = function () {
      return 20;
  }
  let arr6 = [20, 60, 30, 5, 3];
  let test2 = () => {
      return 70;
  }
  console.log(test());
  console.log(test2());
  
                                               //Complex arrow function
  let arr7 = [10, 70, 40, 7, 1];
  let test3 = arr7.map((array4) => array4 * 2)
  console.log(test3);
  
                                               //this arrow function
  let obj2 = {
      name: "John",
      age: 30,
      test1: function () {
          console.log(this);
      },
      test2: () => {
          console.log(this);
      }
  }
  obj2.test1();
  obj2.test2();
  
                                              //Classes
  class Animals {
      name = "Tiger"
      constructor(){
          console.log(this.name);
          
      }
      getAnimals(){
          return "Lion"
      }
  }
  let Animals1 = new Animals();
  console.log(f1.getAnimals());