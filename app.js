console.log('meow');

//variable declarations

var bgItem = 0;
var temp = [];
var z;
var cells = document.querySelectorAll('.exp-div');
var values = document.querySelectorAll('.value-div');
var cal = document.querySelectorAll('.calci');
var t = 0;
var g;
var sum = 0;
var save;
var y = 0;

//add budget value
document.querySelector('.add-btn').addEventListener('click', function () {
  bgItem = document.querySelector('#bgtNum').value;
});

//add expense list
document.querySelector('#btn').addEventListener('click', function () {
  z = document.querySelector('#set');
  temp.push(z.value);
});

//enter values
document.querySelector('#btn-1').addEventListener('click', function () {
  temp.forEach(match);
});

//solution
function match(item) {
  if (item === 'grocery') {
    g = (bgItem / 100) * 30;
  } else if (item === 'holiday') {
    g = (bgItem / 100) * 20;
  } else if (item === 'rent') {
    g = (bgItem / 100) * 20;
  } else if (item === 'bills') {
    g = (bgItem / 100) * 10;
  } else if (item === 'medicine') {
    g = (bgItem / 100) * 5;
  } else if (item === 'education') {
    g = (bgItem / 100) * 15;
  }

  display(g, item);
}

//display values on UI
function display(g, item) {
  cells[t].textContent = item;
  values[t].textContent = g + ' Rs ';
  t++;
  sum += g;
  save = bgItem - sum;

  cal[y].textContent = bgItem + ' Rs ';
  cal[y + 1].textContent = sum + ' Rs ';
  cal[y + 2].textContent = save + ' Rs ';
}

// scrap

// var c = orig.includes(item);
// console.log(c);
// if (c === true) {

// data controller

// var dataController = (function () {
//   // var x = 5;
//   // var add = function (a) {
//   //   return a + x;
//   // };
//   // return {
//   //   test: function (b) {
//   //     return 'i m called';
//   //   }
//   // };
// })();

// // UI controller

// var UIController = (function () {
//   return {
//     bgtInput: function () {
//       var temp = [];
//       var y = document.querySelector('.description');

//       return {
//         bgtValue: document.querySelector('#bgtNum').value
//          expValue: temp.push(y.value)
//       };

//       //console.log(temp);

//     }
//   };
// })();

// // event controller

// var eventController = (function (dCtrl, UIctrl) {
//   var bgtItem = function () {
//     var z = UIctrl.bgtInput();

//     console.log(z);
//   };

//   // var expItem = function () {
//   //   var a = UIctrl.bgtInput();
//   //   console.log(a);
//   // };

//   document.querySelector('.add-btn').addEventListener('click', bgtItem);
//   document.querySelector('#btn').addEventListener('click', bgtItem);

//   // var z = dCtrl.test();
//   // return {
//   //   publicTest: function () {
//   //     console.log(z);
//   //   }
//   // };
// })(dataController, UIController);

// // var z = document.querySelectorAll('.description');
// // console.log(z);
// // document.querySelector('.add-btn').addEventListener('click', input);
