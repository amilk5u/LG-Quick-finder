// step 저장
let finderStepData = [];

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
			finderStep: 'step-1',
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
			finderStep: 'step-2',
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
						description: '멀티 디스크립션',
						screenImgUrl: '멀티 냉장고 이미지',
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
						description: '멀티 디스크립션',
						screenImgUrl: '멀티 냉장고 이미지',
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
						description: '멀티 디스크립션',
						screenImgUrl: '멀티 냉장고 이미지',
					}
				},
			],
		},
		{
			finderStep: 'step-3',
			questionText: 'Q3 - 냉장고제품 질문?',
			defaultScreenImg: 'step3-메인 이미지',
			interactionPage: false, // 인터렉트 페이지 유/무 정의
			appliancePopup: true, // 팝업 유/무 정의
		},
		{
			finderStep: 'step-4',
			questionText: 'Q4 - 냉장고제품 질문?',
			defaultScreenImg: 'url',
			interactionPage: true, // 인터렉트 페이지 유/무 정의
			appliancePopup: false, // 팝업 유/무 정의
		},
		{
			finderStep: 'step-5',
			questionText: 'Q5 - 냉장고제품 질문?',
			defaultScreenImg: 'url',
			interactionPage: true, // 인터렉트 페이지 유/무 정의
			appliancePopup: false, // 팝업 유/무 정의
		},
		{
			finderStep: 'step-6',
			questionText: 'Q6 - 냉장고제품 질문?',
			defaultScreenImg: 'url',
			interactionPage: false, // 인터렉트 페이지 유/무 정의
			appliancePopup: false, // 팝업 유/무 정의
		},
		{
			finderStep: 'step-7',
			questionText: 'Q7 - 냉장고제품 질문?',
			defaultScreenImg: 'url',
			interactionPage: false, // 인터렉트 페이지 유/무 정의
			appliancePopup: false, // 팝업 유/무 정의
		}
	]
}


// 스텝 class 저장
for (let i = 0; i < ConfigData.finderSetting.length; i++) {
	finderStepData.push(ConfigData.finderSetting[i].finderStep);
}



// 데이터 뿌리기
function loadStepEvent(idx) {

	// let _answerLength = ConfigData.finderSetting[idx].selectionsData.length;
	let selectionsData = ConfigData.finderSetting[idx].selectionsData;


	// 해당 페이지 정보
	console.log('----해당 페이지 정보--------------')
	console.log('idx : ', idx);
	console.log('finder-step : ', ConfigData.finderSetting[idx].finderStep);
	console.log('interactionPage :', ConfigData.finderSetting[idx].interactionPage);
	console.log('appliancePopup :', ConfigData.finderSetting[idx].appliancePopup);
	console.log('questionText : ', ConfigData.finderSetting[idx].questionText)
	console.log('----------------------------------------------------------------------------------')

	// 스텝 전환
	$(".appliance_finder > div").removeClass();
	$(".appliance_finder > div").addClass(finderStepData[idx]);

	// 해당 디클 뿌리기
	$(".question_txt").text(ConfigData.finderSetting[idx].questionText);

	// 해당 이미지 뿌리기
	$(".screen_img img").attr('alt', ConfigData.finderSetting[idx].defaultScreenImg);
	// console.log(ConfigData.finderSetting[idx].defaultScreenImg)



	// 항목뿌리기
	// 항목 갯수 만큼 뿌리기
	console.log($(".answer_wrap").html(''));
	for (let i = 0; i < selectionsData.length; i++) {
		$(".answer_wrap").append('<li><button class="answer_btn" type="button">' + selectionsData[i].content +'</button></li>');
		// console.log($(".answer_wrap").find("li button"))
	}
}

// 페이지 이동 이벤트
function stepChangeEvent(idx) {
	// 페이지 open
	$(".appliance_finder").css('display', 'block');
	loadStepEvent(idx);
	// 다음버튼
	$("#nextBtn").on("click", function () {
		if (idx < ConfigData.finderSetting.length - 1) {
			idx++;
			loadStepEvent(idx);
		}
	});
	// 이전버튼
	$("#prevBtn").on("click", function () {
		if (idx > 0) {
			idx--;
			loadStepEvent(idx);
		}
	});
}
stepChangeEvent(0);




// 결과화면
$("#shopNow").on("click", function () {
	console.log("결과화면");
});












// select DATA
let selectAnswer = {
	Q1: ['value1'],
	Q2: ['value1', 'value2'],
	Q3: ['value3', 'value3'],
	Q4: ['value1', 'value1', 'value1',],
	Q5: ['value1', 'value1'],
	Q6: ['value1'],
	Q7: ['value1', 'value1'],
}


function finder() {
	alert("민주바보")
}