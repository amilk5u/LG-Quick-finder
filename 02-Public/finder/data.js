// step 배열 순서 저장
let finderStepData = [];

// select DATA
let selectAnswer = [
	{
		key: [],
		value: [],
	},
	{
		key: [],
		value: [],
	},
	{
		key: [],
		option: {
			depth: [],
			width: [],
			height: [],
		}
	},
]
/* let selectAnswer = {
	'step-1': ['value1', 'value2'],
	'step-2': ['value1', 'value2'],
	'step-3': {
		depth: ['value1'],
		width: ['value'],
		height: ['value', 'value2'],
	},
	'step-4': ['value1', 'value2'],
	'step-5': ['value1', 'value2'],
	'step-6': ['value1', 'value2'],
	'step-7': ['value1', 'value2'],
} */


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
			finderStep: 'step-2',
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
function stepUpdateEvent(idx) {
	// let _answerLength = ConfigData.finderSetting[idx].selectionsData.length;
	let selectionsData = ConfigData.finderSetting[idx].selectionsData;

	// 해당 페이지 정보
	console.log('----현재 페이지--------------------------------------------------------------');
	console.log('idx : ', idx);
	console.log('finder-step : ', ConfigData.finderSetting[idx].finderStep);
	console.log('interactionPage :', ConfigData.finderSetting[idx].interactionPage);
	console.log('appliancePopup :', ConfigData.finderSetting[idx].appliancePopup);
	console.log('questionText : ', ConfigData.finderSetting[idx].questionText)

	// step class 변경
	$('.appliance_finder > div').removeClass();
	$('.appliance_finder > div').addClass(finderStepData[idx]);

	// 해당 디스클리이머 뿌리기
	$('.question_txt').text(ConfigData.finderSetting[idx].questionText);

	// 해당 이미지 뿌리기
	$('.screen_img img').attr('alt', ConfigData.finderSetting[idx].defaultScreenImg);
	// console.log(ConfigData.finderSetting[idx].defaultScreenImg)

	// step 예외 적용
	if (idx === 2) {
		// size
		// 항목 목록 뿌리기
		$('.answer_wrap').html('');
		for (let i = 0; i < selectionsData.length; i++) {
			$('.answer_wrap').append('<li><button class="answer_btn" type="button">' + selectionsData[i].content + '</button></li>');
			// console.log($('.answer_wrap').find('li button'))
			// for (let j = 0; i < selectionsData[i].content) {
			// }
		}
	} else {
		// 항목 목록 뿌리기
		$('.answer_wrap').html('');
		for (let i = 0; i < selectionsData.length; i++) {
			$('.answer_wrap').append('<li><button class="answer_btn" type="button">' + selectionsData[i].content + '</button></li>');
			$('.answer_wrap li').eq(i).find('button').attr('data-value', selectionsData[i].dataValue);
		}
	}
	answerSelectEvent(idx, selectionsData);
}



// 페이지 이동 이벤트 함수
function stepChangeEvent(idx) {
	// 페이지 open
	$('.appliance_finder').css('display', 'block');
	stepUpdateEvent(idx);

	// 다음버튼
	$('#nextBtn').on('click', function () {
		if (idx < ConfigData.finderSetting.length - 1) {
			idx++;
			stepUpdateEvent(idx);
		}
	});
	// 이전버튼
	$('#prevBtn').on('click', function () {
		if (idx > 0) {
			idx--;
			stepUpdateEvent(idx);
		}
	});
}


// 항목 클릭 이벤트 함수
function answerSelectEvent(idx, selectionsData) {
	let bin = [];

	console.log('항목 클릭 이벤트 : ', idx);
	$('.answer_btn').removeClass('select');
	$('#nextBtn').removeClass('on');
	$('#shopNow').removeClass('on');

	// 항목 클릭 
	$('.answer_btn').on('click', function () {
		let _this = $(this);

		if (idx !== 0) {
			if (!_this.hasClass('select')) {
				// console.log('add');
				_this.addClass('select');
			} else {
				// console.log('remove')
				_this.removeClass('select');
			}

			/* if (_this.hasClass('select')) {
				bin.push(_this.data('value'));
			} */

		} else {
			$('.answer_btn').removeClass('select');
			_this.addClass('select');
		}


		// 제품선택 매칭
		if (idx === 0) {
			console.log('항목 클릭!!!------------------------------');
			selectAnswer[idx].value = [];
			selectAnswer[idx].value.push(_this.data('value'));

			/* 		for (let i = 0; i < selectionsData.length; i++) {
						console.log(i);
						console.log($('.answer_btn').index());
						// console.log(_this.index() === i)
					} */
		} else {
			console.log('나머지 페이지 클릭')


			if (_this.hasClass('select')) {
				bin.push(_this.data('value'))
			}
			console.log(bin);

			bin.forEach(function(i){
				console.log(i);
			});
		}








		// 하나 이상 선택시 active 되는 부분
		if ($('.answer_btn.select').length > 0) {
			$('#nextBtn').addClass('on');
			$('#shopNow').addClass('on');
		} else {
			$('#nextBtn').removeClass('on');
			$('#shopNow').removeClass('on');
		}
	});
}




// 결과화면
$('#shopNow').on('click', function () {
	console.log('결과화면');
});

function init() {
	stepChangeEvent(0);
}
init();







