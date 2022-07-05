function main1() {
   // 결과 값 추출 object
   let _result = {
      Q1: ['step1_value2', 'step1_value1'],
      Q2: ['step1_value2'],
      Q3_1: [],
      Q3_2: [],
      Q3_3: [],
      Q4: [],
      Q5: [],
      Q6: [],
      Q7: [],
   }

   // 제품 데이터 예시 
   const productObject = [
      {
         productKey: 'product01',
         data: {
            Q1: 'step1_value1',
            Q2: 'step1_value2',
            Q3_1: 'value3',
            Q3_2: 'value2',
            Q3_3: 'value1',
         }
      },
      {
         productKey: 'product02',
         data: {
            Q1: 'step1_value2',
            Q2: 'step2_value2',
            Q3_1: 'value1',
            Q3_2: 'value2',
            Q3_3: 'value3',
            // Q4: ['value1', 'value3', 'value4'],
         }
      },
      {
         productKey: 'product03',
         data: {
            Q1: 'step1_value2',
            Q2: 'step2_value3',
            Q3_1: 'value1',
            Q3_2: 'value2',
            Q3_3: 'value2',
            // Q4: ['value1', 'value5', 'value7'],
         }
      },
      {
         productKey: 'product04',
         data: {
            Q1: 'step1_value2',
            Q2: 'step2_value2',
            Q3_1: 'value2',
            Q3_2: 'value3',
            Q3_3: 'value1',
            // Q4: ['value9', 'value1', 'value8'],
         }
      },
      {
         productKey: 'product05',
         data: {
            Q1: 'step1_value4',
            Q2: 'step2_value2',
            Q3_1: 'value2',
            Q3_2: 'value3',
            Q3_3: 'value1',
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
            defaultScreenImg: 'step2-메인 이미지',
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
            questionText: 'step01 - 질문?',
            defaultScreenImg: 'step01 - default 이미지',
            interactionPage: true, // 인터렉트 페이지 유/무 정의
            appliancePopup: false, // 팝업 유/무 정의
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

   let _filterProductArray = [{},{}];

   function stepUpdateEvent(idx, judgmentStep) {
      let currentSelectionsData = ConfigData.finderSetting[idx].selectionsData; // 현재 스텝의 항목 데이터
      let _array = [];
      // let currentAnswerValue = selectAnswer[idx].value; // 현재스텝 저장된 value 

      // 해당 스텝 정보
      console.log('----현재 스텝--------------------------------------------------------------');
      console.log('idx (현재스텝 index) : ', idx);
      console.log('--------------------------------------------------------------------------');


      /* 
         1. 현 스텝의 선택 문항을 _result 배열에 push 한다.
         2. 예시로 만들어놓은 제품 데이터 value 와 _result 의 value 값이 매칭되는 제품 데이터(product 제품) 모두 추출 하여 한 배열에 담아 놓는다.
         3. 추출된 제품 데이터 배열과 다음 스텝의 마크업에 데이터와 일치하는 값이 없을 경우에 해당되는 value 값을 가진 button에 disabled 한다.
      */


      // 제품 index 만큼 for 문 실행
      for (let i = 0; i < productObject.length; i++) {
         if (idx !== 0) { // step 2 부터 매칭 
            // 현재 선택한 항목의 배열 수 만큼 제품 for 문 실행
            for (let j = 0; j < Object.values(_result)[idx - 1].length; j++) {
               // 제품의 value 값과 선택 항목의 value 값이 매칭되는 제품 추출
               if (Object.values(productObject[i].data)[idx - 1] === Object.values(_result)[idx - 1][j]) {
                  // 매칭되는 제품 데이터 값 배열에 push
                  // console.log(productObject[i])
                  _array.push(productObject[i]);
               }
            }
         }
      }

      // console.log(_array);
      if (idx !== 0) {
         // console.log(_array[0].productKey);
         for ( let i = 0; i < _array.length; i++ ) {
            console.log(_array[i].productKey);
            // console.log(_filterProductArray)
            // console.log(typeof _filterProductArray === 'object');
            // console.log(_filterProductArray[i])

            for (let j = 0; j <_filterProductArray.length; j++) {
               // console.log(_filterProductArray[j].productKey)
               // console.log(_filterProductArray[j].productKey === _array[i].productKey)
               if (_filterProductArray[j].productKey === _array[i].productKey) {
                  _filterProductArray = [];
                  console.log(_filterProductArray.push(_array[i].productKey))
               }
            }

            

         }
      }





      /* 
         1. 배열에 저장된 데이터 현스텝 value 값과 현제 뿌려질 value 을 비교한다.
         2. 매칭되는 되는 
      */
      // step3 제외
      // if (idx !== 2) {
      //    for (let i = 0; i < currentSelectionsData.length; i++) {
      //       // console.log(i)
      //       // console.log(currentSelectionsData[i].dataValue)

      //       console.log(_filterProductArray)
      //       for (let j = 0; j < _filterProductArray.length; j++) {
      //          console.log(j);
      //          // console.log(_filterProductArray.data)
      //          console.log(Object.values(_filterProductArray[idx - 1].data))
      //       }
      //    }
      // }






























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


      for (let i = 0; i < currentSelectionsData.length; i++) {
         $('#selectWrap ol').append('<li><button class="answer_btn" type="button" data-value="' + currentSelectionsData[i].dataValue + '"> <i></i> <p> ' + currentSelectionsData[i].content + '</p></button></li>');
         // $('#selectWrap ol li').eq(i).find('button').attr('data-value', currentSelectionsData[i].dataValue);
      }

      answerSelectEvent(idx, currentSelectionsData, judgmentStep); // 항목 클릭 함수
   }


   function answerSelectEvent(idx, currentSelectionsData, judgmentStep) {
      // let currentAnswerValue = selectAnswer[idx].value; // 현재 저장된 value 
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
            // Object.values(_result)[idx].pop();
            // Object.values(_result)[idx].push(_selectValue);
            // lastAnswerValue = _selectValue;
         } else {


         }



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
   stepChangeEvent(0);
}