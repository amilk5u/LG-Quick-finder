const $wrap = $('#wrap')
let catInfo,sizeInfo,colorInfo,intentInfo;

$('.submit_btn').on('click', function () {
   var catInfo = $("input[name='testInput']:checked").val(); 
   var sizeInfo = $("input[name='testInput']:checked").val(); 
   var colorInfo = $("input[name='testInput']:checked").val(); 
   var intentInfo = $("input[name='testInput']:checked").val(); 
})

// filter
const insertOption = {
  Cat: ['WD', 'WM'],
  size: [8, 9, 10, 10.5, 12],
  color: ['white', 'graphite', 'black steel'],
  intent: ['Price', 'Features'],
}

// product
const washingMachine = [
  {
    product: 'product01',
    Cat: 'WM',
    size: 8,
    color: 'graphite',
    intent: 'Price',
  },
  {
    product: 'product02',
    Cat: 'WD',
    size: 9,
    color: 'black steel',
    intent: 'Price',
  },
  {
    product: 'product03',
    Cat: 'WM',
    size: 10,
    color: 'white',
    intent: 'Price',
  },
  {
    product: 'product04',
    Cat: 'WD',
    size: 10.5,
    color: 'black steel',
    intent: 'Price',
  },
  {
    product: 'product05',
    Cat: 'WM',
    size: 12,
    color: 'graphite',
    intent: 'Price',
  },
  {
    product: 'product06',
    Cat: 'WD',
    size: 12,
    color: 'white',
    intent: 'Features',
  },
  {
    product: 'product07',
    Cat: 'WM',
    size: 8,
    color: 'black steel',
    intent: 'Price',
  },
  {
    product: 'product08',
    Cat: 'WD',
    size: 9,
    color: 'graphite',
    intent: 'Features',
  },
]
// console.log(washingMachine)

/* 
    1. push 해서 배열,객체화 한다
    2. value 를 반복하여 원하는 데이터가 1개라도 있을 시 true를 반환한다
    3. 

*/

const selectMachine = washingMachine.filter((item) => {
  if (item.Cat === cat && item.intent === intent) {
    return item.size === size || item.color === 'back steel'
  }
})
console.log(selectMachine)

// 뿌리기
selectMachine.forEach(function (item, index) {
  $wrap.append(
    `<div class="box"> 
		<span>${item.product}</span>
		<span>${item.Cat}</span>
      <span> ${item.size}</span>
		<span>${item.color}</span> 
		<span>${item.intent}</span> 
	</div>
	`,
  )
})
