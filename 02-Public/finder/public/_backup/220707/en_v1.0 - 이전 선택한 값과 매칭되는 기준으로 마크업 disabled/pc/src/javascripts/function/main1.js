function main1() {
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
            Q2: 'step1_value2',
            Q3: 'step3_value2',
            Q3_1: 'step3_1_value1',
            Q3_2: 'step3_2_value2',
            Q3_3: 'step3_3_value3',
         }
      },
      {
         productKey: 'product02',
         data: {
            Q1: 'step1_value2',
            Q2: 'step2_value2',
            Q3: 'step3_value1',
            Q3_1: 'step3_1_value1',
            Q3_2: 'step3_2_value2',
            Q3_3: 'step3_3_value3',
            // Q4: ['value1', 'value3', 'value4'],
         }
      },
      {
         productKey: 'product03',
         data: {
            Q1: 'step1_value1',
            Q2: 'step2_value3',
            Q3: 'step3_value1',
            Q3_1: 'step3_1_value1',
            Q3_2: 'step3_2_value2',
            Q3_3: 'step3_3_value3',
            // Q4: ['value1', 'value5', 'value7'],
         }
      },
      {
         productKey: 'product04',
         data: {
            Q1: 'step1_value3',
            Q2: 'step2_value3',
            Q3: 'step3_value2',
            Q3_1: 'step3_1_value2',
            Q3_2: 'step3_2_value1',
            Q3_3: 'step3_3_value1',
            // Q4: ['value9', 'value1', 'value8'],
         }
      },
      {
         productKey: 'product05',
         data: {
            Q1: 'step1_value3',
            Q2: 'step2_value4',
            Q3: 'step3_value3',
            Q3_1: 'step3_1_value1',
            Q3_2: 'step3_2_value1',
            Q3_3: 'step3_3_value2',
            // Q4: ['value9', 'value1', 'value8'],
         }
      },
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
                  dataValue: 'step3_value1',
                  content: 'step3_content1',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step03 - 항목 1 디스크립션',
                     screenImgUrl: 'step03 - 항목 1 이미지',
                  }
               },
               {
                  dataValue: 'step3_value2',
                  content: 'step3_content2',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step03 - 항목 2 디스크립션',
                     screenImgUrl: 'step03 - 항목 2 이미지',
                  }
               },
               {
                  dataValue: 'step3_value3',
                  content: 'step3_content3',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step03 - 항목 3 디스크립션',
                     screenImgUrl: 'step03 - 항목 3 이미지',
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
                  dataValue: 'step3_value1',
                  content: 'step3_content1',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step04 - 항목 1 디스크립션',
                     screenImgUrl: 'step04 - 항목 1 이미지',
                  }
               },
               {
                  dataValue: 'step3_value2',
                  content: 'step3_content2',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step04 - 항목 2 디스크립션',
                     screenImgUrl: 'step04 - 항목 2 이미지',
                  }
               },
               {
                  dataValue: 'step3_value3',
                  content: 'step3_content3',
                  // 클릭시 변경되야할 데이터 항목 
                  changeData: {
                     description: 'step04 - 항목 3 디스크립션',
                     screenImgUrl: 'step04 - 항목 3 이미지',
                  }
               },
            ],
         },
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
               }
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

   let _filterProductArray = []; // 스텝에서 filter 거친 product 최종배열

   function stepUpdateEvent(idx, judgmentStep) {
      let currentSelectionsData = ConfigData.finderSetting[idx].selectionsData; // 현재 스텝의 항목 데이터
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
      if (idx !== 0) {
         let liHtml = ''; // li , button html
         let disabledPresence = ''; // disabled 유 / 무

         // 제품 index 만큼 for 문 실행
         for (let i = 0; i < productObject.length; i++) {
            // 현재 선택한 항목의 배열 수 만큼 제품 for 문 실행
            for (let j = 0; j < Object.values(_result)[idx - 1].length; j++) {
               // 제품의 value 값과 선택 항목의 value 값이 매칭되는 제품 추출
               if (Object.values(productObject[i].data)[idx - 1] === Object.values(_result)[idx - 1][j]) {
                  // 매칭되는 제품 데이터 값 배열에 push
                  _array.push(productObject[i]);
               }
            }
         }

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
         for (let i = 0; i < currentSelectionsData.length; i++) {
            let bol;
            // 현재 저장된 product 갯수 만큼 for 문 돌리기
            for (let j = 0; j < _filterProductArray.length; j++) {
               // 저장된 product value 와 현스텝의 마크업 value 와 매칭되는 데이터 추출
               if (Object.values(_filterProductArray[j].data)[idx] === currentSelectionsData[i].dataValue) {
                  bol = true;
               }
            }
            // value 가 하나라도 같은게 없으면 disabled
            if (!bol) {
               disabledPresence = 'disabled';
            } else {
               disabledPresence = '';
            }
            liHtml += '<li><button class="answer_btn" type="button" data-value="' + currentSelectionsData[i].dataValue + '" ' + disabledPresence + ' > ' + currentSelectionsData[i].content + ' </button></li>';
         }
         $('#selectWrap ol').append(liHtml);
      } else {
         // step 1
         for (let i = 0; i < currentSelectionsData.length; i++) {
            $('#selectWrap ol').append('<li><button class="answer_btn" type="button" data-value="' + currentSelectionsData[i].dataValue + '"> <i></i> <p> ' + currentSelectionsData[i].content + '</p></button></li>');
         }
      }
      // console.log(_filterProductArray); // 현재 저장된 최종 product 배열




      answerSelectEvent(idx, currentSelectionsData, judgmentStep); // 항목 클릭 함수
   }


   function answerSelectEvent(idx, currentSelectionsData, judgmentStep) {
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
         console.log('클릭을 했습니다!');
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
            console.log(currentAnswerValue); //현재 스텝 value 값
            lastAnswerValue = currentAnswerValue[currentAnswerValue.length - 1]; //선택된 마지막 value
            console.log(lastAnswerValue)
         }

         console.log('_result (사용자가 선택한 스텝별 value) : ', _result);

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
            console.log(selectData[0].changeData.description)
            $(".qna_description .txt_box span").text(selectData[0].changeData.description);
            $("#qnaImgWrap img").attr('alt', selectData[0].changeData.screenImgUrl);
         } else if (idx === 2) {
            $(".qna_description .txt_box").text(selectData[0].description.head);
            $(".qna_description .txt_box").text(ConfigData.finderSetting[idx].description.head);
            console.log(selectData[0])
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