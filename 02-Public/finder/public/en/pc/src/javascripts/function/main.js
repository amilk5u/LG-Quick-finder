function main() {
	let _select = {};
	/* 	let _select = {
			Q1: 'step1_value1',
			Q2: ['step2_value2','step2_value3'],
		}; */

	let _result = {}; // 마지막 최종 결과 데이터 추출 배열

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
			Q2: 550,
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
			Q2: 531,
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
			{
				finderStep: 'step05',
				key: '',
				questionText: 'step04 - 질문?',
				defaultScreenImg: 'step04 - default 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
			{
				finderStep: 'step06',
				key: '',
				questionText: 'step04 - 질문?',
				defaultScreenImg: 'step04 - default 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
			},
			{
				finderStep: 'step07',
				key: '',
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
					}
				},
				{
					value: 'Q1_value2',
					content: 'Q1_content2',
					changeData: {
						description: 'step01 - 항목 2 디스크립션',
						icon: 'step01 - 항목 2 아이콘',
					}
				},
				{
					value: 'Q1_value3',
					content: 'Q1_content3',
					changeData: {
						description: 'step01 - 항목 3 디스크립션',
						icon: 'step01 - 항목 3 아이콘',
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
						description: 'step02 - 항목 1 디스크립션',
						icon: 'step02 - 항목 1 아이콘',
					}
				},
				{
					value: 'Q2_value3',
					content: '600이상',
					changeData: {
						description: 'step02 - 항목 1 디스크립션',
						icon: 'step02 - 항목 1 아이콘',
					}
				}
			],
			'Q3_1': [
				{
					value: 'Q3_1_value1',
					content: 'Q3_1_content1'
				},
				{
					value: 'Q3_1_value2',
					content: 'Q3_1_content2'
				},
				{
					value: 'Q3_1_value3',
					content: 'Q3_1_content3'
				},
			],
			'Q3_2': [
				{
					value: 'Q3_2_value1',
					content: 'Q3_2_content1'
				},
				{
					value: 'Q3_2_value2',
					content: 'Q3_2_content2'
				},
				{
					value: 'Q3_2_value3',
					content: 'Q3_2_content3'
				},
			],
			'Q3_3': [
				{
					value: 'Q3_3_value1',
					content: 'Q3_3_content1'
				},
				{
					value: 'Q3_3_value2',
					content: 'Q3_3_content2'
				},
				{
					value: 'Q3_3_value3',
					content: 'Q3_3_content3'
				},
			],
			'Q4': [
				{
					value: 'Q4_value1',
					content: 'Q4_content1',
					changeData: {
						description: 'step04 - 항목 1 디스크립션',
						icon: 'step04 - 항목 1 아이콘',
					}
				},
				{
					value: 'Q4_value2',
					content: 'Q4_content2',
					changeData: {
						description: 'step04 - 항목 1 디스크립션',
						icon: 'step04 - 항목 1 아이콘',
					}
				},
			],
		},
	}

	let _finalProductArray = [];

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

	function stepUpdateEvent(idx, judgmentStep) {
		let htmlIdx = idx; // 항목 별 index
		if (idx > 2) { htmlIdx += 2; }// 페이지 데이터 index
		let currentKey = Object.keys(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 key 값
		let currentHtml = Object.values(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 항목 데이터
		// let currentQestionData = ConfigData.qestionData[idx].option;
		// console.log(currentQestionData)
		// let _valArray = []; // 이전 스텝에서(만) 저장된 product 배열
		// let currentAnswerValue = selectAnswer[idx].value; // 현재스텝 저장된 value 


		// 해당 스텝 정보
		console.log('----step--------------------------------------------------------------');
		console.log('idx (현재스텝 index) : ', idx);
		console.log('currentSelectionsData.length : ', currentHtml.length)
		console.log('htmlIdx : ', htmlIdx)
		console.log('현재 스텝의 key : ', currentKey)
		console.log('현재 스텝의 데이터 : ', currentHtml)
		console.log('최종 제품 : ', _finalProductArray)
		console.log('_select (사용자가 선택한 스텝별 value) : ', _select);


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


		
		if (idx === 1) {
			for (let key in _finalProductArray) {
				let productValue = _finalProductArray[key][currentKey];
				// value가 450이상인것이 있는지 없는지, 500~600이 있는지 없는지 그리고, 600이상이 있는지 없는지 판단.
				if (productValue <= 450) {
					console.log('450이하')
					console.log(productValue)
				} else if (productValue >= 500 && productValue <= 600) {
					console.log('500~600')
					console.log(productValue)
				} else if (productValue >= 600) {
					console.log('600이상')
					console.log(productValue)
				}
			}
		}






		// step 3 제외
		if (idx !== 2) {
			for (let i = 0; i < currentHtml.length; i++) {
				$('#selectWrap ol').append('<li><button class="answer_btn" type="button" data-value="' + currentHtml[i].value + '"> <i></i> <p> ' + currentHtml[i].content + '</p></button></li>');
			}
		} else {
			console.log('step3');
		}









		answerSelectEvent(idx, htmlIdx, currentHtml, judgmentStep); // 항목 클릭 함수
	}

	function answerSelectEvent(idx, htmlIdx, currentHtml, judgmentStep) {
		let lastAnswerValue; // 저장된 데이터에서 마지막 value
		let currentKey = Object.keys(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 key 값
		let _valArray = [];
		// console.log(_select)
		// console.log(currentAnswerValue);

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
			console.log('항목클릭!------------------------------------------------------------')
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
				_valArray = []; // 배열 초기화
				_valArray.push(_selectValue); // 배열에 선택한 값 담기
				_select[currentKey] = _valArray; // push
				lastAnswerValue = _selectValue; // 마지막 선택한 값
			} else {
				// value 저장 배열에서 현재 선택된 value 와 중복되는 데이터 제거
				_valArray.forEach(function (item, i) {
					if (item === _selectValue) {
						_valArray.splice(i, 1);
					}
				});
				// 선택된 value push
				if (_this.hasClass('active')) {
					// currentAnswerValue.push(_selectValue);
					_valArray.push(_selectValue)
				}
				_select[currentKey] = _valArray;
				// lastAnswerValue = currentAnswerValue[currentAnswerValue.length - 1]; //선택된 마지막 value
				// console.log('lastAnswerValue : (선택된 마지막 value)', lastAnswerValue);
			}
			console.log('_select (사용자가 선택한 스텝별 value) : ', _select);

			let _ProductArray = [];
			// 사용자가 선택한 value 값과 product 의 value 값이 매칭되는 product 제품 추출
			// 현재 선택한 배열의 갯수만큼 for 문 실행
			for (let i = 0; i < _select[currentKey].length; i++) {
				// console.log(_select[currentKey][i])

				// 제품 갯수만큼 for 문 실행
				for (let key in product) {
					if (product[key][currentKey] === _select[currentKey][i]) {
						_ProductArray[key] = product[key];
					}
				}
			}

			_finalProductArray = _ProductArray;

			// console.log('_ProductArray : ',_ProductArray)


			// product 제품 추출하여 현재 매칭되는 값이 아닌것은 disabled
			for (let key in _ProductArray) {
				// console.log(_ProductArray[key][currentKey]);
				for (let j = 0; j < currentHtml.length; j++) {
					// console.log(currentKey)
					// console.log(currentHtml[j].value === _ProductArray[key][currentKey])
				}
			}

			/* 
				1. 처음에 선택한 값이랑 매칭해서 
			*/

















			// console.log(_filterProductArray);
			// sprayData(idx, currentSelectionsData, lastAnswerValue); // 선택한 항목의 대한 데이터 뿌리기


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