"use strict";
var winW;
var winH;
var es_step = "Expo.ease";
var $window = $(window);
var winSc;
var htmlH;

$window.load(function () {
    htmlH = $("body").outerHeight(true);
    winSc = $(this).scrollTop();
    $window.on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
    });
    $(this).trigger("resize");
    $(window).scroll(function () {
        winSc = $(this).scrollTop();
    });
    main(); 
   //  layout();
});
function layout() {

}




function main() {
	let _select = []; // 사용자 선택한 value 
	let stepCount = [];
	let _currentProduct = [];

	// let _stepProduct = {}; // 스텝별로 추출된 제품리스트
	let interaction = ''; // 인터렉션 페이지 유/무
	// let Q1Key = ''; // 처음 선택한 제품 키 값
	// let _selectData; // 셀렉된 제품 데이터 

	const product = {
		'product1': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value3',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3'
		},
		'product2': {
			Q1: 'Q1_value2',
			Q2: 'Q2_value2',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value2',
			Q6: 'Q6_value2',
			Q7: 'Q7_value1'
		},
		'product3': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value1',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value2',
			Q4: 'Q4_value3',
			Q5: 'Q5_value2',
			Q6: 'Q6_value1',
			Q7: 'Q7_value41'
		},
		'product4': {
			Q1: 'Q1_value2',
			Q2: 'Q2_value1',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value3',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product5': {
			Q1: 'Q1_value1',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value2',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product6': {
			Q1: 'Q1_value1',
			Q2: 'Q2_value2',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value1',
			Q3_3: 'Q3_3_value2',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product7': {
			Q1: 'Q1_value2',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value1',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product8': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product9': {
			Q1: 'Q1_value2',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value3',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product10': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value1',
			Q4: 'Q4_value3',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product11': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value2',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value1',
			Q4: 'Q4_value2',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product12': {
			Q1: 'Q1_value2',
			Q2: 'Q2_value1',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value3',
			Q3_3: 'Q3_3_value2',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product13': {
			Q1: 'Q1_value1',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value2',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product14': {
			Q1: 'Q1_value2',
			Q2: 'Q2_value1',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value1',
			Q3_3: 'Q3_3_value1',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product15': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value1',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product16': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value2',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value3',
			Q3_3: 'Q3_3_value2',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product17': {
			Q1: 'Q1_value1',
			Q2: 'Q2_value1',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value3',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product18': {
			Q1: 'Q1_value2',
			Q2: 'Q2_value1',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value1',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product19': {
			Q1: 'Q1_value1',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value1',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product20': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value2',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value3',
			Q3_3: 'Q3_3_value2',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product21': {
			Q1: 'Q1_value2',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value1',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product22': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value1',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product23': {
			Q1: 'Q1_value1',
			Q2: 'Q2_value2',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product24': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value1',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value2',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product25': {
			Q1: 'Q1_value2',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value1',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product26': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value2',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value3',
			Q3_3: 'Q3_3_value1',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product27': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value1',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value3',
			Q3_3: 'Q3_3_value1',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product28': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value1',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product29': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value2',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product30': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value3',
			Q3_1: 'Q3_1_value1',
			Q3_2: 'Q3_2_value2',
			Q3_3: 'Q3_3_value3',
			Q4: 'Q4_value1',
			Q5: 'Q5_value1',
			Q6: 'Q6_value2',
			Q7: 'Q7_value3',
		},
		'product31': {
			Q1: 'Q1_value3',
			Q2: 'Q2_value1',
			Q3_1: 'Q3_1_value3',
			Q3_2: 'Q3_2_value1',
			Q3_3: 'Q3_3_value1',
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
		// 페이지 데이터 정의
		htmlData: [
			[
				{
					key: 'Q1',
					value: 'Q1_value1',
					content: 'Q1_content1',
					changeData: {
						description: 'step01 - 항목 1 디스크립션',
						icon: 'step01 - 항목 1 아이콘',
					}
				},
				{
					key: 'Q1',
					value: 'Q1_value2',
					content: 'Q1_content2',
					changeData: {
						description: 'step01 - 항목 2 디스크립션',
						icon: 'step01 - 항목 2 아이콘',
					}
				},
				{
					key: 'Q1',
					value: 'Q1_value3',
					content: 'Q1_content3',
					changeData: {
						description: 'step01 - 항목 3 디스크립션',
						icon: 'step01 - 항목 3 아이콘',
					}
				},
			],
			[
				{
					key: 'Q2',
					value: 'Q2_value1',
					content: '450이하',
					changeData: {
						description: 'step02 - 항목 1 디스크립션',
						icon: 'step02 - 항목 1 아이콘',
					}
				},
				{
					key: 'Q2',
					value: 'Q2_value2',
					content: '500~600',
					changeData: {
						description: 'step02 - 항목 2 디스크립션',
						icon: 'step02 - 항목 2 아이콘',
					}
				},
				{
					key: 'Q2',
					value: 'Q2_value3',
					content: '600이상',
					changeData: {
						description: 'step02 - 항목 3 디스크립션',
						icon: 'step02 - 항목 3 아이콘',
					}
				},
			],
			[
				{
					key: 'Q3_1',
					value: 'Q3_1_value1',
					content: '760이하',
					changeData: {
						description: {
							head: 'step03 - 항목 디스크립션',
							detail: 'step03 - 항목 디테일 디스크립션'
						},
						icon: 'step03 - 항목 아이콘',
					}
				}
			],
			[
				{
					key: 'Q3_2',
					value: 'Q3_2_value1',
					content: '600이하',
				},
				{
					key: 'Q3_2',
					value: 'Q3_2_value2',
					content: '600~900',
				},
				{
					key: 'Q3_2',
					value: 'Q3_2_value3',
					content: '900이상',
				},
			],
			[
				{
					key: 'Q3_3',
					value: 'Q3_3_value1',
					content: '1800이하',
				},
				{
					key: 'Q3_3',
					value: 'Q3_3_value2',
					content: '1800~2000',
				},
				{
					key: 'Q3_3',
					value: 'Q3_3_value3',
					content: '2000이상',
				},
			],
			[
				{
					key: 'Q4',
					value: 'Q4_value1',
					content: 'Q4_content1',
					changeData: {
						description: 'step04 - 항목 1 디스크립션',
						icon: 'step04 - 항목 1 아이콘',
						screenImg: 'step04 - 항목 1 이미지',
					}
				},
				{
					key: 'Q4',
					value: 'Q4_value2',
					content: 'Q4_content2',
					changeData: {
						description: 'step04 - 항목 2 디스크립션',
						icon: 'step04 - 항목 2 아이콘',
						screenImg: 'step04 - 항목 2 이미지',
					}
				},
				{
					key: 'Q4',
					value: 'Q4_value3',
					content: 'Q4_content3',
					changeData: {
						description: 'step04 - 항목 3 디스크립션',
						icon: 'step04 - 항목 3 아이콘',
						screenImg: 'step04 - 항목 3 이미지',
					}
				},
				{
					key: 'Q4',
					value: 'Q4_value4',
					content: 'Q4_content4',
					changeData: {
						description: 'step04 - 항목 4 디스크립션',
						icon: 'step04 - 항목 4 아이콘',
						screenImg: 'step04 - 항목 4 이미지',
					}
				},
			],
		],
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
			// if (interaction && $('.answer_btn.active').length > 0) {
			// 	$('#quickFinder').css('display', 'none');
			// 	$('.popup_step01').css('display', 'block');
			// 	$('.popup_step01 .' + _selectData[0].class).css('display', 'block');
			// }
			// if (idx < ConfigData.finderSetting.length - 1 && $(this).hasClass('active')) {
			if (idx < ConfigData.finderSetting.length - 1) {
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
		let interactionPage = ConfigData.finderSetting[idx].interactionPage; //인터렉션 팝업 유/무
		let appliancePopup = ConfigData.finderSetting[idx].appliancePopup;
		let htmlIdx = idx; // 항목 별 index
		if (idx > 2) { htmlIdx += 2; }// 페이지 데이터 index
		let currentKey = Object.keys(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 key 값
		let currentHtml = ConfigData.htmlData[htmlIdx]; // 현재 스텝의 항목 데이터
		let prevKey = Object.keys(ConfigData.htmlData)[htmlIdx - 1];
		let lastAnswerValue; // 저장된 데이터에서 마지막 value
		let _array = []; // 스텝별 제품 추출

		// interaction = interactionPage; // 인터렉션 페이지 유/무

		// step1 의 Q1 key 값 담기
		// if (idx === 1) {
		// 	Q1Key = _select[prevKey][0];
		// }

		// step1 에서 선택된 데이터 추출
		// let selectObject = ConfigData.object.filter(item => {
		// 	return item.key === Q1Key
		// });

		// 해당 스텝 정보
		// console.log('----step--------------------------------------------------------------');
		// console.log('idx (현재스텝 index) : ', idx);
		// console.log('interactionPage (인터렉트 페이지 유/ 무) : ', interactionPage);
		// console.log('htmlIdx : ', htmlIdx)
		// console.log('현재 스텝의 key : ', currentKey)
		// console.log('현재 스텝의 데이터 : ', currentHtml)
		// console.log('_select (사용자가 선택한 스텝별 value) : ', _select);
		// console.log('_stepProduct (스텝별 매칭된 제품) : ', _stepProduct);


		judgmentStep === 'backStep' && _currentProduct.pop(); // 앞전 데이터 삭제


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
		// if (appliancePopup) {
		// 	$('.popup_step03').css('display', 'block');
		// 	$('.popup_step03 .' + selectObject[0].class).css('display', 'block');
		// } else {
		// 	$('.popup_step03').css('display', 'none');
		// 	$('.popup_step03 .popup_wrap div').css('display', 'none');
		// }

		// 항목 버튼 초기화 
		$('#selectWrap').html('<button type="button" class="caution_open_btn">Click here for a guide to dimensions and measurement.</button><p class="select_tit"><em>You Can Select Multiple Choices.</em></p>');
		$('#selectWrap').append('<ol></ol>');

		// step 3 제외
		if (idx !== 2) {
			for (let i = 0; i < currentHtml.length; i++) {
				$('#selectWrap ol').append('<li><button class="answer_btn" type="button" data-key="' + currentHtml[i].key + '"  data-value="' + currentHtml[i].value + '"> <i></i> <p> ' + currentHtml[i].content + '</p></button></li>');
			}
		} else {
			// step 3 데이터 뿌리기
			let liHtml = '';
			while (htmlIdx < 5) { // 2, 3, 4 연속 출력
				let currentHtml = ConfigData.htmlData[htmlIdx]; // 현재 스텝의 항목 데이터
				let buttonHtml = '';
				for (let i = 0; i < currentHtml.length; i++) {
					buttonHtml += '<button class="answer_btn" type="button" data-key="' + currentHtml[i].key + '" data-value="' + currentHtml[i].value + '"> <i></i> <p> ' + currentHtml[i].content + '</p></button>';
				}
				liHtml += '<li><span>' + ConfigData.finderSetting[idx].key[htmlIdx - 2] + ' <em>content 내용 입력</em> </span> <div>' + buttonHtml + ' </div></li> ';
				htmlIdx++;
			}
			$('#selectWrap ol').append(liHtml);
		}

		console.log('_select : ', _select);
		console.log('stepCount : ', stepCount);








		if (idx === 1) {
			console.log('step2 다');
			// product 갯수만큼 for 문 실행
			if (_currentProduct.length < 1) {
				for (let key in product) {
					// 마지막에 선택한 value 값 추출
					for (let i = 0; i < stepCount[stepCount.length - 1]; i++) {
						let selectKey = _select[_select.length - (1 + i)].split('=')[0]; // key
						let selectValue = _select[_select.length - (1 + i)].split('=')[1]; // value

						// value 값 비교
						if (product[key][selectKey] === selectValue) {
							_array.push(product[key])
						}
					}
				}
				_currentProduct.push(_array);
			}
		}
		if (idx !== 0 && idx > 1) {
			if (idx === 3) {
				console.log('step 해당되나요???????')

			} else {
				// console.log('step2 이상');
				let _lastPro = _currentProduct[_currentProduct.length - 1];
				// 추출된 마지막 제품 갯수만큼 for 문 실행 
				// console.log(_lastPro)
				for (let i = 0; i < _lastPro.length; i++) {
					// 마지막에 선택한 value 값 추출
					for (let j = 0; j < stepCount[stepCount.length - 1]; j++) {
						let selectKey = _select[_select.length - (1 + j)].split('=')[0]; // key
						let selectValue = _select[_select.length - (1 + j)].split('=')[1]; // value

						// value 값 비교
						if (_lastPro[i][selectKey] === selectValue) {
							_array.push(_lastPro[i])
						}
					}
				}
				_currentProduct.push(_array);
				console.log('키키키키')
			}
		}


		// disabled 가르기
		// console.log(_currentProduct)

		if (idx !== 0) {
			var dataValue = [];
			$('#selectWrap ol').find('li').find('button').attr('disabled', true); // default disabled true
			// console.debug('dkssuddfskljflsdkfjl')
			let _lastPro = _currentProduct[_currentProduct.length - 1];
			// 추출된 마지막 제품 갯수만큼 for 문 실행 
			for (let i = 0; i < _lastPro.length; i++) {
				// console.log(_lastPro[i]);
				// console.log('Q' + (idx + Number(1)))
				dataValue.push(_lastPro[i]['Q' + (idx + Number(1))])
				// console.log(_lastPro[i]['Q' + (idx + Number(1))]);
				// $('.answer_btn[data-value="' + _lastPro[i]['Q' + (idx + Number(1))] + '"]').attr('disabled', false);
				// console.log($('.answer_btn[data-value="' + _lastPro[i]['Q' + (idx + Number(1))] + '"]'))
			}
			let _arrayValue = Array.from(new Set(dataValue));
			// 뿌리는거 
			for (let i = 0; i < _arrayValue.length; i++) {
				$('.answer_btn[data-value="' + _arrayValue[i]).attr('disabled', false);
			}

			if (idx === 2) {
				// console.log('step 3')
			}
		}






















		if (judgmentStep === 'backStep') {
			$('.que_title').css('display', 'none');
			$('.qna_description').css('display', 'block');
			$('#nextStepBtn').addClass('active');
			$('.show_now_wrap').addClass('active');

			// 앞전 스텝에서 항목을 클릭 했을 때 (값이 있을 경우) 선택한 항목/카운트 배열 삭제
			if (stepCount[idx + 1] !== undefined || stepCount[idx + 1] === 0) {
				// _select 앞전 데이터 삭제
				for (let i = 0; i < stepCount[stepCount.length - 1]; i++) {
					_select.pop();
				}
				// 앞전 카운트 삭제
				stepCount.pop();
			}

			// 현재 선택된 카운트 만큼 for문 실행 
			for (let i = 0; i < stepCount[stepCount.length - 1]; i++) {
				let currentValue = _select[_select.length - (i + 1)].split('=')[1]; // key=value에서 value 값만 추출
				// 버튼 value와 저장된 value와 같으면 active 
				$('.answer_btn').each(function () {
					let _thisValue = $(this).data('value');
					if (currentValue === _thisValue) {
						$(this).addClass('active')
					}
				});
			}
			lastAnswerValue = _select[_select.length - 1].split('=')[1]; //선택된 마지막 value 값 추출

			sprayData(idx, currentHtml, lastAnswerValue); // 선택한 항목의 대한 데이터 뿌리기
		} else {
			$('.que_title').css('display', 'block');
			$('.qna_description').css('display', 'none');
		}



		console.log('_array : ', _array)
		console.log('_currentProduct : ', _currentProduct)







		// answerSelectEvent(idx, htmlIdx, judgmentStep, selectObject); // 항목 클릭 함수
		answerSelectEvent(idx, htmlIdx, judgmentStep); // 항목 클릭 함수
	}

	function answerSelectEvent(idx, htmlIdx, judgmentStep, selectObject) {
		let lastAnswerValue; // 저장된 데이터에서 마지막 value
		let currentHtml = ConfigData.htmlData[htmlIdx]; // 현재 스텝의 항목 데이터

		// let _valArray = {}; // 현재 클릭한 value 배열
		// let currentKey = Object.keys(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 key 값
		// let prevKey = Object.keys(ConfigData.htmlData)[htmlIdx - 1];
		// let _MultiplevalArray = [[], [], []]; // step 3의 value 배열

		// 이전 스텝
		if (judgmentStep !== 'backStep') {
			$('.answer_btn').removeClass('active');
		} else {
			$('#nextStepBtn').removeClass('on');
			$('#shopNowBtn').removeClass('on');
		}

		// 항목 클릭 
		$('.answer_btn').on('click', function () {
			console.log('버튼 클릭 >')
			let _this = $(this);
			// let _currentAry = []; // 현재스텝에서만 매칭된 제품 배열
			let _currentKeyValue = _this.data('key') + '=' + _this.data('value');


			// 항목 매칭된 데이터 뿌리기 & 선택된 데이터 push
			if (idx === 0) {
				// button active 
				$('.answer_btn').removeClass('active');
				_this.addClass('active');

				_select = [];
				_select.push(_currentKeyValue); // push
			} else {
				// button active
				if (!_this.hasClass('active')) {
					_this.addClass('active');
				} else {
					_this.removeClass('active');
				}
			}

			// _select에서 현재 선택된 key,value 중복되는 데이터 제거
			_select.forEach(function (item, i) {
				item === _currentKeyValue && _select.splice(i, 1)
			});

			// 선택된 value push
			if (_this.hasClass('active')) {
				_select.push(_currentKeyValue);
			}

			// 카운팅 갯수 push 
			if (stepCount[idx] !== undefined) {
				stepCount[idx] = $('.answer_btn.active').length;
			} else {
				stepCount.push($('.answer_btn.active').length);
			}

			console.log('stepCount : ', stepCount)
			console.log('_select : ', _select)

			lastAnswerValue = _select[_select.length - 1].split('=')[1]; //선택된 마지막 value 값 추출
			// lastAnswerValue = _selectValue; // 마지막 선택한 값
			sprayData(idx, currentHtml, lastAnswerValue); // 선택한 항목의 대한 데이터 뿌리기


			// 하나 이상 선택시 active 되는 부분
			if ($('.answer_btn.active').length > 0) {
				$('.que_title').css('display', 'none');
				$('.qna_description').css('display', 'block');
				$('#nextStepBtn').addClass('active');
				$('.show_now_wrap').addClass('active');
			} else {
				$('.que_title').css('display', 'block');
				$('.qna_description').css('display', 'none');
				$('#nextStepBtn').removeClass('active');
				$('.show_now_wrap').removeClass('active');
			}
		});
	}

	// 현재 클릭한 항목에 대한 데이터 뿌리기
	function sprayData(idx, currentHtml, lastAnswerValue) {
		// value 저장 배열의 마지막 value 값과 매칭되는 항목 데이터 가져오기
		let selectData = currentHtml.filter(item => {
			return item.value === lastAnswerValue
		});

		// console.log('selectData : ', selectData)

		// 선택한 항목 데이터 뿌리기
		if ($('.answer_btn.active').length > 0) {

			// $('.qna_description .txt_box p').text(selectData[0].changeData.description);
			// 공통 뿌리기
			if (idx === 0) {
				$('.qna_description .txt_box p').text(selectData[0].changeData.description);
				$('#qnaImgWrap img').attr('alt', selectData[0].changeData.screenImg);
			} else if (idx === 2) {
				let currentHtml = ConfigData.htmlData[2]; // 현재 스텝의 항목 데이터
				$('.qna_description .txt_box p').text(currentHtml[0].changeData.description.head);
				$('.qna_description .txt_box i').text(currentHtml[0].changeData.icon);
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

	$('html,body').on('click', 'caution_open_btn', function () {
		$('.popup_step03').css('display', 'block');
	});

	// 퀵파인더 start
	/* $('.btn').on('click',function(){
		stepChangeEvent(0);
	}); */

	// 결과화면
	$('#shopNowBtn').on('click', function () {
		let result = '';
		for (let i = 0; i < _select.length; i++) {
			if (i !== _select.length - 1) {
				result += _select[i] + '&'
			} else {
				result += _select[i]
			}
		}
		console.debug('result : ', '?' + result);
	});

	stepChangeEvent(0);
}
function main_220713() {
	let _select = {}; // 사용자 선택한 value 
	let _stepProduct = {}; // 스텝별로 추출된 제품리스트
	let _result = {}; // 마지막 최종 결과 데이터 추출 배열
	let interaction = ''; // 인터렉션 페이지 유/무
	let Q1Key = ''; // 처음 선택한 제품 키 값
	let _selectData; // 셀렉된 제품 데이터 

	const data = {
		type: 'value1',
		Capacity : 600,
		width: 700,
		depth : 500,
		height: 450,
		Smart_Technology : 'Y',
		Energy_Grade: 'A',
		Color: 'white',
		Compressor: ['value1','value2','value3'],
		Feature: ['value1','value2','value3'],
	};



	const product = {
		'product1': {
			key: 'Q1_value1',
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
		// 페이지 데이터 정의
		htmlData: {
			'Q1': [
				{

					type : '',
					key : '',
					value: 'Q1_value1',
					content: 'Q1_content1',
					changeData: {
						description: 'step01 - 항목 1 디스크립션',
						icon: 'step01 - 항목 1 아이콘',
						screenImg: 'step01 - 이미지 1',
					}
				},
				{
					type : '',
					key : '',
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
						screenImg: 'step04 - 항목 1 이미지',
					}
				},
				{
					value: 'Q4_value2',
					content: 'Q4_content2',
					changeData: {
						description: 'step04 - 항목 2 디스크립션',
						icon: 'step04 - 항목 2 아이콘',
						screenImg: 'step04 - 항목 2 이미지',
					}
				},
				{
					value: 'Q4_value3',
					content: 'Q4_content3',
					changeData: {
						description: 'step04 - 항목 3 디스크립션',
						icon: 'step04 - 항목 3 아이콘',
						screenImg: 'step04 - 항목 3 이미지',
					}
				},
				{
					value: 'Q4_value4',
					content: 'Q4_content4',
					changeData: {
						description: 'step04 - 항목 4 디스크립션',
						icon: 'step04 - 항목 4 아이콘',
						screenImg: 'step04 - 항목 4 이미지',
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
						screenImg: 'step06 - 항목 1 이미지',
					}
				},
				{
					value: 'Q5_value2',
					content: 'Q5_content2',
					changeData: {
						description: 'step05 - 항목 2 디스크립션',
						icon: 'step05 - 항목 2 아이콘',
						screenImg: 'step06 - 항목 2 이미지',
					}
				},
				{
					value: 'Q5_value3',
					content: 'Q5_content3',
					changeData: {
						description: 'step05 - 항목 3 디스크립션',
						icon: 'step05 - 항목 3 아이콘',
						screenImg: 'step06 - 항목 3 이미지',
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
						screenImg: 'step06 - 항목 1 이미지',
					}
				},
				{
					value: 'Q6_value2',
					content: 'Q6_content2',
					changeData: {
						description: 'step06 - 항목 2 디스크립션',
						icon: 'step06 - 항목 2 아이콘',
						screenImg: 'step06 - 항목 2 이미지',
					}
				},
				{
					value: 'Q6_value3',
					content: 'Q6_content3',
					changeData: {
						description: 'step06 - 항목 3 디스크립션',
						icon: 'step06 - 항목 3 아이콘',
						screenImg: 'step06 - 항목 3 이미지',
					}
				},
				{
					value: 'Q6_value4',
					content: 'Q6_content4',
					changeData: {
						description: 'step06 - 항목 4 디스크립션',
						icon: 'step06 - 항목 4 아이콘',
						screenImg: 'step06 - 항목 4 이미지',
					}
				},
				{
					value: 'Q6_value5',
					content: 'Q6_content5',
					changeData: {
						description: 'step06 - 항목 5 디스크립션',
						icon: 'step06 - 항목 5 아이콘',
						screenImg: 'step06 - 항목 5 이미지',
					}
				},
				{
					value: 'Q6_value6',
					content: 'Q6_content6',
					changeData: {
						description: 'step06 - 항목 6 디스크립션',
						icon: 'step06 - 항목 6 아이콘',
						screenImg: 'step06 - 항목 6 이미지',
					}
				},
				{
					value: 'Q6_value7',
					content: 'Q6_content7',
					changeData: {
						description: 'step06 - 항목 7 디스크립션',
						icon: 'step06 - 항목 7 아이콘',
						screenImg: 'step06 - 항목 7 이미지',
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
		let interactionPage = ConfigData.finderSetting[idx].interactionPage; //인터렉션 팝업 유/무
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
			// $('.show_now_wrap').addClass('active');

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

				// console.log(_valArray)
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

	$('html,body').on('click', 'caution_open_btn', function () {
		console.log('안녕?')
		$('.popup_step03').css('display', 'block');
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
function maasdasasin1() {
   // 사용자가 선택한 스텝별 value 값
   let _result = {
      Q1: [],
      Q2: [],
      Q3: [],
      Q3_1: [],
      Q3_2: [],
      Q3_3: [],
      Q4: [],
      Q5: [],
      Q6: [],
      Q7: [],
   }

   let _showResultData = []; // 마지막 최종 결과 데이터 추출 배열

   // 제품 데이터 예시 
   const productObject = [
      {
         productKey: 'product01',
         data: { 
            Q1: 'step1_value1',
            Q2: 'step2_value1',
            Q3_1: 'step3_1_value1',
            Q3_2: 'step3_2_value1',
            Q3_3: 'step3_3_value1',
         }
      },
      {
         productKey: 'product02',
         data: {
            Q1: 'step1_value2',
            Q2: 'step2_value2',
            Q3_1: 'step3_1_value1',
            Q3_2: 'step3_2_value1',
            Q3_3: 'step3_3_value1',
            // Q4: ['value1', 'value3', 'value4'],
         }
      },
      {
         productKey: 'product03',
         data: {
            Q1: 'step1_value3',
            Q2: 'step2_value3',
            Q3_1: 'step3_1_value1',
            Q3_2: 'step3_2_value2',
            Q3_3: 'step3_3_value2',
            // Q4: ['value1', 'value5', 'value7'],
         }
      },
      {
         productKey: 'product04',
         data: {
            Q1: 'step1_value4',
            Q2: 'step2_value4',
            Q3_1: 'step3_1_value1',
            Q3_2: 'step3_2_value2',
            Q3_3: 'step3_3_value2',
            // Q4: ['value9', 'value1', 'value8'],
         }
      },
      /*       {
               productKey: 'product05',
               data: {
                  Q1: 'step1_value3',
                  Q2: 'step2_value1',
                  Q3: 'step3_value2',
                  Q3_1: 'step3_1_value1',
                  Q3_2: 'step3_2_value1',
                  Q3_3: 'step3_3_value2',
                  // Q4: ['value9', 'value1', 'value8'],
               }
            }, */
   ]


   //냉장고 DATA
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
            selectionsData: [
               {
                  dataValue: 'step1_value1',
                  content: 'step1_content1',
                  // 클릭시 변경되야할 데이터 항목
                  changeData: {
                     description: 'step01 - 항목 1 디스크립션',
                     screenImgUrl: 'step01 - 항목 1 이미지',
                  }
               },
               {
                  dataValue: 'step1_value2',
                  content: 'step1_content2',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step01 - 항목 2 디스크립션',
                     screenImgUrl: 'step01 - 항목 2 이미지',
                  }
               },
               {
                  dataValue: 'step1_value3',
                  content: 'step1_content3',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step01 - 항목 3 디스크립션',
                     screenImgUrl: 'step01 - 항목 3 이미지',
                  }
               },
            ],
         },
         {
            finderStep: 'step02',
            key: '',
            questionText: 'step02 - 질문?',
            defaultScreenImg: 'step02 - default 이미지',
            interactionPage: true, // 인터렉트 페이지 유/무 정의
            appliancePopup: false, // 팝업 유/무 정의
            selectionsData: [
               {
                  dataValue: 'step2_value1',
                  content: 'step2-content1',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step02 - 항목 1 디스크립션',
                     icon: 'step02 - 항목 1 아이콘',
                  }
               },
               {
                  dataValue: 'step2_value2',
                  content: 'step2-content2',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step02 - 항목 2 디스크립션',
                     icon: 'step02 - 항목 2 아이콘',
                  }
               },
               {
                  dataValue: 'step2_value3',
                  content: 'step2-content3',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step02 - 항목 3 디스크립션',
                     icon: 'step02 - 항목 3 아이콘',
                  }
               },
            ],
         },
         {
            finderStep: 'step03',
            key: '',
            questionText: 'step03 - 질문?',
            defaultScreenImg: 'step03 - default 이미지',
            interactionPage: true, // 인터렉트 페이지 유/무 정의
            appliancePopup: false, // 팝업 유/무 정의
            selectionsData: [
               {
                  category: 'depth',
                  label: '"depth 설명"',
                  item: {
                     dataValue: ['step3_1_value1', 'step3_1_value2',],
                     content: ['step3_1_content1', 'step3_1_content2',],
                  }
               },
               {
                  category: 'width',
                  label: '"width 설명"',
                  item: {
                     dataValue: ['step3_2_value1', 'step3_2_value2', 'step3_2_value3',],
                     content: ['step3_2_content1', 'step3_2_content2', 'step3_2_content3',],
                  }
               },
               {
                  category: 'height',
                  label: '"height 설명"',
                  item: {
                     dataValue: ['step3_3_value1', 'step3_3_value2', 'step3_3_value3',],
                     content: ['step3_3_content1', 'step3_3_content2', 'step3_3_content3',],
                  }
               },
            ],
         },
         {
            finderStep: 'step04',
            key: '',
            questionText: 'step04 - 질문?',
            defaultScreenImg: 'step04 - default 이미지',
            interactionPage: true, // 인터렉트 페이지 유/무 정의
            appliancePopup: false, // 팝업 유/무 정의
            selectionsData: [
               {
                  dataValue: 'step4_value1',
                  content: 'step4_content1',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step04 - 항목 1 디스크립션',
                     screenImgUrl: 'step04 - 항목 1 이미지',
                  }
               },
               {
                  dataValue: 'step4_value2',
                  content: 'step4_content2',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step04 - 항목 2 디스크립션',
                     screenImgUrl: 'step04 - 항목 2 이미지',
                  }
               },
               {
                  dataValue: 'step4_value3',
                  content: 'step4_content3',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step04 - 항목 3 디스크립션',
                     screenImgUrl: 'step04 - 항목 3 이미지',
                  }
               },
            ],
         },
      ],




      // 페이지 데이터 
      qestionData: [
         {
            key: 'step1_key',
            option: [
               {
                  value : 'step1_value1',
                  content: 'step1_content1',
                  changeData: {
                     description: 'step02 - 항목 1 디스크립션',
                     icon: 'step02 - 항목 1 아이콘',
                  }
               },
               {
                  value : 'step1_value2',
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
                  value : 'step2_value1',
                  content: 'step2_content1',
                  changeData: {
                     description: 'step02 - 항목 1 디스크립션',
                     icon: 'step02 - 항목 1 아이콘',
                  }
               },
               {
                  value : 'step1_value2',
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
                  value : 'step1_value1',
                  content: 'step1_content1',
                  changeData: {
                     description: 'step02 - 항목 1 디스크립션',
                     icon: 'step02 - 항목 1 아이콘',
                  }
               },
               {
                  value : 'step1_value2',
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
                  value : 'step1_value1',
                  content: 'step1_content1',
                  changeData: {
                     description: 'step02 - 항목 1 디스크립션',
                     icon: 'step02 - 항목 1 아이콘',
                  }
               },
               {
                  value : 'step1_value2',
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
                  value : 'step1_value1',
                  content: 'step1_content1',
                  changeData: {
                     description: 'step02 - 항목 1 디스크립션',
                     icon: 'step02 - 항목 1 아이콘',
                  }
               },
               {
                  value : 'step1_value2',
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
            key: 'step4_key',
            option: [
               {
                  value : 'step1_value1',
                  content: 'step1_content1',
                  changeData: {
                     description: 'step02 - 항목 1 디스크립션',
                     icon: 'step02 - 항목 1 아이콘',
                  }
               },
               {
                  value : 'step1_value2',
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
            key: 'step5_key',
            option: [
               {
                  value : 'step1_value1',
                  content: 'step1_content1',
                  changeData: {
                     description: 'step02 - 항목 1 디스크립션',
                     icon: 'step02 - 항목 1 아이콘',
                  }
               },
               {
                  value : 'step1_value2',
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
            key: 'step6_key',
            option: [
               {
                  value : 'step1_value1',
                  content: 'step1_content1',
                  changeData: {
                     description: 'step02 - 항목 1 디스크립션',
                     icon: 'step02 - 항목 1 아이콘',
                  }
               },
               {
                  value : 'step1_value2',
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
            key: 'step7_key',
            option: [
               {
                  value : 'step1_value1',
                  content: 'step1_content1',
                  changeData: {
                     description: 'step02 - 항목 1 디스크립션',
                     icon: 'step02 - 항목 1 아이콘',
                  }
               },
               {
                  value : 'step1_value2',
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

   // 스텝 이동 이벤트 함수
   function stepChangeEvent(idx) {
      // 스텝 open
      $('#quickFinder').css('display', 'block');
      stepUpdateEvent(idx);
      // 다음버튼
      $('#nextStepBtn').on('click', function () {
         let judgmentStep = 'nextStep';

         if (idx < ConfigData.finderSetting.length - 1) {
            idx++;
            stepUpdateEvent(idx, judgmentStep);
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

   let _filterProductArray = []; // 스텝에서 filter 거친 product 최종배열

   function stepUpdateEvent(idx, judgmentStep) {
      let currentSelectionsData = ConfigData.finderSetting[idx].selectionsData; // 현재 스텝의 항목 데이터
      let currentQestionData = ConfigData.qestionData[idx].option;
      console.log(currentQestionData)
      let _array = []; // 이전 스텝에서(만) 저장된 product 배열
      // let currentAnswerValue = selectAnswer[idx].value; // 현재스텝 저장된 value 

      // 해당 스텝 정보
      console.log('----step--------------------------------------------------------------');
      console.log('idx (현재스텝 index) : ', idx);
      console.log('_result (사용자가 선택한 스텝별 value) : ', _result);


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

      // 항목 초기화
      $('#selectWrap').html('');
      $('#selectWrap').append('<ol></ol>');

      /* 
         1. 현 스텝의 선택 문항을 _result 배열에 push 한다.
         2. 예시로 만들어놓은 제품 데이터 value 와 _result 의 value 값이 매칭되는 제품 데이터(product 제품) 모두 추출 하여 한 배열에 담아 놓는다.
         3. 추출된 제품 데이터 배열과 다음 스텝의 마크업에 데이터와 일치하는 값이 없을 경우에 해당되는 value 값을 가진 button에 disabled 한다.
      */

      //  step 1 제외하고 실행
      if (idx !== 0 && idx !== 1) {
         let liHtml = ''; // li , button html
         let disabledPresence = ''; // disabled 유 / 무

         // 제품 index 만큼 for 문 실행
         for (let i = 0; i < productObject.length; i++) {
            // 현재 선택한 항목의 배열 수 만큼 제품 for 문 실행
            // console.log(Object.values(_result)[idx - 1].length);
            for (let j = 0; j < Object.values(_result)[idx - 1].length; j++) {
               // 제품의 value 값과 선택 항목의 value 값이 매칭되는 제품 추출
               if (Object.values(productObject[i].data)[idx - 1] === Object.values(_result)[idx - 1][j]) {
                  // 매칭되는 제품 데이터 값 배열에 push
                  _array.push(productObject[i]);
               }
            }
         }
/*          // 제품 index 만큼 for 문 실행
         for (let i = 0; i < productObject.length; i++) {
            // 현재 선택한 항목의 배열 수 만큼 제품 for 문 실행
            for (let j = 0; j < Object.values(_result)[idx - 1].length; j++) {
               // 제품의 value 값과 선택 항목의 value 값이 매칭되는 제품 추출
               if (Object.values(productObject[i].data)[idx - 1] === Object.values(_result)[idx - 1][j]) {
                  // 매칭되는 제품 데이터 값 배열에 push
                  _array.push(productObject[i]);
               }
            }
         } */

         console.log('_array : (이전 스텝 저장value와 매칭되는 제품)', _array);


         // 이전 스텝저장된 _array 배열과 _filterProductArray 배열 비교
         let _bombsArray = _filterProductArray;

         // 최종배열에 데이터가 담겨있을 때 
         if (_filterProductArray.length !== 0) {
            _filterProductArray = [];
            // 이전 섹션에서 매칭된 제품 데이터 값 배열 갯수만큼 for 문 돌리기
            for (let i = 0; i < _array.length; i++) {
               // 최종배열에 담긴 갯수만 큼 for 문 실행
               for (let j = 0; j < _bombsArray.length; j++) {
                  // 매칭되는 product만 다시 _filterProductArray 로 push
                  if (_array[i].productKey === _bombsArray[j].productKey) {
                     _filterProductArray.push(_array[i]);
                  }
               }
            }
         } else {
            _filterProductArray = _array;
         }
         console.log('_filterProductArray (최종 매칭되는 제품)', _filterProductArray)


         // 마크업 뿌리기
         // 저장된 최종 product 배열 value 와 현 스텝의 마크업 value를 비교하여 하나라도 매칭 되지 않으면 disbled 
         // 현스텝 항목 만큼 for 문 돌리기
         for (let i = 0; i < currentQestionData.length; i++) {
            console.log('dddd');
            let bol;
            // 현재 저장된 product 갯수 만큼 for 문 돌리기
            for (let j = 0; j < _filterProductArray.length; j++) {
               // 저장된 product value 와 현스텝의 마크업 value 와 매칭되는 데이터 추출
               if (Object.values(_filterProductArray[j].data)[idx] === currentQestionData[i].value) {
                  bol = true;
               }
            }
            // value 가 하나라도 같은게 없으면 disabled
            if (!bol) {
               disabledPresence = 'disabled';
            } else {
               disabledPresence = '';
            }
            liHtml += '<li><button class="answer_btn" type="button" data-value="' + currentQestionData[i].value + '" ' + disabledPresence + ' > ' + currentQestionData[i].content + ' </button></li>';
         }
         $('#selectWrap ol').append(liHtml);

      } else {
         // step 1
      /*    for (let i = 0; i < currentSelectionsData.length; i++) {
            $('#selectWrap ol').append('<li><button class="answer_btn" type="button" data-value="' + currentSelectionsData[i].dataValue + '"> <i></i> <p> ' + currentSelectionsData[i].content + '</p></button></li>');
         } */
      }
      if (idx === 2) { // step 3 (예외 step)
         console.log('야 너 진짜 죽ㅇ는다')
         let ddd = ConfigData.qestionData;
         console.log(ddd)
      }
      // console.log(_filterProductArray); // 현재 저장된 최종 product 배열

      answerSelectEvent(idx, currentSelectionsData, judgmentStep, _filterProductArray); // 항목 클릭 함수
   }

   function answerSelectEvent(idx, currentSelectionsData, judgmentStep, _filterProductArray) {
      let currentAnswerValue = Object.values(_result)[idx]; // 현재 저장된 value 
      let lastAnswerValue; // 저장된 데이터에서 마지막 value

      // 이전 스텝
      if (judgmentStep !== 'backStep') {
         $('.answer_btn').removeClass('active');
      } else {
         // $('#nextStepBtn').removeClass('on');
         // $('#shopNowBtn').removeClass('on');
      }
      // console.log('currentAnswerValue : (현재 스텝에서 저장된 value)', currentAnswerValue);



      // 항목 클릭 
      $('.answer_btn').on('click', function () {
         console.log('항목클릭!________________________________________________________________')

         let _this = $(this);
         let _selectValue = _this.data('value');

         if (idx !== 0) {
            if (!_this.hasClass('active')) {
               _this.addClass('active');
            } else {
               _this.removeClass('active');
            }
         } else {
            $('.answer_btn').removeClass('active');
            _this.addClass('active');
         }







         // 항목 매칭된 데이터 뿌리기 & 선택된 데이터 push
         if (idx === 0) {
            Object.values(_result)[idx].pop();
            Object.values(_result)[idx].push(_selectValue);
            lastAnswerValue = _selectValue;
         } else {
            // value 저장 배열에서 현재 선택된 value 와 중복되는 데이터 제거
            currentAnswerValue.forEach(function (item, i) {
               if (item === _selectValue) {
                  currentAnswerValue.splice(i, 1);
               }
            });
            // 선택된 value push
            if (_this.hasClass('active')) {
               currentAnswerValue.push(_selectValue);
            }
            lastAnswerValue = currentAnswerValue[currentAnswerValue.length - 1]; //선택된 마지막 value
            console.log('lastAnswerValue : (선택된 마지막 value)', lastAnswerValue);
         }

         console.log('_result (사용자가 선택한 스텝별 value) : ', _result);







         console.log(_filterProductArray);







         sprayData(idx, currentSelectionsData, lastAnswerValue); // 선택한 항목의 대한 데이터 뿌리기


         // 하나 이상 선택시 active 되는 부분
         if ($('.answer_btn.active').length > 0) {
            $(".que_title").css('display', 'none');
            $(".qna_description").css('display', 'block');
            // $("#nextStepBtn").addClass('active');
            // $(".show_now_wrap").addClass('active');
         } else {
            $(".que_title").css('display', 'block');
            $(".qna_description").css('display', 'none');
            // $("#nextStepBtn").removeClass('active');
            // $(".show_now_wrap").removeClass('active');
         }
      });
   }


   // 현재 클릭한 항목에 대한 데이터 뿌리기
   function sprayData(idx, currentSelectionsData, lastAnswerValue) {
      // value 저장 배열의 마지막 value 값과 매칭되는 항목 데이터 가져오기
      let selectData = currentSelectionsData.filter(item => {
         return item.dataValue === lastAnswerValue
      });

      // 선택한 항목 데이터 뿌리기
      if ($('.answer_btn.active').length > 0) {
         // 공통 뿌리기
         if (idx === 0) {
            $(".qna_description .txt_box span").text(selectData[0].changeData.description);
            $("#qnaImgWrap img").attr('alt', selectData[0].changeData.screenImgUrl);
         } else if (idx === 2) {
            // $(".qna_description .txt_box").text(selectData[0].description.head);
            // $(".qna_description .txt_box").text(ConfigData.finderSetting[idx].description.head);
            // console.log(selectData[0])
         } else {
            $(".qna_description .txt_box i").text(selectData[0].changeData.icon);
            $(".qna_description .txt_box span").text(selectData[0].changeData.description);
         }
      }


   }



   // 결과화면
   $('#shopNowBtn').on('click', function () {
      console.log('결과화면');
   });


   // 퀵파인더 start
   /* $('.btn').on('click',function(){
      stepChangeEvent(0);
   }); */
   stepChangeEvent(0);
}
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
function dfdfdfdf() {

	// select DATA
	let selectAnswer = [
		{
			key: 'key-1', // 키 들어갈 부분
			value: ['step01-value1', 'step01-value2'],
		},
		{
			key: 'key-2',
			value: ['step01-value1', 'step01-value2'],
		},
		{
			key: 'key-3',
			value: ['step01-value1', 'step01-value2'],
		},
		{
			key: 'key-4',
			value: [],
		},
		{
			key: 'key-5', 
			value: [],
		}  
	];

	//냉장고 DATA
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
				},
				capacity: ['capacity-value1', 'capacity-value2'],
				size: [
					{
						category: 'depth',
						value: ['depth-value1'],
					},
					{
						category: 'width',
						value: ['width-value1', 'width-value3'],
					},
					{
						category: 'height',
						value: ['height-value2'],
					},
				],
			},
			{
				id: '아메리칸 냉장고',
				key: 'step1-value2',
				screenImg: {
					// defaultScreenImg: '',
					changeScreenImg: 'step01 - 2 항목 이미지',
					popupImg: 'step01 - 2 항목 팝업.png',
					productImg: 'step01 - 2 항목 냉장고 이미지.png',
				},
				capacity: ['capacity-value1', 'capacity-value2'],
				size: [
					{
						category: 'depth',
						value: ['depth-value2'],
					},
					{
						category: 'width',
						value: ['width-value2', 'width-value3'],
					},
					{
						category: 'height',
						value: ['height-value1'],
					},
				],
			},
			{
				id: '톨 냉장고',
				key: 'step1-value3',
				screenImg: {
					// defaultScreenImg: '',
					changeScreenImg: 'step01 - 3 항목 이미지',
					popupImg: 'step01 - 3 항목 팝업.png',
					productImg: 'step01 - 3 항목 냉장고 이미지.png',
				},
				capacity: ['value1', 'value1'],
				size: [
					{
						category: 'depth',
						value: ['depth-value1'],
					},
					{
						category: 'width',
						value: ['width-value1', 'width-value2'],
					},
					{
						category: 'height',
						value: ['height-value3'],
					},
				],
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
				descriptionClass: 'desc_1', // 디스크립션 class 종류
				selectionsData: [
					{
						dataValue: 'step1-value1',
						content: 'step1-content1',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step01 - 항목 1 디스크립션',
							screenImgUrl: 'step01 - 항목 1 이미지',
						}
					},
					{
						dataValue: 'step1-value2',
						content: 'step1-content2',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step01 - 항목 2 디스크립션',
							screenImgUrl: 'step01 - 항목 2 이미지',
						}
					},
					{
						dataValue: 'step1-value3',
						content: 'step1-content3',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step01 - 항목 3 디스크립션',
							screenImgUrl: 'step01 - 항목 3 이미지',
						}
					},
				],

			},
			{
				finderStep: 'step02',
				key: '',
				questionText: 'step02 - 질문?',
				defaultScreenImg: 'step02 - default 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
				descriptionClass: 'desc_2', // 디스크립션 class 종류
				selectionsData: [
					{
						dataValue: 'step2-value1',
						content: 'step2-content1',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 1 디스크립션',
							icon: 'step02 - 항목 1 아이콘',
						}
					},
					{
						dataValue: 'step2-value2',
						content: 'step2-content2',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 2 디스크립션',
							icon: 'step02 - 항목 2 아이콘',
						}
					},
					{
						dataValue: 'step2-value3',
						content: 'step2-content3',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 - 항목 3 디스크립션',
							icon: 'step02 - 항목 3 아이콘',
						}
					},
				],
			},
			// 예외 step (size)
			{
				finderStep: 'step03',
				key: '',
				questionText: 'step03 - 질문?',
				defaultScreenImg: 'step3-메인 이미지',
				interactionPage: false, // 인터렉트 페이지 유/무 정의
				appliancePopup: true, // 팝업 유/무 정의
				descriptionClass: 'desc_2', // 디스크립션 class 종류
				description: {
					head: 'step03 - 디스크립션',
					detaile: ''
				},
				selectionsData: [
					{
						category: 'depth',
						label: '"depth 설명"',
						item: {
							dataValue: ['depth-value1', 'depth-value2',],
							content: ['depth-content1', 'depth-content2',],
						}
					},
					{
						category: 'width',
						label: '"width 설명"',
						item: {
							dataValue: ['width-value1', 'width-value2', 'width-value3',],
							content: ['width-content1', 'width-content2', 'width-content3',],
						}
					},
					{
						category: 'height',
						label: '"height 설명"',
						item: {
							dataValue: ['height-value1', 'height-value2', 'height-value3',],
							content: ['height-content1', 'height-content2', 'height-content3',],
						}
					},
				],
			},
			/* {
				finderStep: 'step04',
				key: '',
				questionText: 'step04 - 질문?',
				defaultScreenImg: 'step04 -메인 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
				descriptionClass: 'desc_2', // 디스크립션 class 종류
				selectionsData: [
					{
						dataValue: 'step4-value1',
						content: 'step4-content1',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step04 - 항목 1 디스크립션',
							icon: 'step04 - 항목 1 아이콘',
						}
					},
					{
						dataValue: 'step4-value2',
						content: 'step4-content2',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step04 - 항목 2 디스크립션',
							icon: 'step04 - 항목 2 아이콘',
						}
					},
					{
						dataValue: 'step4-value3',
						content: 'step4-content3',
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step04 - 항목 3 디스크립션',
							icon: 'step04 - 항목 3 아이콘',
						}
					},
				],
			}, */
		]
	}

	// 스텝 이동 이벤트 함수
	function stepChangeEvent(idx) {
		// 스텝 open
		$('#quickFinder').css('display', 'block');
		stepUpdateEvent(idx);
		// 다음버튼
		$('#nextStepBtn').on('click', function () {
			let judgmentStep = 'nextStep';

			if (idx < ConfigData.finderSetting.length - 1) {
				idx++;
				stepUpdateEvent(idx, judgmentStep);
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


	// 현재 스텝의 html 뿌리기
	function stepUpdateEvent(idx, judgmentStep) {
		let currentSelectionsData = ConfigData.finderSetting[idx].selectionsData; // 현재 스텝의 항목 데이터
		let currentAnswerValue = selectAnswer[idx].value; // 현재스텝 저장된 value 

		console.log(currentAnswerValue)

		let lastAnswerValue; // 저장된 데이터에서 마지막 value
		let selectProduct = selectAnswer[0].value[0]; // step01 에서 저장된 value 
		let descClass = ConfigData.finderSetting[idx].descriptionClass; // 해당스텝 class
		// 스텝1 항목 선택과 매칭되는 object 데이터 가져오기
		let productObject = ConfigData.object.filter(item => {
			return item.key === selectProduct
		});

		// 해당 스텝 정보
		console.log('----현재 스텝--------------------------------------------------------------');
		console.log('idx (현재스텝 index) : ', idx);
		console.log('finder-step (현재스텝) : ', ConfigData.finderSetting[idx].finderStep);
		console.log('interactionPage (인터렉션 페이지 유/무) :', ConfigData.finderSetting[idx].interactionPage);
		console.log('appliancePopup (팝업 유/무) :', ConfigData.finderSetting[idx].appliancePopup);
		console.log('questionText (질문) : ', ConfigData.finderSetting[idx].questionText)
		console.log('productObject (1항목에서 선택한 제품 데이터) : ', productObject)
		console.log('--------------------------------------------------------------------------');


		// step class 변경
		$('#quickFinder').removeClass();
		$('#quickFinder').addClass(finderStepData[idx]);

		//말풍선 class 구분하기
		$('.qna_description').removeClass().addClass('qna_description').addClass(descClass);

		// 해당 질문 뿌리기
		$('.que_title').text(ConfigData.finderSetting[idx].questionText);
		$('.qna_description strong').text(ConfigData.finderSetting[idx].questionText);

		// 해당 이미지 뿌리기
		$('#qnaImgWrap img').attr('alt', ConfigData.finderSetting[idx].defaultScreenImg);
		// $('#qnaImgWrap').attr('style', 'background-image:url'  ConfigData.finderSetting[idx].defaultScreenImg);
		// console.log(ConfigData.finderSetting[idx].defaultScreenImg)

		// 항목 초기화
		$('#selectWrap').html('');
		$('#selectWrap').append('<ol></ol>');

		/* 해당 항목 마크업 뿌리기 start------------- */
		if (idx === 2) {
			let liHtml = '';

			// 제품 value 비교하여 없는것은 disable 처리 / li , button 뿌리기
			for (let i = 0; i < currentSelectionsData.length; i++) {
				let buttonHtml = '';
				for (let j = 0; j < currentSelectionsData[i].item.dataValue.length; j++) {
					// 기본 값은 disabled
					let disabledPresence = 'disabled';

					// step1 에서 선택한 제품 value 와 화면의 value 값이 같으면 disabled 초기화
					productObject[0].size[i].value.forEach(function (item) {
						if (currentSelectionsData[i].item.dataValue[j] === item) {
							disabledPresence = '';
						}
					})
					buttonHtml += '<button class="answer_btn" type="button" data-value="' + currentSelectionsData[i].item.dataValue[j] + '" ' + disabledPresence + '  > ' + currentSelectionsData[i].item.content[j] + ' </button>';
				}
				liHtml += '<li> <span> ' + currentSelectionsData[i].category + ' <i> ' + currentSelectionsData[i].label + ' </i> </span>  <div> ' + buttonHtml + '</div> </li>';
			}
			$('#selectWrap').prepend('<button type="button">제품 팝업창 버튼</button>');
			$('#selectWrap ol').append(liHtml);
			$("#qnaImgWrap").find('img').attr('alt', productObject[0].screenImg.changeScreenImg);
			$(".qna_description .txt_box span").text(ConfigData.finderSetting[idx].description.head);

		} else {
			for (let i = 0; i < currentSelectionsData.length; i++) {
				$('#selectWrap ol').append('<li><button class="answer_btn" type="button" data-value="' + currentSelectionsData[i].dataValue + '"> <i></i> <p> ' + currentSelectionsData[i].content + '</p></button></li>');
				// $('#selectWrap ol li').eq(i).find('button').attr('data-value', currentSelectionsData[i].dataValue);
			}
		}
		if (idx === 1) {
			console.log('스텝2');
			$("#qnaImgWrap").find('img').attr('alt', productObject[0].screenImg.changeScreenImg);
		}
		/* 해당 항목 마크업 뿌리기 end------------- */

		// back 버튼 클릭시 이전 데이터 유지, 다음 스텝 데이터 삭제
		if (judgmentStep === 'backStep') {
			$(".que_title").css('display', 'none');
			$(".qna_description").css('display', 'block');


			// 버튼 value와 저장된 value와 같으면 active 
			$(".answer_btn").each(function () {
				let _this = $(this);
				currentAnswerValue.forEach(function (item) {
					if (_this.data('value') === item) {
						_this.addClass('active');
					}
				});
			});

			if (idx === 0) {
				lastAnswerValue = currentAnswerValue[0]; // 마지막데이터
			} else if (idx === 1) {
				// 다음 스텝 데이터 삭제
				selectAnswer[idx + 1].value.forEach(function (item, i) {
					selectAnswer[idx + 1].value[i] = [];
				});
				lastAnswerValue = currentAnswerValue[currentAnswerValue.length - 1]; // 저장된 value 에서 마지막 데이터 
			} else {
				selectAnswer[idx + 1].value = []; // 다음 스텝 데이터 삭제
				lastAnswerValue = currentAnswerValue[currentAnswerValue.length - 1]; // 저장된 value 에서 마지막 데이터 
			}
			console.log('lastAnswerValue(마지막 선택된 value) : ', lastAnswerValue)


			sprayData(idx, currentSelectionsData, lastAnswerValue); // 선택한 항목의 대한 데이터 뿌리기


		} else {
			$(".que_title").css('display', 'block');
			$(".qna_description").css('display', 'none');
		}
		answerSelectEvent(idx, currentSelectionsData, judgmentStep); // 항목 클릭 함수
	}



	// 항목 클릭 이벤트 함수
	function answerSelectEvent(idx, currentSelectionsData, judgmentStep) {
		let currentAnswerValue = selectAnswer[idx].value; // 현재 저장된 value 
		let lastAnswerValue; // 저장된 데이터에서 마지막 value

		// 이전 스텝
		if (judgmentStep !== 'backStep') {
			$('.answer_btn').removeClass('active');
		} else {
			$('#nextStepBtn').removeClass('on');
			$('#shopNowBtn').removeClass('on');
		}
		console.log('currentAnswerValue : (현재 스텝에서 저장된 value)', currentAnswerValue);


		// 항목 클릭 
		$('.answer_btn').on('click', function () {
			let _this = $(this);
			let _selectValue = _this.data('value');
			// console.log(_selectValue); // 선택한 항목 value 값

			if (idx !== 0) {
				if (!_this.hasClass('active')) {
					_this.addClass('active');
				} else {
					_this.removeClass('active');
				}
			} else {
				$('.answer_btn').removeClass('active');
				_this.addClass('active');
			}


			// 항목 매칭된 데이터 뿌리기 & 선택된 데이터 push
			if (idx === 0) {
				selectAnswer[idx].value = [];
				selectAnswer[idx].value.push(_this.data('value'));
				lastAnswerValue = _this.data('value');
			} else if (idx === 2) {
				// value 저장 배열에서 현재 선택된 value 와 중복되는 데이터 제거
				for (let i = 0; i < currentAnswerValue.length; i++) {
					for (let j = 0; j < currentAnswerValue[i].val.length; j++) {
						currentAnswerValue[i].val.forEach(function (item, idx) {
							if (item === _selectValue) {
								currentAnswerValue[i].val.splice(idx, 1);
							}
						});
					}
				}
				if (_this.hasClass('active')) {
					currentAnswerValue[_this.parents('li').index()].val.push(_selectValue);
				}
				console.log(currentAnswerValue); //현재 step의  value 값

			} else {
				// value 저장 배열에서 현재 선택된 value 와 중복되는 데이터 제거
				currentAnswerValue.forEach(function (item, idx) {
					if (item === _selectValue) {
						currentAnswerValue.splice(idx, 1);
					}
				});
				// 선택된 value push
				if (_this.hasClass('active')) {
					currentAnswerValue.push(_selectValue);
				}
				console.log(currentAnswerValue); //현재 스텝 value 값
				lastAnswerValue = currentAnswerValue[currentAnswerValue.length - 1]; //선택된 마지막 value
				console.log(lastAnswerValue)
			}


			console.log('selectAnswer (선택된 value 데이터 저장) : ', selectAnswer); // 저장된 데이터 value 

			sprayData(idx, currentSelectionsData, lastAnswerValue); // 선택한 항목의 대한 데이터 뿌리기


			// 하나 이상 선택시 active 되는 부분
			if ($('.answer_btn.active').length > 0) {
				$(".que_title").css('display', 'none');
				$(".qna_description").css('display', 'block');
			} else {
				$(".que_title").css('display', 'block');
				$(".qna_description").css('display', 'none');
			}
		});
	}


	// 현재 클릭한 항목에 대한 데이터 뿌리기
	function sprayData(idx, currentSelectionsData, lastAnswerValue) {
		// value 저장 배열의 마지막 value 값과 매칭되는 항목 데이터 가져오기
		let selectData = currentSelectionsData.filter(item => {
			return item.dataValue === lastAnswerValue
		});



		// 선택한 항목 데이터 뿌리기
		if ($('.answer_btn.active').length > 0) {
			// 공통 뿌리기
			if (idx === 0) {
				$(".qna_description .txt_box span").text(selectData[0].changeData.description);
				$("#qnaImgWrap img").attr('alt', selectData[0].changeData.screenImgUrl);
			} else if (idx === 2) {
				// $(".qna_description .txt_box").text(selectData[0].description.head);
				// $(".qna_description .txt_box").text(ConfigData.finderSetting[idx].description.head);
				// console.log(selectData[0])
			} else {
				$(".qna_description .txt_box i").text(selectData[0].changeData.icon);
				$(".qna_description .txt_box span").text(selectData[0].changeData.description);
			}
		}


	}











	// 결과화면
	$('#shopNowBtn').on('click', function () {
		console.log('결과화면');
	});


	// 퀵파인더 start
	/* $('.btn').on('click',function(){
		stepChangeEvent(0);
	}); */
	stepChangeEvent(0);
}































