/* Every object has a constructor property,  and that references 
 * the function that was used to create that object
 */

/* Practicing the fundamentals for OOP using Javascript to get a better
 * understanding of what I am doing, and create better programming habits.
 */

/* Functions are objects in JavaScript. */
/* Objects are constructed mainly using the Factory Function method
 * or the Constructor Method. */

/* They are both perferred by different people; with the Constructor apporach
 * being favoured by devs coming from languages like Java. The Factory functions
 * are also used as forgetting to place new before creating an object will result in
 * errors. But is easily avoided in todays technology. */

/* Members in objects are within two groups, properties and methods. All
 * functions defined in a object are called methods, and the values are
 * properties.  */

/* Factory Function */
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('Factory Circle Radius', radius);
    },
  };
}

const circle = createCircle(4);
circle.draw;

/* Constructor Function */
function Circle(radius) {
  /* By default 'this' points to the global object.
   * The global object is the Window object */
  console.log('this', this); // For example
  this.radius = radius;
  this.draw = function () {
    console.log('Constructor Circle Radius', radius);
  }
}

/* Using the new operator will cause a new empty object
 * to be created. It will then have 'this' point to the new
 * object, and finally return that object from the constructor 
 * function. */
const anotherCircle = new Circle(2);