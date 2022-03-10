// filter (세탁기)
const _filter = {
  Cat: ["WD", "WM"],
  size: [8, 9, 10, 10.5, 12],
  color: ["white", "graphite", "black steel"],
  intent: ["Price","Features"],
};

// product
const 세탁기 = [
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
	intent: "Price",
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

const $wrap = $("#wrap");
const test2 = 세탁기.filter((item) => {
  if (item.Cat === "WD" &&  item.intent === "Features" ) {
    return (
      item.size === 9 ||
      item.color === "back stell" ||
      item.color === "white"
    );
  }
});
console.log(test2);

// 뿌리기
test2.forEach(function (item, index) {
  $wrap.append(
    `<div class="box"> 
		<span>${item.product}</span>
		<span>${item.Cat}</span><span> ${item.size}</span>
		<span>${item.color}</span> 
	</div>
	`
  );
});
