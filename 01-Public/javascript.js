const $wrap = $('#wrap')

// Filter Example
// Category: ['WD', 'WM'],
// Capacity: [8, 9, 10, 10.5, 12],
// Size: [500, 600, 700],
// Color: ['white', 'graphite', 'black steel'],
// Intent: ['Price', 'Features'],

const insertOption = {
   Category: [],
   Capacity: [],
   Size: [],
   Color: [],
   Intent: [],
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
   $('.option').each(function () {
      $(this)
         .find('input:checked')
         .each(function () {
            let _name = $(this).attr('name')
            if (_name === 'Category') {
               insertOption.Category.push($(this).val())
            } else if (_name === 'Intent') {
               insertOption.Intent.push($(this).val())
            } else if (_name === 'Capacity') {
               insertOption.Capacity.push($(this).val())
            } else if (_name === 'Color') {
               insertOption.Color.push($(this).val())
            }
         })
   })
   console.log(insertOption)
}


let selectProduct = []
function sortOption(item, index) {
   // 현재 클릭한 Capacity가 포함된 product를 selectProduct에 푸쉬한다
   for (let i = 0; i < insertOption.Capacity.length; i++) {
      if (item.Capacity == insertOption.Capacity[i]) {
         selectProduct.push(item.Product)
      }
   }

   console.log('color')
   console.log(selectProduct)
   // Capacity를 푸쉬한 것과 현재 product와 같은 제품 추리기
   for (let i = 0; i < selectProduct.length; i++) {
      if (item.Product == selectProduct[i]) {
         for (let j = 0; j < insertOption.Color.length; j++) {
            if (item.Color == insertOption.Color[j]) {               
               selectProduct.push(item.Product)         
               return item      
            }
         }
      }
   }

   console.log('intent')
   console.log(selectProduct)
   // selectProduct = []
/*    for (let i = 0; i < selectProduct.length; i++) {
      if (item.Product == selectProduct[i]) {
         for (let j = 0; j < insertOption.Intent.length; j++) {
            if (item.Intent == insertOption.Intent[j]) {
               return item
            }
         }
      }
   } */


   // 자동화.... 어떻게 하지?....









   /* 
      1. 선택한 Capacity 를 selectCapacity 에 product 를 푸쉬한다
      2. item.Product 와 selectCapacity 의 Product를 비교하여 같은 제품이고,
      3. item.Color 와 insertOption.Color 가 같은 제품에 selectColor에 제품을 푸쉬한다
   */
}

function filterSelect() {
   inputCheck()
   // Product 중 같은 value 가 있을 시 그 값을 return
   const washSelectMachine = washingMachine.filter((item, index) => {
      //  item category 와 insertOption 카테고리가 같을때

      if (item.Category === insertOption.Category[0]) {
         return sortOption(item, index)
      }
   })

   // Load
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

$('.submit_btn').on('click', filterSelect)
