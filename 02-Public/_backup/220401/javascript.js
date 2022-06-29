const $wrap = $("#wrap");
const insertOption = {
   Product: [],
   Q0: [],
   Q1: [],
   Q2: [],
   Q3: [],
   Q4: [],
   Q5: []
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

function DataInsert() {
   $.ajax({
      url: "./data.json", // 어디로 갈거니? // 갈 때 데이터
      datatype: "json",
      // async:false, // 동기방식 
      success: function (data) {
         console.log(data)
      }
   });
}

function filterSelect() {
   inputCheck();
   DataInsert();
}

$(".submit_btn").on("click", filterSelect);

const objPersons = {
   persons: {
      name: "kim", 
      age: 20, 
      gender: "man"
   },
};

const { persons } = objPersons
// ES5: const persons = Object.assign([], objPersons.persons)와 동일
const mapPersons = Object.values(persons).map(
   v => Object.keys(v).map(v2 => v[v2])
)
const filteredPersonsAge = persons.filter(v => v.age > 25)


