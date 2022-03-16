//Given Elements.
let elements = [0.9, 2, 3, 4, 5, 6, 7, 8, 9];

//Assign smallest to iterate elements.
let smallest = elements[0];

//Use for loop to discover the length of the array.
for (let i = 1; i < elements.length; i++) {
  //Set up elements to discover the smallest number.
  if (elements[i] < smallest) {
    smallest = arr[i];
  }
}

//Return the smallest element
console.log("The smallest element is " + smallest);
