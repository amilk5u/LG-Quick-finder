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
    // main();
    main1();
    layout();
});
function layout() {

}




function main() {

	// select DATA
	let selectAnswer = [
		{
			key: 'key-1', // 키 들어갈 부분
			value: ['step01-value1','step01-value2'],
		},
		{
			key: 'key-2', 
			value: ['step01-value1','step01-value2'],
		},
		{
			key: 'key-3', 
			value: ['step01-value1','step01-value2'],
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
				defaultScreenImg: 'step2-메인 이미지',
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
			/* {
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
			}, */
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
































function main1() {


   let _select = {
      Q1: ['value3'],
      Q2: [''],
      Q3_1: [],
      Q3_2: [],
      Q3_3: [],
      Q4: [],
      Q5: [],
      Q6: [],
      Q7: [],
   }


   // 예시 
   const product1 = {
      'Q1': {
         Q1: ['value1'],
         Q2: ['value1'],
         Q3_1: ['value1'],
         Q3_2: ['value1'],
         Q3_3: ['value1'],
      },
      'Q2': {
         Q1: ['value2'],
         Q2: ['value2'],
         Q3_1: ['value1'],
         Q3_2: ['value1'],
         Q3_3: ['value1'],
      },
      'Q3': {
         Q1: ['value3'],
         Q2: ['value3'],
         Q3_1: ['value1'],
         Q3_2: ['value1'],
         Q3_3: ['value1'],
      },
      'Q4': {
         Q1: ['value4'],
         Q2: ['value4'],
         Q3_1: ['value1'],
         Q3_2: ['value1'],
         Q3_3: ['value1'],
      },
   }

   const productData = [
      {
         Q1: ['Q1_value1'],
         Q2: ['Q2_value1'],
         Q3_1: ['Q3_value1'],
         Q3_2: ['Q3_value2'],
         Q3_3: ['Q3_value1'],
         Q4: ['04_value1', 'Q4_value2', 'Q4_value3'],
         Q5: ['05_value1', '05_value1', '05_value1'],
         Q6: ['06_value1', '06_value1', '06_value1', '06_value1', '06_value1'],
         Q7: ['07_value2'],
      },
      {
         Q1: ['Q1_value2'],
         Q2: ['Q2_value2'],
         Q3_1: ['Q3_value1'],
         Q3_2: ['Q3_value2'],
         Q3_3: ['Q3_value3'],
         Q4: ['04_value1', 'Q4_value2', 'Q4_value3'],
         Q5: ['05_value1', '05_value1', '05_value1'],
         Q6: ['06_value1', '06_value1', '06_value1', '06_value1', '06_value1'],
         Q7: ['07_value1'],
      },
      {
         Q1: ['Q1_value3'],
         Q2: ['Q2_value3'],
         Q3_1: ['Q3_value1'],
         Q3_2: ['Q3_value3'],
         Q3_3: ['Q3_value2'],
         Q4: ['04_value1', 'Q4_value2', 'Q4_value3'],
         Q5: ['05_value1', '05_value1', '05_value1'],
         Q6: ['06_value1', '06_value1', '06_value1', '06_value1', '06_value1'],
         Q7: ['07_value3'],
      },
      {
         Q1: ['Q1_value4'],
         Q2: ['Q2_value4'],
         Q3_1: ['Q3_value3'],
         Q3_2: ['Q3_value1'],
         Q3_3: ['Q3_value2'],
         Q4: ['04_value1', 'Q4_value2', 'Q4_value3'],
         Q5: ['05_value1', '05_value1', '05_value1'],
         Q6: ['06_value1', '06_value1', '06_value1', '06_value1', '06_value1'],
         Q7: ['07_value1'],
      },
      {
         Q1: ['Q1_value4'],
         Q2: ['Q2_value4'],
         Q3_1: ['Q3_value3'],
         Q3_2: ['Q3_value1'],
         Q3_3: ['Q3_value2'],
         Q4: ['04_value1', 'Q4_value2', 'Q4_value3'],
         Q5: ['05_value1', '05_value1', '05_value1'],
         Q6: ['06_value1', '06_value1', '06_value1', '06_value1', '06_value1'],
         Q7: ['07_value1'],
      },
   ]


   for (let i = 0; i < Object.values(product1).length; i++) {

      for (let j = 0; j < Object.values(product1)[i].Q2.length; j++) {
         console.log(j)
         console.log(Object.values(product1)[i].Q1[j]);
         /*  const ddd = Object.values(product1)[i].filter(item => {
             return item.Q1 === '영채'
          }); */
         // console.log(ddd);

         // let ddd = Object.values(product1)[i]
         if (Object.values(product1)[i].Q2[j] === '영채') {
            // console.log(j)
            // console.log(Object.keys(product1)[i]);
            // product1.Object.keys(product1)[i]
            // console.log(product1.Object.keys(product1)[i]);
         }
      }
   }
}