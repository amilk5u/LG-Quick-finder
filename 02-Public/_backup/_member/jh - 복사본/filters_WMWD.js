/*const _filter = {
    Q1: ["WD", "WM"],
    Q2: [8, 9, 10, 10.5, 12],
    Q3_1: ["Under 600 mm"],
    Q3_2: ["500mm or more"],
    Q3_3: ["Under 970 mm"],
    Q4: ["White", "Black Steel", "Graphite"],
    Q5: ["Price", "Features"],
    Q6_1_1: ["Y", "N"],
    Q6_1_2: ["Y", "N"],
    Q6_2: ["Y", "N"],
    Q6_3: ["A", "B", "C", "D", "A/E", "B/E"],
    Q6_4_1: ["Y", "N"],
    Q6_4_2: ["Y", "N"],
    Q6_4_3: ["Y", "N"],
    Q6_5: ["Y", "N"],
};*/

const userSelect = {
    Q1: "WD",
    Q2: 8,
    Q3_1: "Under 600 mm",
    Q3_2: "500mm or more",
    Q3_3: "Under 970 mm",
    Q4: "White",
    Q5: "Features",
    Q6_1_1: "N",
    Q6_1_2: "N",
    Q6_2: "N",
    Q6_3: "D",
    Q6_4_1: "N",
    Q6_4_2: "N",
    Q6_4_3: "N",
    Q6_5: "N",
}

// product
const products = {
    "F4MT08WE": {
        Q1: "WD",
        Q2: 8,
        Q3_1: "Under 600 mm",
        Q3_2: "500mm or more",
        Q3_3: "Under 970 mm",
        Q4: "White",
        Q5: "Features",
        Q6_1_1: "N",
        Q6_1_2: "N",
        Q6_2: "N",
        Q6_3: "D",
        Q6_4_1: "N",
        Q6_4_2: "N",
        Q6_4_3: "N",
        Q6_5: "N",
        Price: "449.99",
        UKTool: "Mega Touch"
    },
    "F4V1012BTSE": {
        Q1: "WD",
        Q2: 12,
        Q3_1: "Under 600 mm",
        Q3_2: "500mm or more",
        Q3_3: "Under 970 mm",
        Q4: "Black Steel",
        Q5: "Features",
        Q6_1_1: "Y",
        Q6_1_2: "Y",
        Q6_2: "Y",
        Q6_3: "A",
        Q6_4_1: "N",
        Q6_4_2: "Y",
        Q6_4_3: "Y",
        Q6_5: "Y",
        Price: "1,149.99",
        UKTool: "V10"
    }
};
// console.log(products);

console.log("UserSelected", userSelect);

var result;
for (const item in products) {
    var correct = 0;
    console.log("Items", products[item]);
    var filtering = Object.keys(products[item]).filter((v) => {
        // console.log(Object.keys(products[item]));
        // console.log(Object.values(products[item]));
        // console.log(products[item][v]);
        // if(userSelect[v] == "") correct ++;
        if(products[item][v] === userSelect[v]){
            correct ++;
        }
    });

    if(correct == 15) {
        /*result = products[item];
        result.productN = item;*/
        result = item;
    }
}

console.log(result);
