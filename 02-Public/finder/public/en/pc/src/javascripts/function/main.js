function main() {
	let _select = []; // 사용자 선택한 value 
	let stepCount = [];
	let _result = {}; // 마지막 최종 결과 데이터 추출 배열

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
			Q4: 'Q4_value1',
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
			Q4: 'Q4_value1',
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

		console.log('_select : ', _select);
		// console.log('stepCount : ', stepCount);

		let selectProduct = [];

		// 1. 이전 선택한 값 초대로 제품 추출 부분
		// 2. 제품 갯수만큼 for 문 실행 
		for (let key in product) {
			console.log(key + ' : ', product[key])
			let num = 0; // ture 갯수 판단
			let proNum = 0;
			let ddd = [];

			// _select 에 담긴 key=value 값 갯수만큼 for 문 실행
			for (let i = 0; i < _select.length; i++) {
				let selectKey = _select[i].split('=')[0]; // key
				let selectValue = _select[i].split('=')[1]; // value

				console.log(selectKey)
				console.log('(제품)'+product[key][selectKey], ' : '+ selectValue +'(선택된)')

				// 제품 value
				// console.log(product[key][selectKey]);


				// 제품 value 와 _select에 저장된 value와 값이 같을 때 ture
				
				if (product[key][selectKey] === selectValue) {
					console.debug(selectValue)
					num++;
				}
				// product[key][selectKey] === selectValue && num++;
			}

			// // _select에서 현재 선택된 key,value 중복되는 데이터 제거
			// ddd.forEach(function (item, i) {
			// 	item === _currentKeyValue && _select.splice(i, 1)
			// });

			// console.log(num)
			// console.log(num === _select.length)



			// true 갯수가 현재 _select 갯수와 일치하는 제품 추출
			if (num === _select.length) {
				console.log('모두 일치  :  ' + key + ' : ', product[key])
				// console.debug(key + ' : ', product[key])
				selectProduct.push(product[key])
			}
		}


		console.log('selectProduct : ', selectProduct)

		// 1. 추출된 제품과 마크업의 value 를 매칭시켜서 없는것은 disabled 
		// if (idx !== 0) {
		// 	// 추출된 제품 갯수만큼 for문 실행
		// 	$('.answer_btn').attr('disabled', true) // default 부분
		// 	for (let i = 0; i < selectProduct.length; i++) {

		// 		console.log('---필터 거친 제품 갯수만큼 for 문-----------------------------')
		// 		// 현재 스텝 버튼의 value 값 추출
		// 		$('.answer_btn').each(function () {
		// 			let _currentValue = $(this).data('value'); // 현재스텝의 value 
		// 			let agreement = false; // 없으면 false 있으면 true 로 값 변경될 예정


		// 			// console.log(' 제품 value 전체 : ', Object.values(selectProduct[i]))

		// 			// 추출된 제품 당 포함되어 있는 전체 value 값 추출
		// 			Object.values(selectProduct[i]).forEach(function (item) {
		// 				// console.log('_currentValue : ', _currentValue)
		// 				// console.log('item : ', item)
		// 				// console.log(_currentValue === item)

		// 				 // 현재스텝의 value 와 제품안에 있는 value 가 일치하면 ture
		// 				if (_currentValue === item) {
		// 					agreement = true;
		// 				}
		// 			})

		// 			// bol 이 true 일때 실행
		// 			// console.log('agreement : ', agreement)
		// 			if (agreement) {
		// 				// console.log($(this), 'true 하기!!!!!!!!!!')
		// 				$(this).attr('disabled', false);
		// 			}
		// 		});
		// 	}
		// }



















































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
			console.log('항목클릭!------------------------------------------------------------')
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
		console.log('currentHtml : ', currentHtml)
		// value 저장 배열의 마지막 value 값과 매칭되는 항목 데이터 가져오기
		let selectData = currentHtml.filter(item => {
			return item.value === lastAnswerValue
		});

		console.log('selectData : ', selectData)

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