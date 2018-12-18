(function(){
  var myObject = {
    myProp: 1 ,
    init: function init() {
      return this; // o this aponta para o objeto que ele está dentro, myObject, no caso
    }
  };

  console.log(myObject.init())
}());
