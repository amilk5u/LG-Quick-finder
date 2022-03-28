const $wrap = $("#wrap");
const insertOption = {
   Category: [],
   Capacity: [],
   Size: [],
   Color: [],
   Intent: []
};

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

function filterSelect() {
   inputCheck();
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
   });
}

$(".submit_btn").on("click", filterSelect);
