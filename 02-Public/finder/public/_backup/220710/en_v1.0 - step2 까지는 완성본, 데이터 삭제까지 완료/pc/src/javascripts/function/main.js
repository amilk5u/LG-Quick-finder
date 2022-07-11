function main() {
	let _select = {}; // 사용자 선택한 value 
	let _stepProduct = {}; // 스텝별로 추출된 제품리스트
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


	let _array = []; // 매칭된 제품 배열

	function stepUpdateEvent(idx, judgmentStep) {
		let htmlIdx = idx; // 항목 별 index
		if (idx > 2) { htmlIdx += 2; }// 페이지 데이터 index
		let currentKey = Object.keys(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 key 값
		let currentHtml = Object.values(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 항목 데이터
		let prevKey = Object.keys(ConfigData.htmlData)[htmlIdx - 1];
		// let currentQestionData = ConfigData.qestionData[idx].option;
		// console.log(currentQestionData)
		// let _valArray = []; // 이전 스텝에서(만) 저장된 product 배열
		// let currentAnswerValue = selectAnswer[idx].value; // 현재스텝 저장된 value 

		if (judgmentStep === 'backStep') {
			// 앞에 선택한 데이터 삭제
			delete _stepProduct[Object.keys(ConfigData.htmlData)[htmlIdx + 1]]; // 제품  데이터 삭제
			delete _select[Object.keys(ConfigData.htmlData)[htmlIdx + 1]]; // 선택한 select 데이터 삭제
		}

		// 해당 스텝 정보
		console.log('----step--------------------------------------------------------------');
		console.log('idx (현재스텝 index) : ', idx);
		console.log('currentSelectionsData.length : ', currentHtml.length)
		console.log('htmlIdx : ', htmlIdx)
		console.log('현재 스텝의 key : ', currentKey)
		console.log('현재 스텝의 데이터 : ', currentHtml)
		console.log('_select (사용자가 선택한 스텝별 value) : ', _select);
		console.log('_stepProduct (스텝별 매칭된 제품) : ', _stepProduct)


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

		// step 3 제외
		if (idx !== 2) {
			for (let i = 0; i < currentHtml.length; i++) {
				$('#selectWrap ol').append('<li><button class="answer_btn" type="button" data-value="' + currentHtml[i].value + '"> <i></i> <p> ' + currentHtml[i].content + '</p></button></li>');
			}
		} else {
			console.log('step3');
		}


		// disabled 가르기
		// _stepProduct 제품 기준으로 마크업 생성 (disabled 유/무)
		if (idx === 1) {
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
		}


		answerSelectEvent(idx, htmlIdx, currentHtml, judgmentStep); // 항목 클릭 함수
	}

	function answerSelectEvent(idx, htmlIdx, currentHtml, judgmentStep) {
		let lastAnswerValue; // 저장된 데이터에서 마지막 value
		let currentKey = Object.keys(ConfigData.htmlData)[htmlIdx]; // 현재 스텝의 key 값
		let _valArray = [];
		let prevKey = Object.keys(ConfigData.htmlData)[htmlIdx - 1];

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
			let _currentAry = [];

			// 항목 매칭된 데이터 뿌리기 & 선택된 데이터 push
			if (idx === 0) {
				// button active 
				$('.answer_btn').removeClass('active');
				_this.addClass('active');

				_valArray = []; // 배열 초기화
				_valArray.push(_selectValue); // 배열에 선택한 값 담기
				_select[currentKey] = _valArray; // push
				lastAnswerValue = _selectValue; // 마지막 선택한 값
				console.log('선택된 마지막 value : ', lastAnswerValue);
			} else {
				// button active
				if (!_this.hasClass('active')) {
					_this.addClass('active');
				} else {
					_this.removeClass('active');
				}

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
				_select[currentKey] = _valArray;
				lastAnswerValue = _select[currentKey][_select[currentKey].length - 1]; //선택된 마지막 value
				console.log('선택된 마지막 value : ', lastAnswerValue);
			}


			// _array
			// console.log(_array[currentKey]);

			if (idx === 0) {
				// 사용자가 선택한 value 값과 product 의 value 값이 매칭되는 product 제품 추출
				// 현재 선택한 배열의 갯수만큼 for 문 실행
				for (let i = 0; i < _select[currentKey].length; i++) {
					// 제품 갯수만큼 for 문 실행
					for (let key in product) {
						if (product[key][currentKey] === _select[currentKey][i]) {
							_currentAry.push(product[key]);
							_stepProduct[currentKey] = _currentAry;
						}
					}
				}
			} else if (idx === 1) {
				// 현재 선택된 select 값과 현재 매칭된 value 값을 판단해서 제품 push 하기
				for (let i = 0; i < _select[currentKey].length; i++) {
					// 선택된 product 갯수만큼 for 문 실행
					for (let j = 0; j < _stepProduct[prevKey].length; j++) {
						let productValue = _stepProduct[prevKey][j][currentKey];
						// step 2 의 조건에 매칭 되는 제품 _array 에 push
						if (_select[currentKey][i] === currentHtml[0].value) {
							if (productValue <= 450) {
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

			console.log('_stepProduct (최종 선택된 제품) : ', _stepProduct)
			console.log('_select (사용자가 선택한 스텝별 value) : ', _select);



			// sprayData(idx, currentHtml, lastAnswerValue); // 선택한 항목의 대한 데이터 뿌리기


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
	function sprayData(idx, currentHtml, lastAnswerValue) {
		// value 저장 배열의 마지막 value 값과 매칭되는 항목 데이터 가져오기
		let selectData = currentHtml.filter(item => {
			return item.dataValue === lastAnswerValue
		});

		console.log(currentHtml)
		console.log(selectData);

		// 선택한 항목 데이터 뿌리기
		if ($('.answer_btn.active').length > 0) {
			// 공통 뿌리기
			if (idx === 0) {
				// $(".qna_description .txt_box span").text(selectData[0].changeData.description);
				// $("#qnaImgWrap img").attr('alt', selectData[0].changeData.screenImgUrl);
			} else if (idx === 2) {
				// $(".qna_description .txt_box").text(selectData[0].description.head);
				// $(".qna_description .txt_box").text(ConfigData.finderSetting[idx].description.head);
				// console.log(selectData[0])
			} else {
				// $(".qna_description .txt_box i").text(selectData[0].changeData.icon);
				// $(".qna_description .txt_box span").text(selectData[0].changeData.description);
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