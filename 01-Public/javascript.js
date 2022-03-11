const $wrap = $('#wrap')
// Filter Example
const insertOption = {
  Category: ['WD', 'WM'],
  Capacity: [8, 9, 10, 10.5, 12],
  Size: [500, 600, 700],
  Color: ['white', 'graphite', 'black steel'],
  Intent: ['Price', 'Features'],
}
// Filter1
const insertOption1 = {
  Category: [],
  Capacity: [],
  Size: [],
  Color: [],
  Intent: [],
}


$('.submit_btn').on('click', function () {
  $("input[name='Capacity']:checked").each(function () {
    insertOption1.Capacity.push($(this).val())
  })
  $("input[name='Category']:checked").each(function () {
    insertOption1.Category.push($(this).val())
  })
  $("input[name='Size']:checked").each(function () {
    insertOption1.Size.push($(this).val())
  })
  $("input[name='Color']:checked").each(function () {
    insertOption1.Color.push($(this).val())
  })
  $("input[name='Intent']:checked").each(function () {
    insertOption1.Intent.push($(this).val())
  })
  console.log(insertOption1)
})

// Product
const washingMachine = [
  {
    Product: 'product01',
    Category: 'WM',
    Capacity: 8,
    Size: 500,
    Color: 'graphite',
    Intent: 'Price',
  },
  {
    Product: 'product02',
    Category: 'WD',
    Capacity: 9,
    Size: 600,
    Color: 'black steel',
    Intent: 'Price',
  },
  {
    Product: 'product03',
    Category: 'WM',
    Capacity: 10,
    Size: 700,
    Color: 'white',
    Intent: 'Price',
  },
  {
    Product: 'product04',
    Category: 'WD',
    Capacity: 10.5,
    Size: 500,
    Color: 'black steel',
    Intent: 'Price',
  },
  {
    Product: 'product05',
    Category: 'WM',
    Capacity: 12,
    Size: 500,
    Color: 'graphite',
    Intent: 'Price',
  },
  {
    Product: 'product06',
    Category: 'WD',
    Capacity: 8,
    Size: 700,
    Color: 'white',
    Intent: 'Features',
  },
  {
    Product: 'product07',
    Category: 'WM',
    Capacity: 9,
    Size: 600,
    Color: 'black steel',
    Intent: 'Price',
  },
  {
    Product: 'product08',
    Category: 'WD',
    Capacity: 10.5,
    Size: 600,
    Color: 'graphite',
    Intent: 'Features',
  },
]
// console.log(washingMachine)


/* for ( let key in insertOption ) {
   console.log(insertOption[key])
} */

const washSelectMachine = washingMachine.filter((item) => {

   /* 
      1. 배열이 있는 것만 반복함
      2. 반복한 것을 some 돌린다
      3. filter 와 매칭한다 맞으면 item
   */

      for ( let key in insertOption ) {
         console.log(insertOption[key])
         console.log(item.Category)
         console.log(key)
         if ( insertOption[key] === key ) {
            console.log(key)

         }
      }



   
  /* if (item.Category === ) {
    return item.Size === Size || item.Color === 'back steel'
  } */
})
console.log(washSelectMachine)

// 뿌리기
/* washSelectMachine.forEach(function (item, index) {
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
}) */
