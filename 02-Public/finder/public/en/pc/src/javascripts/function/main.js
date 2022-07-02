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
				value: 'step1-value1',
				screenImg: {
					// defaultScreenImg: '',
					changeScreenImg: '멀티 냉장고 남자이미지1',
					popupImg: '멀티 냉장고 팝업.png',
					productImg: '멀티 냉장고 화이트 이미지',
				},
				capacity: ['capacity-value1', 'capacity-value2'],
				size: {
					depth: ['depth-value1'],
					width: ['width-value2', 'width-value3'],
					height: ['height-value2'],
				},
			},
			{
				id: '아메리칸 냉장고',
				value: 'step1-value2',
				screenImg: {
					// defaultScreenImg: '',
					changeScreenImg: '아메리칸 냉장고 남자이미지2',
					popupImg: '아메리칸 냉장고 팝업 이미지.png',
					productImg: '아메리칸 냉장고 화이트 이미지',
				},
				capacity: ['capacity-value1', 'capacity-value2'],
				size: {
					depth: ['depth-value2'],
					width: ['width-value1'],
					height: ['height-value2', 'height-value3'],
				},
			},
			{
				id: '톨 냉장고',
				value: 'step1-value3',
				screenImg: {
					// defaultScreenImg: '',
					changeScreenImg: '톨 냉장고 남자이미지3',
					popupImg: '톨 냉장고 팝업 이미지.png',
					productImg: '톨 냉장고 화이트 이미지',
				},
				capacity: ['value1', 'value1'],
				size: {
					depth: ['depth-value1'],
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
				descriptionClass: 'desc_1', // 디스크립션 class 종류
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
				descriptionClass: 'desc_2', // 디스크립션 class 종류
				selectionsData: [
					{
						dataValue: 'step2-value1',
						content: 'step2-content1',
						iconImgUrl: {
							default: '항목 1 아이콘',
							active: 'active 멀티 아이콘'
						},
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 항목 1 디스크립션',
							icon: '항목 1 icon',
						}
					},
					{
						dataValue: 'step2-value2',
						content: 'step2-content2',
						iconImgUrl: {
							default: '항목 1 아이콘',
							active: 'active 멀티 아이콘'
						},
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 항목 2 디스크립션',
							icon: '항목 2 icon',
						}
					},
					{
						dataValue: 'step2-value3',
						content: 'step2-content3',
						iconImgUrl: {
							default: '항목 1 아이콘',
							active: 'active 항목 아이콘'
						},
						// 클릭시 변경되야할 데이터 항목 
						changeData: {
							description: 'step02 항목 3 디스크립션',
							icon: '항목 3 icon',
						}
					},
				],
			},
			// 예외 (size)
			{
				finderStep: 'step03',
				key: '',
				questionText: 'Q3 - 냉장고제품 질문?',
				defaultScreenImg: 'step3-메인 이미지',
				interactionPage: false, // 인터렉트 페이지 유/무 정의
				appliancePopup: true, // 팝업 유/무 정의
				descriptionClass: 'desc_2', // 디스크립션 class 종류
				selectionsData: [
					{
						label: 'depth 설명',
						item: {
							dataValue: ['depth-value1', 'depth-value1',],
							content: ['depth-content1', 'depth-content2',],
						}
					},
					{
						label: 'depth 설명',
						item: {
							dataValue: ['width-value1', 'width-value2', 'width-value3',],
							content: ['width-content1', 'width-content2', 'width-content3',],
						}
					},
					{
						label: 'depth 설명',
						item: {
							dataValue: ['height-value1', 'height-value2', 'height-value3',],
							content: ['height-content1', 'height-content2', 'height-content3',],
						}
					},
				],
			},
		]
	}


	// 스텝 class 저장
	for (let i = 0; i < ConfigData.finderSetting.length; i++) {
		finderStepData.push(ConfigData.finderSetting[i].finderStep);
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


	// 데이터 뿌리기 (현재 스텝 데이터 항목 뿌리기)
	function stepUpdateEvent(idx, judgmentStep) {
		let currentSelectionsData = ConfigData.finderSetting[idx].selectionsData; // 현재 스텝의 항목 데이터
		let currentAnswerValue = selectAnswer[idx].value; // 현재스텝 저장된 value 
		let lastAnswerValue; // 저장된 데이터에서 마지막 value
		let selectProduct = selectAnswer[0].value[0]; // 1스텝 value
		let descClass = ConfigData.finderSetting[idx].descriptionClass; // 해당스텝 class
		// 스텝1 문항 선택과 매칭되는 object 데이터 가져오기
		let productObject = ConfigData.object.filter(item => {
			return item.value === selectProduct
		})
		console.log(productObject)

		// 해당 스텝 정보
		console.log('----현재 스텝--------------------------------------------------------------');
		console.log('idx (현재스텝 index) : ', idx);
		console.log('finder-step (현재스텝) : ', ConfigData.finderSetting[idx].finderStep);
		console.log('interactionPage (인터렉션 페이지 유/무) :', ConfigData.finderSetting[idx].interactionPage);
		console.log('appliancePopup (팝업 유/무) :', ConfigData.finderSetting[idx].appliancePopup);
		console.log('questionText (질문) : ', ConfigData.finderSetting[idx].questionText)
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
		$('#selectWrap ol').html('');

		/* 해당 항목 데이터 뿌리기 start------------- */
		if (idx === 2) {
			let liHtml = '';
			// li , button 뿌리기
			for (let i = 0; i < currentSelectionsData.length; i++) {
				let buttonHtml = '';
				for (let j = 0; j < currentSelectionsData[i].item.dataValue.length; j++) {
					buttonHtml += '<button class="answer_btn" type="button" data-value="' + currentSelectionsData[i].item.dataValue[j] + '" > ' + currentSelectionsData[i].item.content[j] + ' </button>';
					// $('#selectWrap ol li').eq(i).find('button').eq(j).attr('data-value', currentSelectionsData[i].item.dataValue[j]);
				}
				liHtml += '<li> ' + buttonHtml + ' </li>';
			}
			$('#selectWrap ol').append(liHtml);
		} else {
			for (let i = 0; i < currentSelectionsData.length; i++) {
				$('#selectWrap ol').append('<li><button class="answer_btn" type="button" data-value="' + currentSelectionsData[i].dataValue + '"> <i></i> <p> ' + currentSelectionsData[i].content + '</p></button></li>');
				// $('#selectWrap ol li').eq(i).find('button').attr('data-value', currentSelectionsData[i].dataValue);
			}
		}





		if (idx === 1) {
			console.log('스텝2');
			// console.log(productObject[0])
			$("#qnaImgWrap").find('img').attr('alt', productObject[0].screenImg.changeScreenImg)
		}
		/* 해당 항목 데이터 뿌리기 end------------- */



		// back 버튼 클릭시 이전 데이터 유지, 다음 스텝 데이터 삭제
		if (judgmentStep === 'backStep') {
			$(".que_title").css('display', 'none');
			$(".qna_description").css('display', 'block');
			selectAnswer[idx + 1].value = []; // 다음 스텝 데이터 삭제

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
			} else {
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


			console.log('selectAnswer (선택된 value 데이터 저장) : ', selectAnswer);
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
		})




		// 선택한 항목 데이터 뿌리기
		if ($('.answer_btn.active').length > 0) {
			// 공통 뿌리기
			$(".qna_description .txt_box").text(selectData[0].changeData.description);
			if (idx === 0) {
				$("#qnaImgWrap img").attr('alt', selectData[0].changeData.screenImgUrl);
			}
		}


	}











	// 결과화면
	$('#shopNowBtn').on('click', function () {
		console.log('결과화면');
	});

	// 퀵파인더 start
	stepChangeEvent(0);
}































