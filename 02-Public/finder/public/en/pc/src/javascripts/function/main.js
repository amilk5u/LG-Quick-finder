function main() {
	let _select = {}; // 사용자 선택한 value 
	let _stepProduct = {}; // 스텝별로 추출된 제품리스트
	let _result = {}; // 마지막 최종 결과 데이터 추출 배열
	let interaction = ''; // 인터렉션 페이지 유/무
	let Q1Key = ''; // 처음 선택한 제품 키 값
	let _selectData; // 셀렉된 제품 데이터 

	const product = {
		'product1': {
			Q1: 'Q1_value1',
			Q2: 450,
			Q3_1: 760,
			Q3_2: 550,
			Q3_3: 1790,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3'
		},
		'product2': {
			Q1: 'Q1_value2',
			Q2: 600,
			Q3_1: 760,
			Q3_2: 680,
			Q3_3: 1800,
			Q4: 'Q4_value1',
			Q5: 'Q5_value2',
			Q6: 'Q6_value2',
			Q7: 'Q7_value1'
		},
		'product3': {
			Q1: 'Q1_value3',
			Q2: 687,
			Q3_1: 760,
			Q3_2: 900,
			Q3_3: 2200,
			Q4: 'Q4_value3',
			Q5: 'Q5_value2',
			Q6: 'Q6_value1',
			Q7: 'Q7_value41'
		},
		'product4': {
			Q1: 'Q1_value2',
			Q2: 500,
			Q3_1: 760,
			Q3_2: 850,
			Q3_3: 1780,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product5': {
			Q1: 'Q1_value1',
			Q2: 480,
			Q3_1: 760,
			Q3_2: 650,
			Q3_3: 1820,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product6': {
			Q1: 'Q1_value1',
			Q2: 538,
			Q3_1: 760,
			Q3_2: 750,
			Q3_3: 1850,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product7': {
			Q1: 'Q1_value2',
			Q2: 351,
			Q3_1: 760,
			Q3_2: 850,
			Q3_3: 1720,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product8': {
			Q1: 'Q1_value3',
			Q2: 650,
			Q3_1: 760,
			Q3_2: 940,
			Q3_3: 1980,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product9': {
			Q1: 'Q1_value2',
			Q2: 475,
			Q3_1: 760,
			Q3_2: 570,
			Q3_3: 2100,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product10': {
			Q1: 'Q1_value3',
			Q2: 680,
			Q3_1: 760,
			Q3_2: 690,
			Q3_3: 1860,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product11': {
			Q1: 'Q1_value3',
			Q2: 470,
			Q3_1: 760,
			Q3_2: 770,
			Q3_3: 1730,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product12': {
			Q1: 'Q1_value2',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 820,
			Q3_3: 1990,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product13': {
			Q1: 'Q1_value1',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 820,
			Q3_3: 1990,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product14': {
			Q1: 'Q1_value2',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 820,
			Q3_3: 1990,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product15': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product16': {
			Q1: 'Q1_value3',
			Q2: 555,
			Q3_1: 800,
			Q3_2: 800,
			Q3_3: 2500,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product17': {
			Q1: 'Q1_value1',
			Q2: 370,
			Q3_1: 760,
			Q3_2: 1500,
			Q3_3: 1300,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product18': {
			Q1: 'Q1_value2',
			Q2: 350,
			Q3_1: 780,
			Q3_2: 450,
			Q3_3: 1650,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product19': {
			Q1: 'Q1_value1',
			Q2: 860,
			Q3_1: 790,
			Q3_2: 1450,
			Q3_3: 1760,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product20': {
			Q1: 'Q1_value3',
			Q2: 900,
			Q3_1: 650,
			Q3_2: 1200,
			Q3_3: 1800,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product21': {
			Q1: 'Q1_value2',
			Q2: 700,
			Q3_1: 800,
			Q3_2: 650,
			Q3_3: 1650,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product22': {
			Q1: 'Q1_value3',
			Q2: 680,
			Q3_1: 900,
			Q3_2: 750,
			Q3_3: 1850,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product23': {
			Q1: 'Q1_value1',
			Q2: 600,
			Q3_1: 900,
			Q3_2: 850,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product24': {
			Q1: 'Q1_value3',
			Q2: 840,
			Q3_1: 680,
			Q3_2: 1200,
			Q3_3: 1840,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product25': {
			Q1: 'Q1_value2',
			Q2: 650,
			Q3_1: 890,
			Q3_2: 1350,
			Q3_3: 2200,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product26': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product27': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product28': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product29': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product30': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product31': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product32': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product32': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product32': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product33': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product34': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product35': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product36': {
			Q1: 'Q1_value3',
			Q2: 490,
			Q3_1: 760,
			Q3_2: 950,
			Q3_3: 2000,
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
	}

	const ConfigData = {
		// 제품 정보 정의
		object: [
			{
				id: '멀티 냉장고',
				key: 'Q1_value1',
				class: 'multi',
				screenImg: {
					// defaultScreenImg: '',
					changeScreenImg: 'step01 - 1 항목 이미지',
					popupImg: 'step01 1 항목 팝업.png',
					productImg: 'step01 1 항목 냉장고 이미지.png',
				}
			},
			{
				id: '아메리칸 냉장고',
				key: 'Q1_value2',
				class: 'american',
				screenImg: {
					// defaultScreenImg: '',
					changeScreenImg: 'step01 - 2 항목 이미지',
					popupImg: 'step01 - 2 항목 팝업.png',
					productImg: 'step01 - 2 항목 냉장고 이미지.png',
				}
			},
			{
				id: '톨 냉장고',
				key: 'Q1_value3',
				class: 'tall',
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
				questionText: 'step01 - 질문?',
				defaultScreenImg: 'step01 - default 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
			{
				finderStep: 'step02',
				questionText: 'step02 - 질문?',
				defaultScreenImg: 'step02 - default 이미지',
				interactionPage: false, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
			{
				finderStep: 'step03',
				questionText: 'step03 - 질문?',
				defaultScreenImg: 'step03 - default 이미지',
				interactionPage: false, // 인터렉트 페이지 유/무 정의
				appliancePopup: true, // 팝업 유/무 정의
				key: ['depth', 'width', 'height'],
			},
			{
				finderStep: 'step04',
				questionText: 'step04 - 질문?',
				defaultScreenImg: 'step04 - default 이미지',
				interactionPage: false, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
			{
				finderStep: 'step05',
				questionText: 'step04 - 질문?',
				defaultScreenImg: 'step04 - default 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
			{
				finderStep: 'step06',
				questionText: 'step04 - 질문?',
				defaultScreenImg: 'step04 - default 이미지',
				interactionPage: false, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
			{
				finderStep: 'step07',
				questionText: 'step04 - 질문?',
				defaultScreenImg: 'step04 - default 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
		],
		// 페이지 데이터 
		htmlData: {
			'Q1': [
				{
					value: 'Q1_value1',
					content: 'Q1_content1',
					changeData: {
						description: 'step01 - 항목 1 디스크립션',
						icon: 'step01 - 항목 1 아이콘',
						screenImg: 'step01 - 이미지 1',
					}
				},
				{
					value: 'Q1_value2',
					content: 'Q1_content2',
					changeData: {
						description: 'step01 - 항목 2 디스크립션',
						icon: 'step01 - 항목 2 아이콘',
						screenImg: 'step01 - 이미지 2',
					}
				},
				{
					value: 'Q1_value3',
					content: 'Q1_content3',
					changeData: {
						description: 'step01 - 항목 3 디스크립션',
						icon: 'step01 - 항목 3 아이콘',
						screenImg: 'step01 - 이미지 3',
					}
				},
			],
			'Q2': [
				{
					value: 'Q2_value1',
					content: '450이하',
					changeData: {
						description: 'step02 - 항목 1 디스크립션',
						icon: 'step02 - 항목 1 아이콘',
					}
				},
				{
					value: 'Q2_value2',
					content: '500~600',
					changeData: {
						description: 'step02 - 항목 2 디스크립션',
						icon: 'step02 - 항목 2 아이콘',
					}
				},
				{
					value: 'Q2_value3',
					content: '600이상',
					changeData: {
						description: 'step02 - 항목 3 디스크립션',
						icon: 'step02 - 항목 3 아이콘',
					}
				}
			],
			'Q3_1': [
				{
					value: 'Q3_1_value1',
					content: '760이하'
				},
				{
					value: 'Q3_1_value2',
					content: '760이상'
				}
			],
			'Q3_2': [
				{
					value: 'Q3_2_value1',
					content: '600이하'
				},
				{
					value: 'Q3_2_value2',
					content: '600~900'
				},
				{
					value: 'Q3_2_value3',
					content: '900이상'
				},
			],
			'Q3_3': [
				{
					value: 'Q3_3_value1',
					content: '1800이하'
				},
				{
					value: 'Q3_3_value2',
					content: '1800~2000'
				},
				{
					value: 'Q3_3_value3',
					content: '2000이상'
				},
			],
			'Q4': [
				{
					value: 'Q4_value1',
					content: 'Q4_content1',
					changeData: {
						description: 'step04 - 항목 1 디스크립션',
						icon: 'step04 - 항목 1 아이콘',
						screenImg : 'step04 - 항목 1 이미지',
					}
				},
				{
					value: 'Q4_value2',
					content: 'Q4_content2',
					changeData: {
						description: 'step04 - 항목 2 디스크립션',
						icon: 'step04 - 항목 2 아이콘',
						screenImg : 'step04 - 항목 2 이미지',
					}
				},
				{
					value: 'Q4_value3',
					content: 'Q4_content3',
					changeData: {
						description: 'step04 - 항목 3 디스크립션',
						icon: 'step04 - 항목 3 아이콘',
						screenImg : 'step04 - 항목 3 이미지',
					}
				},
				{
					value: 'Q4_value4',
					content: 'Q4_content4',
					changeData: {
						description: 'step04 - 항목 4 디스크립션',
						icon: 'step04 - 항목 4 아이콘',
						screenImg : 'step04 - 항목 4 이미지',
					}
				},
			],
			'Q5': [
				{
					value: 'Q5_value1',
					content: 'Q5_content1',
					changeData: {
						description: 'step05 - 항목 1 디스크립션',
						icon: 'step05 - 항목 1 아이콘',
						screenImg : 'step06 - 항목 1 이미지',
					}
				},
				{
					value: 'Q5_value2',
					content: 'Q5_content2',
					changeData: {
						description: 'step05 - 항목 2 디스크립션',
						icon: 'step05 - 항목 2 아이콘',
						screenImg : 'step06 - 항목 2 이미지',
					}
				},
				{
					value: 'Q5_value3',
					content: 'Q5_content3',
					changeData: {
						description: 'step05 - 항목 3 디스크립션',
						icon: 'step05 - 항목 3 아이콘',
						screenImg : 'step06 - 항목 3 이미지',
					}
				},
			],
			'Q6': [
				{
					value: 'Q6_value1',
					content: 'Q6_content1',
					changeData: {
						description: 'step06 - 항목 1 디스크립션',
						icon: 'step06 - 항목 1 아이콘',
						screenImg : 'step06 - 항목 1 이미지',
					}
				},
				{
					value: 'Q6_value2',
					content: 'Q6_content2',
					changeData: {
						description: 'step06 - 항목 2 디스크립션',
						icon: 'step06 - 항목 2 아이콘',
						screenImg : 'step06 - 항목 2 이미지',
					}
				},
				{
					value: 'Q6_value3',
					content: 'Q6_content3',
					changeData: {
						description: 'step06 - 항목 3 디스크립션',
						icon: 'step06 - 항목 3 아이콘',
						screenImg : 'step06 - 항목 3 이미지',
					}
				},
				{
					value: 'Q6_value4',
					content: 'Q6_content4',
					changeData: {
						description: 'step06 - 항목 4 디스크립션',
						icon: 'step06 - 항목 4 아이콘',
						screenImg : 'step06 - 항목 4 이미지',
					}
				},
				{
					value: 'Q6_value5',
					content: 'Q6_content5',
					changeData: {
						description: 'step06 - 항목 5 디스크립션',
						icon: 'step06 - 항목 5 아이콘',
						screenImg : 'step06 - 항목 5 이미지',
					}
				},
				{
					value: 'Q6_value6',
					content: 'Q6_content6',
					changeData: {
						description: 'step06 - 항목 6 디스크립션',
						icon: 'step06 - 항목 6 아이콘',
						screenImg : 'step06 - 항목 6 이미지',
					}
				},
				{
					value: 'Q6_value7',
					content: 'Q6_content7',
					changeData: {
						description: 'step06 - 항목 7 디스크립션',
						icon: 'step06 - 항목 7 아이콘',
						screenImg : 'step06 - 항목 7 이미지',
					}
				},
			],
			'Q7': [
				{
					value: 'Q7_value1',
					content: 'Q7_content1',
					changeData: {
						description: 'step07 - 항목 1 디스크립션',
						icon: 'step07 - 항목 1 아이콘',
					}
				},
				{
					value: 'Q7_value2',
					content: 'Q7_content2',
					changeData: {
						description: 'step07 - 항목 2 디스크립션',
						icon: 'step07 - 항목 2 아이콘',
					}
				},
			],
		},
	}



	// 스텝 이동 이벤트 함수
	function stepChangeEvent(idx) {

		// 스텝 open
		$('#quickFinder').css('display', 'block');
		stepUpdateEvent(idx);
		// 다음버튼
		$('#nextStepBtn').on('click', function () {
			let judgmentStep = 'nextStep';

			// 인터렉션 페이지 true 일 때 실행
			if (interaction && $('.answer_btn.active').length > 0) {
				$('#quickFinder').css('display', 'none');
				$('.popup_step01').css('display', 'block');
				$('.popup_step01 .' + _selectData[0].class).css('display', 'block');
			}
			if (idx < ConfigData.finderSetting.length - 1 && $(this).hasClass('active')) {
				idx++;
				stepUpdateEvent(idx, judgmentStep);
			}
			// 마지막 페이지 실행
			if (idx === ConfigData.finderSetting.length - 1) {
				console.log('마지막!!')
				// $('#quickFinder').css('display','none');
			}
		});
		// 이전버튼
		$('#backStepBtn').on('click', function () {
			let judgmentStep = 'backStep';

			if (idx > 0) {
				idx--;
				stepUpdateEvent(idx, judgmentStep);
			}
		});
	}

	function stepUpdateEvent(idx, judgmentStep) {
		let interactionPage = ConfigData.finderSetting[idx].interactionPage;
		let appliancePopup = ConfigData.finderSetting[idx].appliancePopup;
		let htmlIdx = idx; // 항목 별 index
		if (idx > 2) { htmlIdx += 2; }// 페이지 데이터 index
		let currentKey = Object.keys(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 key 값
		let currentHtml = Object.values(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 항목 데이터
		let prevKey = Object.keys(ConfigData.htmlData)[htmlIdx - 1];
		let lastAnswerValue; // 저장된 데이터에서 마지막 value
		interaction = interactionPage; // 인터렉션 페이지 유/무

		// step1 의 Q1 key 값 담기
		if (idx === 1) {
			Q1Key = _select[prevKey][0];
		}

		// step1 에서 선택된 데이터 추출
		let selectObject = ConfigData.object.filter(item => {
			return item.key === Q1Key
		});

		// 해당 스텝 정보
		console.log('----step--------------------------------------------------------------');
		console.log('idx (현재스텝 index) : ', idx);
		console.log('interactionPage (인터렉트 페이지 유/ 무) : ', interactionPage);
		console.log('htmlIdx : ', htmlIdx)
		console.log('현재 스텝의 key : ', currentKey)
		console.log('현재 스텝의 데이터 : ', currentHtml)
		console.log('_select (사용자가 선택한 스텝별 value) : ', _select);
		console.log('_stepProduct (스텝별 매칭된 제품) : ', _stepProduct);

		// active 풀기
		$('#nextStepBtn').removeClass('active');
		$('.show_now_wrap').removeClass('active');

		// step class 변경
		$('#quickFinder').removeClass();
		$('#quickFinder').addClass(ConfigData.finderSetting[idx].finderStep);

		// 해당 질문 뿌리기
		$('.que_title').text(ConfigData.finderSetting[idx].questionText);
		$('.qna_description strong').text(ConfigData.finderSetting[idx].questionText);

		// 해당 이미지 뿌리기
		$('#qnaImgWrap img').attr('alt', ConfigData.finderSetting[idx].defaultScreenImg);
		// $('#qnaImgWrap').attr('style', 'background-image:url'  ConfigData.finderSetting[idx].defaultScreenImg);
		// console.log(ConfigData.finderSetting[idx].defaultScreenImg)


		// 팝업창 해당 이미지로 변경
		if (appliancePopup) {
			$('.popup_step03').css('display', 'block');
			$('.popup_step03 .' + selectObject[0].class).css('display', 'block');
		} else {
			$('.popup_step03').css('display', 'none');
			$('.popup_step03 .popup_wrap div').css('display', 'none');
		}

		// 항목 버튼 초기화 
		$('#selectWrap').html('<button type="button" class="caution_open_btn">Click here for a guide to dimensions and measurement.</button><p class="select_tit"><em>You Can Select Multiple Choices.</em></p>');
		$('#selectWrap').append('<ol></ol>');

		// step 3 제외
		if (idx !== 2) {
			for (let i = 0; i < currentHtml.length; i++) {
				$('#selectWrap ol').append('<li><button class="answer_btn" type="button" data-value="' + currentHtml[i].value + '"> <i></i> <p> ' + currentHtml[i].content + '</p></button></li>');
			}
		} else {
			// step 3 데이터 뿌리기
			let liHtml = '';
			while (htmlIdx < 5) { // 2, 3, 4 연속 출력
				let currentHtml = Object.values(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 항목 데이터
				let buttonHtml = '';
				for (let i = 0; i < currentHtml.length; i++) {
					buttonHtml += '<button class="answer_btn" type="button" data-value="' + currentHtml[i].value + '"> <i></i> <p> ' + currentHtml[i].content + '</p></button>';
				}
				liHtml += '<li><span>' + ConfigData.finderSetting[idx].key[htmlIdx - 2] + ' <em>content 내용 입력</em> </span> <div>' + buttonHtml + ' </div></li> ';
				htmlIdx++;
			}
			$('#selectWrap ol').append(liHtml);
		}


		// disabled 가르기
		// _stepProduct 제품 기준으로 마크업 생성 (disabled 유/무)
		if (idx === 1) {
			$('#qnaImgWrap img').attr('alt', selectObject[0].screenImg.changeScreenImg);
			$('#selectWrap ol').find('li').find('button').attr('disabled', true); // default disabled true
			for (let i = 0; i < _stepProduct[prevKey].length; i++) {
				let productValue = _stepProduct[prevKey][i][currentKey];
				// 선택 제품의 value가 450이하, 500~600, 600이상 유무를 판단 하여 있을때는 disabled false
				if (productValue <= 450) {
					$('#selectWrap ol').find('li').eq(0).find('button').attr('disabled', false);
				} else if (productValue >= 500 && productValue <= 600) {
					$('#selectWrap ol').find('li').eq(1).find('button').attr('disabled', false);
				} else if (productValue >= 600) {
					$('#selectWrap ol').find('li').eq(2).find('button').attr('disabled', false);
				}
			}
		} else if (idx === 2) {
			htmlIdx = 2;
			$('#qnaImgWrap img').attr('alt', selectObject[0].screenImg.changeScreenImg);
			$('#selectWrap ol').find('li').find('button').attr('disabled', true); // default disabled true
			while (htmlIdx < 5) { // 2, 3, 4 연속 출력
				for (let i = 0; i < _stepProduct[prevKey].length; i++) {
					let currentKey = Object.keys(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 key 값
					let productValue = _stepProduct[prevKey][i][currentKey];

					// // 1. 3_1 이 760이상인지 아닌지 판단
					if (htmlIdx === 2) {
						if (productValue <= 760) {
							$('#selectWrap ol').find('li').eq(0).find('button').eq(0).attr('disabled', false);
						} else {
							$('#selectWrap ol').find('li').eq(0).find('button').eq(1).attr('disabled', false);
						}
					} else if (htmlIdx === 3) {
						// 2. 3_2 이 600이상, 600~900, 900이상인지 판단
						if (productValue <= 600) {
							$('#selectWrap ol').find('li').eq(1).find('button').eq(0).attr('disabled', false);
						} else if (productValue >= 600 && productValue <= 900) {
							$('#selectWrap ol').find('li').eq(1).find('button').eq(1).attr('disabled', false);
						} else if (productValue >= 900) {
							$('#selectWrap ol').find('li').eq(1).find('button').eq(2).attr('disabled', false);
						}
					} else if (htmlIdx === 4) {
						// 3. 3_3 이 1800이하, 1800~2000, 2000이상인지 판단
						if (productValue <= 1800) {
							$('#selectWrap ol').find('li').eq(2).find('button').eq(0).attr('disabled', false);
						} else if (productValue >= 1800 && productValue <= 2000) {
							$('#selectWrap ol').find('li').eq(2).find('button').eq(1).attr('disabled', false);
						} else if (productValue >= 2000) {
							$('#selectWrap ol').find('li').eq(2).find('button').eq(2).attr('disabled', false);
						}
					}
				}
				htmlIdx++;
			}
		}

		if (judgmentStep === 'backStep') {
			$('.que_title').css('display', 'none');
			$('.qna_description').css('display', 'block');
			$('#nextStepBtn').addClass('active');
			$('.show_now_wrap').addClass('active');

			// 이후 데이터 삭제
			delete _stepProduct[Object.keys(ConfigData.htmlData)[htmlIdx + 1]]; // 제품  데이터 삭제
			delete _select[Object.keys(ConfigData.htmlData)[htmlIdx + 1]]; // 선택한 select 데이터 삭제

			// 버튼 value와 저장된 value와 같으면 active 
			if (idx !== 2) {
				$('.answer_btn').each(function () {
					let _thisValue = $(this).data('value');
					// 현재 선택한 value 값 가져오기
					for (let i = 0; i < _select[currentKey].length; i++) {
						// 매칭해서 추출
						if (_select[currentKey][i] === _thisValue) {
							$(this).addClass('active')
						}
					}
				});
				lastAnswerValue = _select[currentKey][_select[currentKey].length - 1]; //선택된 마지막 value
			}

			sprayData(idx, currentHtml, lastAnswerValue); // 선택한 항목의 대한 데이터 뿌리기
		} else {
			$('.que_title').css('display', 'block');
			$('.qna_description').css('display', 'none');
		}

		answerSelectEvent(idx, htmlIdx, judgmentStep, selectObject); // 항목 클릭 함수
	}

	function answerSelectEvent(idx, htmlIdx, judgmentStep, selectObject) {
		let lastAnswerValue; // 저장된 데이터에서 마지막 value
		let currentKey = Object.keys(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 key 값
		let currentHtml = Object.values(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 항목 데이터
		let prevKey = Object.keys(ConfigData.htmlData)[htmlIdx - 1];
		let _valArray = []; // 현재 클릭한 value 배열
		let _MultiplevalArray = [[], [], []]; // step 3의 value 배열


		// 배열에 값이 들어있지 않을때 _select value 값을 넣음 (back 클릭시 해당되는 조건)
		if (_select[currentKey] !== undefined) {
			_valArray = _select[currentKey];
		}


		// 이전 스텝
		if (judgmentStep !== 'backStep') {
			$('.answer_btn').removeClass('active');
		} else {
			$('#nextStepBtn').removeClass('on');
			$('#shopNowBtn').removeClass('on');
		}


		// 항목 클릭 
		$('.answer_btn').on('click', function () {
			console.log('항목클릭!------------------------------------------------------------')
			let _this = $(this);
			let _selectValue = _this.data('value');
			let _currentAry = []; // 현재스텝에서만 매칭된 제품 배열

			// 항목 매칭된 데이터 뿌리기 & 선택된 데이터 push
			if (idx === 0) {
				// button active 
				$('.answer_btn').removeClass('active');
				_this.addClass('active');

				_select[currentKey] = []; // 배열 초기화
				_select[currentKey] = [_selectValue]; // push
				lastAnswerValue = _selectValue; // 마지막 선택한 값
				console.log('선택된 마지막 value : ', lastAnswerValue);

				let selectObject = ConfigData.object.filter(item => {
					return item.key === _select[currentKey][0]
				});

				_selectData = selectObject;
			} else {
				// button active
				if (!_this.hasClass('active')) {
					_this.addClass('active');
				} else {
					_this.removeClass('active');
				}
			}


			if (idx !== 0 && idx !== 2) {
				// value 저장 배열에서 현재 선택된 value 와 중복되는 데이터 제거
				_valArray.forEach(function (item, i) {
					if (item === _selectValue) {
						_valArray.splice(i, 1);
					}
				});

				// 선택된 value push
				if (_this.hasClass('active')) {
					_valArray.push(_selectValue)
				}

				console.log(_valArray)

				_select[currentKey] = _valArray;
				lastAnswerValue = _select[currentKey][_select[currentKey].length - 1]; //선택된 마지막 value
				console.log('선택된 마지막 value : ', lastAnswerValue);
			}



			if (idx === 2) {
				let currentKey = Object.keys(ConfigData.htmlData)[_this.parents('li').index() + 2]; // 현재 스텝의 key 값
				// li 갯수만큼 for 문 실행
				for (let i = 0; i < $('#selectWrap ol li').length; i++) {
					// value 저장 배열에서 현재 선택된 value 와 중복되는 데이터 제거
					_MultiplevalArray[i].forEach(function (item, index) {
						if (item === _selectValue) {
							_MultiplevalArray[i].splice(index, 1);
						}
					});
					// 선택된 value push
					if (_this.hasClass('active')) {
						if (_this.parents('li').index() === i) {
							_MultiplevalArray[i].push(_selectValue);
							_select[currentKey] = _MultiplevalArray[i];
						}
					}
				}
			}


			// 항목을 선택하지 않았을 때 현재 제품의 데이터 초기화
			for (let i = 0; i < Object.keys(_select).length; i++) {
				if (Object.values(_select)[i].length < 1) {
					delete _select[Object.keys(_select)[i]];
				}
			}

			// 사용자가 선택한 value 값과 product 의 value 값이 매칭되는 product 제품 추출
			console.log(_select[currentKey])
			if (idx === 0) {
				// 현재 선택한 배열의 갯수만큼 for 문 실행
				for (let i = 0; i < _select[currentKey].length; i++) {
					// 제품 갯수만큼 for 문 실행
					for (let key in product) {

						if (product[key][currentKey] === _select[currentKey][i]) {
							// let proKey = {};
							// proKey[key] = product[key];
							// _currentAry.push(proKey);
							_currentAry.push(product[key]);
							// productName = push(key);
							_stepProduct[currentKey] = _currentAry;
						}
					}
				}
			} else if (idx === 1) {
				// 현재 선택된 select 값과 현재 매칭된 value 값을 판단해서 제품 push 하기
				if (_select[currentKey] !== undefined) { // 값이 있을때 실행
					for (let i = 0; i < _select[currentKey].length; i++) {
						// 선택된 product 갯수만큼 for 문 실행
						for (let j = 0; j < _stepProduct[prevKey].length; j++) {
							let productValue = _stepProduct[prevKey][j][currentKey];
							// step 2 의 조건에 매칭 되는 제품 _array 에 push

							if (_select[currentKey][i] === currentHtml[0].value) {
								if (productValue <= 450) {
									// console.log(productValue)
									_currentAry.push(_stepProduct[prevKey][j]);
									_stepProduct[currentKey] = _currentAry;
								}
							} else if (_select[currentKey][i] === currentHtml[1].value) {
								if (productValue >= 500 && productValue <= 600) {
									_currentAry.push(_stepProduct[prevKey][j]);
									_stepProduct[currentKey] = _currentAry;
								}
							} else if (_select[currentKey][i] === currentHtml[2].value) {
								if (productValue >= 600) {
									_currentAry.push(_stepProduct[prevKey][j]);
									_stepProduct[currentKey] = _currentAry;
								}
							}
						}
					}
				}
			} else if (idx === 2) {
				let prevKey = Object.keys(ConfigData.htmlData)[1]; // 이전 스텝에서 추출된 제품 키 (Q2)
				let keyNum = []; // 선택한 키값 추출 (Q3_1, Q3_2, Q3_3)

				// 선택된 항목의 key 값 추출
				for (let i = 0; i < Object.keys(_select).length; i++) {
					if (i !== 0 && i !== 1) {
						keyNum.push(Object.keys(_select)[i]);
					}
				}

				let htmlData = ConfigData.htmlData;

				/* 
					1. Q3_2 value를 선택했다면, Q3_2 (조건)에 해당되는 product 모두 매칭된 제품 배열에 push 한다.
					ex ) Q3_1_value1,  Q3_2_value1, Q3_3_value1
							이렇게 선택했다면 
							무슨 항목?(key) 을 선택했는지 항목 값을 먼저 판단하기
							항목의 값(key) 을 매칭시켜서 맞는 값을 제품 필터 배열에 push 한다.
	
					2. 제품을 전체 다시 돌려서 마크업과 매칭 후 없는 데이터는 diabled 한다.
				*/
				/* 
					Q3_1_value1 / 760이하
					Q3_1_value2 / 760이상
	
					Q3_2_value1 / 600이하 ✔  
					Q3_2_value2 / 600~900
					Q3_2_value3 / 900이상
	
					Q3_3_value1 / 1800이하
					Q3_3_value2 / 1800~2000
					Q3_3_value3 / 2000이상
				*/

				let resultBin = [];
				let bin = [];

				// 선택한 항목의 key 값 갯수 만큼 for 문 실행
				for (let j = 0; j < keyNum.length; j++) {

					// 선택한 항목 갯수만큼 for 문 실행
					for (let i = 0; i < _select[keyNum[j]].length; i++) {
						let _currentVal = _select[keyNum[j]][i]; // 선택한 value 값

						// 이전 선텍한 step 제품에서 push
						for (let p = 0; p < _stepProduct[prevKey].length; p++) {
							// console.log(_stepProduct[prevKey][p]) // 제품 가져오기

							let valueNum = _stepProduct[prevKey][p][keyNum[j]]; //제품 value

							// depth
							if (_currentVal === htmlData.Q3_1[0].value) {
								if (valueNum <= 760) {
									console.log('760이하')
									console.log(_stepProduct[prevKey][p]);
								}
							} else if (_currentVal === htmlData.Q3_1[1].value) {
								if (valueNum >= 760) {
									console.log('760이상')
									console.log(_stepProduct[prevKey][p]);
									// resultBin = _stepProduct[prevKey][p];
									bin.push(_stepProduct[prevKey][p])
								}
							}

							// width
							if (_currentVal === htmlData.Q3_2[0].value) {
								if (valueNum <= 600) {
									console.log('600이하')
									console.log(_stepProduct[prevKey][p]);
									bin.push(_stepProduct[prevKey][p])
								}
							} else if (_currentVal === htmlData.Q3_2[1].value) {
								if (valueNum >= 600 && valueNum <= 900) {
									console.log('600~900')
									console.log(_stepProduct[prevKey][p]);
									bin.push(_stepProduct[prevKey][p])
								}
							} else if (_currentVal === htmlData.Q3_2[2].value) {
								if (valueNum >= 900) {
									console.log('900이상')
									console.log(_stepProduct[prevKey][p]);
									bin.push(_stepProduct[prevKey][p])
								}
							}

							// height
							if (_currentVal === htmlData.Q3_3[0].value) {
								if (valueNum >= 1800) {
									console.log('1800이하')
									console.log(_stepProduct[prevKey][p]);
									bin.push(_stepProduct[prevKey][p])
								}
							} else if (_currentVal === htmlData.Q3_3[1].value) {
								if (valueNum >= 1800 && valueNum <= 2000) {
									console.log('1800~2000')
									console.log(_stepProduct[prevKey][p]);
									bin.push(_stepProduct[prevKey][p])
								}
							} else if (_currentVal === htmlData.Q3_3[2].value) {
								if (valueNum >= 2000) {
									console.log('2000이상')
									console.log(_stepProduct[prevKey][p]);
									bin.push(_stepProduct[prevKey][p])
								}
							}
						}

					}
				}
				// console.log(resultBin)
				console.log(bin)
			}

			console.log('_select (사용자가 선택한 스텝별 value) : ', _select);
			console.log('_stepProduct (최종 선택된 제품) : ', _stepProduct)

			sprayData(idx, currentHtml, lastAnswerValue); // 선택한 항목의 대한 데이터 뿌리기


			// 하나 이상 선택시 active 되는 부분
			if ($('.answer_btn.active').length > 0) {
				$('.que_title').css('display', 'none');
				$('.qna_description').css('display', 'block');
				$('#nextStepBtn').addClass('active');
				// $('.show_now_wrap').addClass('active');
			} else {
				$('.que_title').css('display', 'block');
				$('.qna_description').css('display', 'none');
				$('#nextStepBtn').removeClass('active');
				// $('.show_now_wrap').removeClass('active');
			}
		});
	}



	// 현재 클릭한 항목에 대한 데이터 뿌리기
	function sprayData(idx, currentHtml, lastAnswerValue) {
		// value 저장 배열의 마지막 value 값과 매칭되는 항목 데이터 가져오기
		let selectData = currentHtml.filter(item => {
			return item.value === lastAnswerValue
		});

		// 선택한 항목 데이터 뿌리기
		if ($('.answer_btn.active').length > 0) {
			// 공통 뿌리기
			if (idx === 0) {
				$('.qna_description .txt_box p').text(selectData[0].changeData.description);
				$('#qnaImgWrap img').attr('alt', selectData[0].changeData.screenImg);
			} else if (idx === 2) {
				// $('.qna_description .txt_box').text(selectData[0].description.description);
				// $('.qna_description .txt_box').text(ConfigData.finderSetting[idx].description.head);
				// console.log(selectData[0])
			} else {
				$('.qna_description .txt_box i').text(selectData[0].changeData.icon);
				$('.qna_description .txt_box p').text(selectData[0].changeData.description);
			}
		}
	}


	// 디스클레이머 닫기
	$('.disc_more_btn').on('click', function () {
		// $(this).parents('.qna_description').css('display','none');
	});

	// 사이즈 팝업 닫기
	$('.popup_close_btn').on('click', function () {
		$('.popup_step03').css('display', 'none');
		$('.popup_step03 .popup_wrap > div').css('display', 'none');
		// $(this).parents('.popup_step03 > div').css('display', 'none');
	});

	// 인터렉션 페이지 닫기
	$('.close_btn').on('click', function () {
		$('#quickFinder').css('display', 'block');
		$('.popup_step01').css('display', 'none');
		$('.popup_step01 .popup_wrap').css('display', 'none');
	});

	$('.caution_open_btn').on('click',function(){
		$('.popup_step03').css('display', 'block');
		// $('.popup_step03 .popup_wrap > div').css('display', 'none');
	});

	// 퀵파인더 start
	/* $('.btn').on('click',function(){
		stepChangeEvent(0);
	}); */

	// 결과화면
	$('#shopNowBtn').on('click', function () {
		console.log('결과화면');
	});

	stepChangeEvent(0);
}