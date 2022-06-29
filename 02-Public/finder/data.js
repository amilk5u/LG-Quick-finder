//냉장고 DATA
const ConfigData = {
   object: [
      {
         name: '냉장고1',
         defaultSrceenImg: 'url',
         popupImgUrl: 'url',
         capacity: ['value1', 'value1'],
         size: {
            depth: ['value1'],
            width: ['value1', 'value1'],
            height: ['value1'],
         },
      },
      {
         name: '냉장고2',
         defaultSrceenImg: 'url',
         popupImgUrl: 'url',
         capacity: ['value1', 'value1'],
         size: {
            depth: ['value1'],
            width: ['value1', 'value1'],
            height: ['value1'],
         },
      },
      {
         name: '냉장고3',
         defaultSrceenImg: 'url',
         popupImgUrl: 'url',
         capacity: ['value1', 'value1'],
         size: {
            depth: ['value1'],
            width: ['value1', 'value1'],
            height: ['value1'],
         },
      }
   ],
   screenData: [
      {
         finderStep: 'Q1',
         questionText: 'Q1 - 냉장고제품 질문?',
         defaultSrceenImgUrl: 'url',
         selectionsData: [
            {
               dataValue: 'RG00043687',
               content: '냉장고1',
               description: '냉장고 1 디스크립션',
               iconURl: 'url',
               SrceenImgUrl: 'url'
            },
            {
               dataValue: 'RG00043687',
               content: '냉장고1',
               description: '냉장고 2 디스크립션',
               iconURl: 'url',
               SrceenImgUrl: 'url'
            },
            {
               dataValue: 'RG00043687',
               content: '냉장고1',
               description: '냉장고 2 디스크립션',
               iconURl: 'url',
               SrceenImgUrl: 'url'
            }
         ],
         interactionPage: { boolean: true, },
      },
      {
         // Capacity
         finderStep: 'Q2',
         questionText: 'Q2 - Capacity 질문?',
         defaultSrceenImgUrl: 'url',
         selectionsData: [
            {
               dataValue: 'RG00043687',
               content: 'Under 450L',
               description: 'A practical choice for infrequent fridge users or prudent grocery shoppers.',
               icon: {
                  url: './images/icon/icon-1.png'
               },
            },
         ],
         interactionPage: { boolean: false },
      },
      {
         // Size
         finderStep: 'Q3',
         questionText: 'Q3 - Size 질문?',
         defaultSrceenImgUrl: 'url',
         description: {
            head: 'A guide to measure your fridge space.',
            detaile: 'Know how much space you have for your fridge. Doors need (25-50 mm) space to open and ventilate. All LG fridges are counter depth, a slender, complementary structure. Cold or hot spots are not advised.'
         },
         selectionsData: {
            depth: [
               { dataValue: '760mm', content: 'Counter depth (Under 760 mm)' },
               { dataValue: '760mm-', content: 'Standard depth (760 mm or more)' },
            ],
            width: [
               { dataValue: '600mm', content: 'Under 600 mm' },
               { dataValue: '600-900mm', content: '600-900 mm' },
               { dataValue: '900m-', content: '900 mm or more' }
            ],
            height: [
               { dataValue: '1800mm', content: 'Under 1800 mm' },
               { dataValue: '1800-2000mm', content: '1800-2000 mm' },
               { dataValue: '2000mm-', content: '2000 mm or more' }
            ],
         },
         interactionPage: { boolean: false },
      },
      {
         // Ice & Water
         finderStep: 'Q4',
         questionText: 'Ice & Water Dispenser Do you need a fridge with an Ice & Water Dispenser?',
         defaultSrceenImg: 'class_name0',
         selectionsData: [
            {
               dataValue: 'Plumbed',
               content: 'Plumbed',
               description: 'Get handy access to water and ice withot refilling the water tank.',
               icon: { url: './images/icon/icon-1.png' },
            },
            {
               dataValue: 'Non-Plumbed',
               content: 'Non Plumbed',
               description: {
                  head: 'Refillable water tanks connected to the dispenser.',
                  detaile: "When connecting to a direct water supply isn't feasible, non-plumbed fridges offer a convenient alternative of refillable water tanks connected to a door-mounted dispenser."
               },
               icon: { url: './images/icon/icon-2.png' },
            },
            {
               dataValue: 'Water only',
               content: 'Non Plumbed (Water only)',
               description: {
                  head: 'Enjoy chilled water straight from your fridge.',
                  detaile: 'A handy way to access chilled water from your freezer through a built-in refillable water tank.'
               },
               icon: { url: './images/icon/icon-3.png' },
            },
            {
               dataValue: 'No-ice-water-dispenser',
               content: 'No ice & water dispenser',
               description: "I don't need one.",
               icon: { url: './images/icon/icon-3.png' },
            },
            {
               dataValue: 'All',
               content: "Doesn't matter to me, I'd like to see all models.",
               description: null,
               icon: { url: null },
            },
         ],
         interactionPage: { boolean: false },
      },

   ]
}

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