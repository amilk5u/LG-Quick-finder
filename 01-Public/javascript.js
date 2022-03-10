// filter 
let _filter = {
  Cat: ["WD", "WM"],
  size: [8, 9, 10, 10.5, 12],
  color: ["white", "graphite", "black steel"],
  intent: ["Price","Features"],
};

let _filter1 = {
   Cat: ["WD"],
   size: [8, 12],
   color: ["white", "black steel"],
   intent: ["Price"],
 };
 

/* 
   1. input 클릭시 input value 를 가져와서 filter에 해당하는 부분에 push 해준다
   2. 다음스탭도 동일하게 push 해준다
   3. 비교에서는 value 를 반복 후 제품들과 비교하여 true 일 때 반환한다
*/

console.log(_filter1.Cat);



// product
const washingMachine = [
  {
    product: "product01",
    Cat: "WM",
    size: 8,
    color: "graphite",
    intent: "Price",
  },
  {
    product: "product02",
    Cat: "WD",
    size: 9,
    color: "black steel",
	intent: "Features",
  },
  {
    product: "product03",
    Cat: "WM",
    size: 10,
    color: "white",
	intent: "Price",
  },
  {
    product: "product04",
    Cat: "WD",
    size: 10.5,
    color: "black steel",
	intent: "Price",
  },
  {
    product: "product05",
    Cat: "WM",
    size: 12,
    color: "graphite",
	intent: "Features"
  },
  {
    product: "product06",
    Cat: "WD",
    size: 12,
    color: "white",
	intent: "Features"
  },
  {
    product: "product07",
    Cat: "WM",
    size: 8,
    color: "black steel",
	intent: "Price"
  },
  {
    product: "product08",
    Cat: "WD",
    size: 9,
    color: "graphite",
	intent: "Features"
  }
];
// console.log(washingMachine);

const $wrap = $("#wrap"),
      $view = $wrap.find(".view");
const test2 = washingMachine.map((item) => {
   if (item.Cat === _filter1.Cat) {
      return item
   }



   
 /*  if (item.Cat === _filter1.Cat &&  item.intent === _filter1.intent ) {
  } */
});




console.log(test2);

/* // 뿌리기
test2.forEach(function (item, index) {
  $view.append(
    `<div class="box"> 
		<span>${item.product}</span>
		<span>${item.Cat}</span>
      <span> ${item.size}</span>
		<span>${item.color}</span> 
		<span>${item.intent}</span> 
	</div>
	`
  );
}); */
