function asas() {
	let _select = [];
	let _result = []; // 선택한 값
	let _showResultData = []; // 마지막 최종 결과 데이터 추출 배열

	const product = {
		"product1": {
			Q1: "Q1_value1",
			Q2: "Q2_value3",
			Q3_1: "Q3_1_value2",
			Q3_2: "Q3_2_value1",
			Q3_3: "Q3_3_value4",
			Q4: "Q4_value1",
			Q5: "Q5_value1",
			Q6: "Q6_value2",
			Q7: "Q7_value3"
		},
		"product2": {
			Q1: "Q1_value2",
			Q2: "Q2_value1",
			Q3_1: "Q3_1_value1",
			Q3_2: "Q3_2_value2",
			Q3_3: "Q3_3_value1",
			Q4: "Q4_value1",
			Q5: "Q5_value2",
			Q6: "Q6_value2",
			Q7: "Q7_value1"
		},
		"product3": {
			Q1: "Q1_value3",
			Q2: "Q2_value1",
			Q3_1: "민주다",
			Q3_2: "Q3_2_value1",
			Q3_3: "Q3_3_value2",
			Q4: "Q4_value3",
			Q5: "Q5_value2",
			Q6: "Q6_value1",
			Q7: "Q7_value41"
		},
		"product4": {
			Q1: "Q1_value4",
			Q2: "민주다",
			Q3_1: "Q3_1_value2",
			Q3_2: "Q3_2_value2",
			Q3_3: "Q3_3_value1",
			Q4: "Q4_value1",
			Q5: "Q5_value1",
			Q6: "Q6_value2",
			Q7: "Q7_value3",
		},
	}

	const ConfigData = {
		// 제품 정보 정의
		object: [
			{
				id: '멀티 냉장고',
				key: 'step1-value1',
				screenImg: {
					// defaultScreenImg: '',
					changeScreenImg: 'step01 - 1 항목 이미지',
					popupImg: 'step01 1 항목 팝업.png',
					productImg: 'step01 1 항목 냉장고 이미지.png',
				}
			},
			{
				id: '아메리칸 냉장고',
				key: 'step1-value2',
				screenImg: {
					// defaultScreenImg: '',
					changeScreenImg: 'step01 - 2 항목 이미지',
					popupImg: 'step01 - 2 항목 팝업.png',
					productImg: 'step01 - 2 항목 냉장고 이미지.png',
				}
			},
			{
				id: '톨 냉장고',
				key: 'step1-value3',
				screenImg: {
					// defaultScreenImg: '',
					changeScreenImg: 'step01 - 3 항목 이미지',
					popupImg: 'step01 - 3 항목 팝업.png',
					productImg: 'step01 - 3 항목 냉장고 이미지.png',
				}
			}
		],
		// 질문페이지 사전 정의 
		finderSetting: [
			// 제품 선택
			{
				finderStep: 'step01',
				key: '',
				questionText: 'step01 - 질문?',
				defaultScreenImg: 'step01 - default 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
			{
				finderStep: 'step02',
				key: '',
				questionText: 'step02 - 질문?',
				defaultScreenImg: 'step02 - default 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
			{
				finderStep: 'step03',
				key: '',
				questionText: 'step03 - 질문?',
				defaultScreenImg: 'step03 - default 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
			{
				finderStep: 'step04',
				key: '',
				questionText: 'step04 - 질문?',
				defaultScreenImg: 'step04 - default 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
		],
		// 페이지 데이터 
		htmlData: [
			{
				key: 'step1_key',
				option: [
					{
						value: 'step1_value1',
						content: 'step1_content1',
						changeData: {
							description: 'step02 - 항목 1 디스크립션',
							icon: 'step02 - 항목 1 아이콘',
						}
					},
					{
						value: 'step1_value2',
						content: 'step1_content2',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 2 디스크립션',
							icon: 'step02 - 항목 2 아이콘',
						}
					},
					{
						value: 'step2_value3',
						content: 'step2_content3',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 3 디스크립션',
							icon: 'step02 - 항목 3 아이콘',
						}
					},
				],
			},
			{
				key: 'step2_key',
				option: [
					{
						value: '민주다',
						content: 'step2_content1',
						changeData: {
							description: 'step02 - 항목 1 디스크립션',
							icon: 'step02 - 항목 1 아이콘',
						}
					},
					{
						value: 'step1_value2',
						content: 'step1_content2',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 2 디스크립션',
							icon: 'step02 - 항목 2 아이콘',
						}
					},
					{
						value: 'step2_value3',
						content: 'step2_content3',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 3 디스크립션',
							icon: 'step02 - 항목 3 아이콘',
						}
					},
				],
			},
			{
				key: 'step3_1_key',
				option: [
					{
						value: 'step1_value1',
						content: 'step1_content1',
						changeData: {
							description: 'step02 - 항목 1 디스크립션',
							icon: 'step02 - 항목 1 아이콘',
						}
					},
					{
						value: 'step1_value2',
						content: 'step1_content2',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 2 디스크립션',
							icon: 'step02 - 항목 2 아이콘',
						}
					},
					{
						value: 'step2_value3',
						content: 'step2_content3',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 3 디스크립션',
							icon: 'step02 - 항목 3 아이콘',
						}
					},
				],
			},
			{
				key: 'step3_2_key',
				option: [
					{
						value: 'step1_value1',
						content: 'step1_content1',
						changeData: {
							description: 'step02 - 항목 1 디스크립션',
							icon: 'step02 - 항목 1 아이콘',
						}
					},
					{
						value: 'step1_value2',
						content: 'step1_content2',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 2 디스크립션',
							icon: 'step02 - 항목 2 아이콘',
						}
					},
					{
						value: 'step2_value3',
						content: 'step2_content3',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 3 디스크립션',
							icon: 'step02 - 항목 3 아이콘',
						}
					},
				],
			},
			{
				key: 'step3_3_key',
				option: [
					{
						value: 'step1_value1',
						content: 'step1_content1',
						changeData: {
							description: 'step02 - 항목 1 디스크립션',
							icon: 'step02 - 항목 1 아이콘',
						}
					},
					{
						value: 'step1_value2',
						content: 'step1_content2',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 2 디스크립션',
							icon: 'step02 - 항목 2 아이콘',
						}
					},
					{
						value: 'step2_value3',
						content: 'step2_content3',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 3 디스크립션',
							icon: 'step02 - 항목 3 아이콘',
						}
					},
				],
			},
		]
	}

	let bb = '민주다';
	let keyBin = []; 
	let binPro = [];


	
	for (let key in product) {
		// console.log(key);
		// console.log(product[key]);

		// console.log(Object.keys(product[key]))
		
		for (let i = 0; i < Object.keys(product[key]).length; i++) {
			// console.log(i)
			// console.log(Object.values(product[key])[i] )


			if (Object.values(product[key])[i] === '민주다') {
				console.log(Object.keys(product[key]))
				console.log(product[key])
				console.log(key)
				keyBin.push(key);
				binPro[key] = product[key];

			}
		}

	}
	console.log('해당되는 product key',keyBin)
	console.log('해당되는 product',binPro)
}