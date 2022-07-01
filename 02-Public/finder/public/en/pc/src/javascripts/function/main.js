function main() {

	// step 배열 순서 저장
	let finderStepData = [];

	// select DATA
	let selectAnswer = [
		{
			step: 'step01',
			key: [],
			value: [],
		},
		{
			step: 'step02',
			key: [],
			value: [],
		},
		{
			step: 'step03',
			key: [],
			value: {
				depth: [],
				width: [],
				height: [],
			}
		},
	];

	//냉장고 DATA
	const ConfigData = {
		// 제품 정보 정의
		object: [
			{
				id: '멀티 냉장고',
				defaultScreenImg: '멀티 냉장고 이미지',
				// popupImgUrl: 'url',
				capacity: ['capacity-value1', 'capacity-value2'],
				size: {
					depth: ['depth-value1'],
					width: ['width-value2', 'width-value3'],
					height: ['height-value2'],
				},
			},
			{
				id: '아메리칸 냉장고',
				defaultScreenImg: '아메리칸 냉장고 이미지',
				// popupImgUrl: 'url',
				capacity: ['capacity-value1', 'capacity-value2'],
				size: {
					depth: ['depth-value2'],
					width: ['width-value1'],
					height: ['height-value2', 'height-value3'],
				},
			},
			{
				id: '톨 냉장고',
				defaultScreenImg: '톨 냉장고 이미지',
				// popupImgUrl: 'url',
				capacity: ['value1', 'value1'],
				size: {
					depth: ['depth-value3'],
					width: ['width-value1', 'width-value2'],
					height: ['height-value1'],
				},
			}
		],
		// 질문페이지 사전 정의 
		finderSetting: [
			// 제품 선택
			{
				finderStep: 'step01',
				key: '',
				questionText: 'Q1 - 냉장고제품 질문?',
				defaultScreenImg: 'step1-메인 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
				selectionsData: [
					{
						dataValue: 'step1-value1',
						content: 'step1-content1',
						iconImgUrl: {
							default: '멀티 아이콘',
							active: 'active 멀티 아이콘'
						},
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: '멀티 디스크립션',
							screenImgUrl: '멀티 냉장고 이미지',
						}
					},
					{
						dataValue: 'step1-value2',
						content: 'step1-content2',
						iconImgUrl: {
							default: '아메리칸 아이콘',
							active: 'active 아메리칸 아이콘'
						},
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: '아메리칸 디스크립션',
							screenImgUrl: '아메리칸 냉장고 이미지',
						}
					},
					{
						dataValue: 'step1-value3',
						content: 'step1-content3',
						iconImgUrl: {
							default: '톨 아이콘',
							active: 'active 톨 아이콘'
						},
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: '톨 디스크립션',
							screenImgUrl: '톨 냉장고 이미지',
						}
					},
				],

			},
			{
				finderStep: 'step02',
				key: '',
				questionText: 'Q2 - 냉장고제품 질문?',
				defaultScreenImg: 'step2-메인 이미지',
				interactionPage: true, // 인터렉트 페이지 유/무 정의
				appliancePopup: false, // 팝업 유/무 정의
				selectionsData: [
					{
						dataValue: 'step2-value1',
						content: 'step2-content1',
						iconImgUrl: {
							default: '멀티 아이콘',
							active: 'active 멀티 아이콘'
						},
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: '항목 1 디스크립션',
							icon: '항목 1 icon',
						}
					},
					{
						dataValue: 'step2-value2',
						content: 'step2-content2',
						iconImgUrl: {
							default: '멀티 아이콘',
							active: 'active 멀티 아이콘'
						},
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: '항목 2 디스크립션',
							icon: '항목 2 icon',
						}
					},
					{
						dataValue: 'step2-value3',
						content: 'step2-content3',
						iconImgUrl: {
							default: '멀티 아이콘',
							active: 'active 멀티 아이콘'
						},
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: '항목 3 디스크립션',
							icon: '항목 3 icon',
						}
					},
				],
			},
			{
				finderStep: 'step03',
				key: '',
				questionText: 'Q3 - 냉장고제품 질문?',
				defaultScreenImg: 'step3-메인 이미지',
				interactionPage: false, // 인터렉트 페이지 유/무 정의
				appliancePopup: true, // 팝업 유/무 정의
				selectionsData: [
					{
						dataValue: 'step3-value1',
						content: 'step3-content1',
					},
					{
						dataValue: 'step3-value2',
						content: 'step3-content2',
					},
					{
						dataValue: 'step3-value3',
						content: 'step3-content3',
					},
				],
			},
		]
	}


	// 스텝 class 저장
	for (let i = 0; i < ConfigData.finderSetting.length; i++) {
		finderStepData.push(ConfigData.finderSetting[i].finderStep);
	}


	// 데이터 뿌리기
	function stepUpdateEvent(idx, judgmentStep) {
		// let _answerLength = ConfigData.finderSetting[idx].selectionsData.length;
		let currentSelectionsData = ConfigData.finderSetting[idx].selectionsData; // 현재 스텝의 항목 데이터
		// $(".que_title").css('display', 'block');
		// $(".qna_description").css('display', 'none');

		// 해당 스텝 정보
		console.log('----현재 스텝--------------------------------------------------------------');
		console.log('idx : ', idx);
		console.log('finder-step : ', ConfigData.finderSetting[idx].finderStep);
		console.log('interactionPage :', ConfigData.finderSetting[idx].interactionPage);
		console.log('appliancePopup :', ConfigData.finderSetting[idx].appliancePopup);
		console.log('questionText : ', ConfigData.finderSetting[idx].questionText)
		console.log('-----------------------------------------------------------------');

		// step class 변경
		$('#quickFinder').removeClass();
		$('#quickFinder').addClass(finderStepData[idx]);

		// 해당 디스클리이머 뿌리기
		$('.que_title').text(ConfigData.finderSetting[idx].questionText);

		// 해당 이미지 뿌리기
		$('#qnaImgWrap img').attr('alt', ConfigData.finderSetting[idx].defaultScreenImg);
		// $('#qnaImgWrap').attr('style', 'background-image:url'  ConfigData.finderSetting[idx].defaultScreenImg);
		// console.log(ConfigData.finderSetting[idx].defaultScreenImg)

		// step 예외 적용
		if (idx === 2) {
			// size
			// 항목 목록 뿌리기
			$('#selectWrap ol').html('');
			for (let i = 0; i < currentSelectionsData.length; i++) {
				$('#selectWrap ol').append('<li><button class="answer_btn" type="button"> <i></i> <p> ' + currentSelectionsData[i].content + '</p></button></li>');
				// console.log($('.answer_wrap').find('li button'))
				// for (let j = 0; i < selectionsData[i].content) {
				// }
			}
		} else {
			// 항목 목록 뿌리기
			$('#selectWrap ol').html('');
			for (let i = 0; i < currentSelectionsData.length; i++) {
				$('#selectWrap ol').append('<li><button class="answer_btn" type="button"> <i></i> <p> ' + currentSelectionsData[i].content + '</p></button></li>');
				$('#selectWrap ol li').eq(i).find('button').attr('data-value', currentSelectionsData[i].dataValue);
			}
		}


		// 이전 데이터 유지(뿌리기) , 다음 스텝 데이터 삭제
		if (judgmentStep === 'backStep') {
			$(".que_title").css('display', 'none');
			$(".qna_description").css('display', 'block');
			selectAnswer[idx + 1].value = []; // 다음 스텝 데이터 삭제


			// 버튼 value와 저장된 value와 같으면 active 
			$(".answer_btn").each(function () {
				let _this = $(this);
				selectAnswer[idx].value.forEach(function (item) {
					if (_this.data('value') === item) {
						_this.addClass('active');
					}
				});
			});
		} else {
			$(".que_title").css('display', 'block');
			$(".qna_description").css('display', 'none');
		}
		answerSelectEvent(idx, currentSelectionsData, judgmentStep);
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


	// 항목 클릭 이벤트 함수
	function answerSelectEvent(idx, currentSelectionsData, judgmentStep) {
		let selectValueData = [];
		let lastSelectDataValue;
		// console.log('항목 클릭 이벤트 : ', idx);
		console.log(judgmentStep);

		// 이전 스텝
		if (judgmentStep !== 'backStep') {
			$('.answer_btn').removeClass('active');
		}

		selectValueData = selectAnswer[idx].value;
		console.log(selectValueData);

		$('#nextStepBtn').removeClass('on');
		$('#shopNowBtn').removeClass('on');

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
				lastSelectDataValue = _this.data('value');
			} else {
				// value 저장 배열에서 현재 선택된 value 와 중복되는 데이터 제거
				selectValueData.forEach(function (item, idx) {
					if (item === _selectValue) {
						selectValueData.splice(idx, 1);
					}
				});
				// 선택된 value push
				if (_this.hasClass('active')) {
					selectValueData.push(_selectValue);
				}

				console.log(selectValueData);
				selectAnswer[idx].value = selectValueData; // 최종 선택된 value push
				lastSelectDataValue = selectValueData[selectValueData.length - 1];
				console.log(lastSelectDataValue)
			}

			console.log('selectAnswer (선택된 value 데이터 저장) : ', selectAnswer);
			// console.log('currentSelectionsData (현재 스텝 항목): ', currentSelectionsData);

			// value 저장 배열의 마지막 value 값과 매칭되는 항목 데이터 가져오기
			let selectData = currentSelectionsData.filter(item => {
				return item.dataValue === lastSelectDataValue
			})





			// 하나 이상 선택시 active 되는 부분
			if ($('.answer_btn.active').length > 0) {
				$('#nextStepBtn').addClass('on');
				$('#shopNowBtn').addClass('on');

				$(".que_title").css('display', 'none');
				$(".qna_description").css('display', 'block');

				// 선택한 항목 데이터 뿌리기
				$(".qna_description .txt_box").text(selectData[0].changeData.description);


			} else {
				$(".que_title").css('display', 'block');
				$(".qna_description").css('display', 'none');
				$('#nextStepBtn').removeClass('on');
				$('#shopNowBtn').removeClass('on');
			}
		});
	}













	// 결과화면
	$('#shopNowBtn').on('click', function () {
		console.log('결과화면');
	});

	stepChangeEvent(0);








	// 테스트

}































