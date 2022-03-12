const $wrap = $('#wrap')

// Filter Example
const insertOption = {
  Category: ['WD', 'WM'],
  Capacity: [8, 9, 10, 10.5, 12],
  Size: [500, 600, 700],
  Color: ['white', 'graphite', 'black steel'],
  Intent: ['Price', 'Features'],
}

const _category = []
const _intent = []
const insertOption1 = {
  Capacity: [],
  Size: [],
  Color: [],
}

const insertOption2 = {
  Capacity: [8, 10, 9, 10.5],
  Size: [500, 700],
  Color: ['white'],
}

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
    Intent: 'Features',
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
    Size: 600,
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
    Intent: 'Features',
  },
  {
    Product: 'product08',
    Category: 'WD',
    Capacity: 10.5,
    Size: 500,
    Color: 'graphite',
    Intent: 'Features',
  },
  {
    Product: 'product09',
    Category: 'WM',
    Capacity: 12,
    Size: 700,
    Color: 'white',
    Intent: 'Price',
  },
  {
    Product: 'product10',
    Category: 'WM',
    Capacity: 8,
    Size: 600,
    Color: 'black steel',
    Intent: 'Price',
  },
  {
    Product: 'product11',
    Category: 'WD',
    Capacity: 10.5,
    Size: 500,
    Color: 'graphite',
    Intent: 'Features',
  },
  {
    Product: 'product12',
    Category: 'WM',
    Capacity: 12,
    Size: 500,
    Color: 'graphite',
    Intent: 'Features',
  },
  {
    Product: 'product13',
    Category: 'WD',
    Capacity: 9,
    Size: 700,
    Color: 'black steel',
    Intent: 'Features',
  },
  {
    Product: 'product14',
    Category: 'WD',
    Capacity: 8,
    Size: 600,
    Color: 'white',
    Intent: 'Price',
  },
  {
    Product: 'product15',
    Category: 'WM',
    Capacity: 10,
    Size: 500,
    Color: 'graphite',
    Intent: 'Features',
  },
  {
    Product: 'product16',
    Category: 'WM',
    Capacity: 9,
    Size: 700,
    Color: 'white',
    Intent: 'Features',
  },
]
// console.log(washingMachine)

function inputCheck() {
  $("input[name='Category']:checked").each(function () {
    //  insertOption1.Category.push($(this).val())
    _category.push($(this).val())
  })
  $("input[name='Intent']:checked").each(function () {
    // insertOption1.Category.push($(this).val())
    _intent.push($(this).val())
  })
}

function aaa(item,index) {
   console.log(index)
   console.log('용량 판단')



  for (let i = 0; i < insertOption2.Capacity.length; i++) {
   if (item.Capacity === insertOption2.Capacity[i]) {
      console.log(item.Product)
     console.log('Capacity insert ' + insertOption2.Capacity[i])
     console.log('Capacity original ' + item.Capacity)
     console.log('맞습니다!!!')
     return item
   }
 }
 console.log(index)
 console.log('컬러 판단')
 for (let i = 0; i < insertOption2.Color.length; i++) {
    if (item.Color === insertOption2.Color[i]) {
      console.log(item.Product)
      console.log('Color insert ' + insertOption2.Color[i])
      console.log('Color original ' + item.Color)
      console.log('맞습니다!!!')
    }
  }
}


function filterSelect() {
  // 제품의 8번을 무조건 돌고, 제품 8개 중에 하나 라도 같은게 있으면 그 값을 리턴한다
  const washSelectMachine = washingMachine.filter((item,index) => {
    if (item.Category === _category[0] && item.Intent === _intent[0]) {
       return aaa(item, index)
    }
  })
  // 뿌리기
  washSelectMachine.forEach(function (item) {
    $wrap.append(
      `<div class="box"> 
          <span>${item.Product}</span>
          <span>${item.Category}</span>
          <span>${item.Capacity}</span>
          <span>${item.Size}</span>
          <span>${item.Color}</span> 
          <span>${item.Intent}</span> 
       </div>
       `,
    )
  })
}

$('.submit_btn').on('click', function () {
  inputCheck()
  filterSelect()
})
