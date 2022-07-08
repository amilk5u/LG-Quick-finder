// product
const products = {
	"F4MT08WE": {
		Q1: "WD",
		Q2: "8",
		Q3_1: "Under 600 mm",
		Q3_2: "500mm or more",
		Q3_3: "Under 970 mm",
		Q4: "White",
		Price: "449.99",
		UKTool: "Mega Touch"
	},
	"F4MT08WE3333": {
		Q1: "WM",
		Q2: "10",
		Q3_1: "Under 600 mm",
		Q3_2: "500mm or more",
		Q3_3: "Under 970 mm",
		Q4: "Black Steel",
		Price: "2222449.99",
		UKTool: "Mega Touch"
	},
	"F4V1012BTSE": {
		Q1: "WD",
		Q2: "8",
		Q3_1: "Under 700 mm",
		Q3_2: "600mm or more",
		Q3_3: "Under 870 mm",
		Q4: "Black Steel",
		Price: "1,149.99",
		UKTool: "V10"
	},
	"F4V1012BTSE22222": {
		Q1: "WM",
		Q2: "9",
		Q3_1: "Under 700 mm",
		Q3_2: "600mm or more",
		Q3_3: "Under 870 mm",
		Q4: "Graphite",
		Price: "1,149.99",
		UKTool: "V10"
	},
	"F4V1012BTABC": {
		Q1: "WD",
		Q2: "12",
		Q3_1: "Under 700 mm",
		Q3_2: "600mm or more",
		Q3_3: "Under 870 mm",
		Q4: "White",
		Price: "1,149.99",
		UKTool: "V10"
	}
};
console.log("UserSelected", userSelect);

var result = [];
var _comparisonData = [],
	_resultArr = [];

// user 선택값 만큼 for문 실행
for (const value in userSelect) {
	var _arr = [];

	// 제품만큼 for 문 실행
	for (const item in products) {

		console.log(userSelect[value])

		if (userSelect[value].indexOf(",") !== -1) {
			// "," 기준으로 쪼개서 배열화 (예시 [8,9])
			userSelect[value] = userSelect[value].split(",");
			console.log(userSelect[value])
			if (typeof userSelect[value] === "object") {
				// products 객체 수만큼 for문 실행
				for (var i = 0; i < Object.keys(products).length; i++) {
					// "," 기준으로 쪼개서 배열화 시킨 수만큼 for문 실행
					for (var j = 0; j < userSelect[value].length; j++) {
						// 배열화 n번째와 products 객체의 n번째 데이터가 맞을경우 _arr 배열에 담기
						if (userSelect[value][j] == Object.values(products)[i][value]) {
							// if(value == "Q2") _arr.push(Object.keys(products)[i]);
							_arr.push(Object.keys(products)[i]);
							console.log(Object.keys(products)[i]);
						}
					}
				}
			}
		} else {
			// radio OR checkbox 하나만 선택했을경우, 1:1 비교값으로 매칭해서 _arr 배열에 담기
			// if(value == "Q2") if(userSelect[value] == products[item].Q2) b.push(item);
			if (userSelect[value] == products[item][value]) _arr.push(item);
		}
	}
	// 문항별 배열에 데이터 담기 (2차원 배열)
	_comparisonData.push(_arr);
}
console.log("comparisonData", _comparisonData);

// 순차적으로 중복요소 추출 (처음 선택한 문항이 기준값이 되어서 순차적으로 추출된 데이터와 비교후 최종 데이터 추출)
if (_comparisonData.length - 1 !== 0) {
	// n번과 n+1번을 비교하는것이므로 맨마지막 문항배열의 수는 제외하고 for문 실행
	for (var i = 0; i < _comparisonData.length - 1; i++) {
		if (i == 0) {
			// 기본값 (0번째 배열 + 1번째 배열 병합)
			var _mergeArr = _comparisonData[i].concat(_comparisonData[i + 1]);
		} else {
			// 기본값의 중복데이터(=_filterArr) + n번째(i+1) 배열 병합
			var _mergeArr = _filterArr.concat(_comparisonData[i + 1]);
		}
		// 중복요소 추출
		var _filterArr = _mergeArr.filter((element, index) => {
			if (_mergeArr.indexOf(element) !== index) {
				return element;
			}
		});
		console.log("mergeArr", _mergeArr, "=>", _filterArr);

		if (_filterArr != "") {
			// 필터링 결과값 _resultArr 배열에 담기
			_resultArr = _filterArr;
		} else {
			// 중복데이터가 없을경우 초기화
			_resultArr = [];
			break;
		}
	}
} else {
	// 1개의 문항만 선택했을 경우 (노출되는 데이터가 너무 많아지므로 X)
	// _resultArr = _comparisonData[0];
	// console.log(_resultArr);
	alert("문항을 2개이상 선택해주세요!")
}

// 최종 필터링 데이터값에 맞춰 결과값 도출
for (var i = 0; i < _resultArr.length; i++) {
	var data = {};
	data = products[_resultArr[i]];
	data.productName = _resultArr[i];
	result.push(data);
}