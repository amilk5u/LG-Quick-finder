// filter (세탁기)
const _filter = {
  Cat: ["WD", "WM"],
  size: [8, 9, 10, 10.5, 12],
  color: ["white", "graphite", "black steel"],
}

// product
const 세탁기 = [
  {
    product: "product01",
    Cat: "WM",
    size: 8,
    color: "graphite",
  },
  {
    product: "product02",
    Cat: "WD",
    size: 9,
    color: "black steel",
  },
  {
    product: "product03",
    Cat: "WM",
    size: 10,
    color: "white",
  },
  {
    product: "product04",
    Cat: "WD",
    size: 10.5,
    color: "black steel",
  },
  {
    product: "product05",
    Cat: "WM",
    size: 12,
    color: "graphite",
  },
  {
    product: "product06",
    Cat: "WD",
    size: 12,
    color: "white",
  }
]

const $wrap = $("#wrap");
const test2 = 세탁기.filter((item) => {
  if (item.Cat === "WD") {
    return item.size === 10.5 
	|| item.color === "back stell" 
	|| item.color === "white"
  } 
})
console.log(test2)

// 뿌리기
test2.forEach(function (item, index) {
  $wrap.append(
    `<div class="box"> 
		<span>${item.product}</span>
		<span>${item.Cat}</span><span> ${item.size}</span>
		<span>${item.color}</span> 
	</div>
	`
  )
})
