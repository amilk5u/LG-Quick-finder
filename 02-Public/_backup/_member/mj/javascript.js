const $wrap = $("#wrap");

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
   Intent: []
};

// Product
const washingMachine = [
   {
      Product: "product01",
      Category: "WM",
      Capacity: 8,
      Size: 500,
      Color: "graphite",
      Intent: "Price",
   },
   {
      Product: "product02",
      Category: "WD",
      Capacity: 9,
      Size: 600,
      Color: "black steel",
      Intent: "Features",
   },
   {
      Product: "product03",
      Category: "WM",
      Capacity: 10,
      Size: 700,
      Color: "white",
      Intent: "Price",
   },
   {
      Product: "product04",
      Category: "WD",
      Capacity: 10.5,
      Size: 500,
      Color: "black steel",
      Intent: "Price",
   },
   {
      Product: "product05",
      Category: "WM",
      Capacity: 12,
      Size: 600,
      Color: "graphite",
      Intent: "Price",
   },
   {
      Product: "product06",
      Category: "WD",
      Capacity: 8,
      Size: 700,
      Color: "white",
      Intent: "Features",
   },
   {
      Product: "product07",
      Category: "WM",
      Capacity: 9,
      Size: 600,
      Color: "black steel",
      Intent: "Features",
   },
   {
      Product: "product08",
      Category: "WD",
      Capacity: 10.5,
      Size: 500,
      Color: "graphite",
      Intent: "Features",
   },
   {
      Product: "product09",
      Category: "WM",
      Capacity: 12,
      Size: 700,
      Color: "white",
      Intent: "Price",
   },
   {
      Product: "product10",
      Category: "WM",
      Capacity: 8,
      Size: 600,
      Color: "black steel",
      Intent: "Price",
   },
   {
      Product: "product11",
      Category: "WD",
      Capacity: 10.5,
      Size: 500,
      Color: "graphite",
      Intent: "Features",
   },
   {
      Product: "product12",
      Category: "WM",
      Capacity: 12,
      Size: 500,
      Color: "graphite",
      Intent: "Features",
   },
   {
      Product: "product13",
      Category: "WD",
      Capacity: 9,
      Size: 700,
      Color: "black steel",
      Intent: "Features",
   },
   {
      Product: "product14",
      Category: "WD",
      Capacity: 8,
      Size: 600,
      Color: "white",
      Intent: "Price",
   },
   {
      Product: "product15",
      Category: "WM",
      Capacity: 10,
      Size: 500,
      Color: "graphite",
      Intent: "Features",
   },
   {
      Product: "product16",
      Category: "WM",
      Capacity: 9,
      Size: 700,
      Color: "white",
      Intent: "Features",
   },
];
// console.log(washingMachine)

function inputCheck() {
   $(".option").each(function () {
      $(this)
         .find("input:checked")
         .each(function () {
            let _name = $(this).attr("name");
            if (_name === "Category") {
               insertOption.Category.push($(this).val());
            } else if (_name === "Intent") {
               insertOption.Intent.push($(this).val());
            } else if (_name === "Capacity") {
               if ($(this).val() == 8) {
                  insertOption.Capacity.push(8, 9, 10)
               } else {
                  insertOption.Capacity.push(10, 11, 12)
               }
            } else if (_name === "Color") {
               insertOption.Color.push($(this).val());
            }
         });
   });
}
let selectCapacity = [];
let selectColor = [];
let selectIntent = [];

function sortOption(item, index) {
   // console.log(index)
   // 현재 클릭한 Capacity가 포함된 product를 selectProduct에 푸쉬한다
   for (let i = 0; i < insertOption.Capacity.length; i++) {
      if (item.Capacity == insertOption.Capacity[i]) {
         selectCapacity.push(item.Product);
      }
   }
   // console.log(selectCapacity)

   for (let s = 0; s < selectCapacity.length; s++) {
      if (item.Product === selectCapacity[s]) {
         for (let i = 0; i < insertOption.Color.length; i++) {
            if (item.Color == insertOption.Color[i]) {
               selectColor.push(item.Product);
            }
         }
      }
   }
   // console.log(selectColor)

   for (let s = 0; s < selectColor.length; s++) {
      if (item.Product === selectColor[s]) {
         for (let i = 0; i < insertOption.Intent.length; i++) {
            if (item.Intent == insertOption.Intent[i]) {
               // selectColor.push(item.Product);
               return item
            }
         }
      }
   }
}

function filterSelect() {
   inputCheck();
   // Product 중 같은 value 가 있을 시 그 값을 return
   const washSelectMachine = washingMachine.filter((item, index) => {
      //  item category 와 insertOption 카테고리가 같을때
      if (item.Category === insertOption.Category[0]) {
         return sortOption(item, index);
      }
   });
   // $(".select_01").css("display","none")

   // Load
   washSelectMachine.forEach(function (item) {
      $wrap.append(
         `
            <div class="box"> 
               <p>제품 : ${item.Product}</p>
               <p>카테고리 : ${item.Category}</p>
               <p>용량 : ${item.Capacity}kg</p>
               <p>컬러 : ${item.Color}</p> 
               <p>타입 : ${item.Intent}</p> 
            </div>
         `
      );
      // <p>사이즈 : ${item.Size} </p>
   });
}

$(".submit_btn").on("click", filterSelect);
