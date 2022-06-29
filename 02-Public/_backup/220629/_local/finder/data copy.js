//냉장고 DATA
const ConfigData = {
   object: [
      {
         // id: 'fridge-freezers',
         name: 'Multi Door Fridge Freezer',
         capacity: ['500-600L', '600L'],
         size: {
            depth: ['760mm'],
            width: ['600-900mm', '900mm'],
            height: ['1800mm'],
         },
      },
      {
         // id: 'fridge-freezers',
         name: 'American Style Fridge Freezers',
         capacity: ['600L'],
         size: {
            depth: ['760mm'],
            width: ['900mm'],
            height: ['1800mm'],
         },
      },
      {
         // id: 'fridge-freezers',
         name: 'Tall Fridge Freezer',
         capacity: ['450L'],
         size: {
            depth: ['760mm'],
            width: ['600mm'],
            height: ['1800mm', '1800-2000mm', '2000mm'],
         },
      }
   ],
   screenData: [
      {
         // Product
         screen: 'Q1',
         finderStep: 1,
         qeustionText: 'What type of fridge are you looking for?',
         defaultSrceenImg: 'class_name0',
         selectionsData: [
            {
               dataValue: 'Multi',
               description: 'Multi doors with a full-width fridge above and the freezer below.',
               changeScreenImg: 'class_name1',
            },
            {
               dataValue: 'American',
               description: 'A two-door model, with fridge and freezer standing side by side.',
               changeScreenImg: 'class_name2',
            },
            {
               dataValue: 'Tall',
               description: 'Slimline with fridge on top and freezer below.',
               changeScreenImg: 'class_name3',
            }
         ],
         interactionPage: { boolean: true, },
      },
      {
         // Capacity
         screen: 'Q2',
         finderStep: 2,
         qeustionText: 'Product capacity What capacity do you need?',
         defaultSrceenImg: 'class_name0',
         selectionsData: [
            {
               dataValue: '450L',
               content: 'Under 450L',
               description: 'A practical choice for infrequent fridge users or prudent grocery shoppers.',
               icon: {
                  url: './images/icon/icon-1.png'
               },
            },
            {
               dataValue: '500-600L',
               content: '500-600L',
               description: 'A frequently chosen option for many households.',
               icon: {
                  url: './images/icon/icon-2.png'
               },
            },
            {
               dataValue: '600L',
               content: '600L or more ',
               description: 'For those who stock up on groceries, or share the fridge with many others.',
               icon: {
                  url: './images/icon/icon-3.png'
               },
            }
         ],
         interactionPage: { boolean: false },
      },
      {
         // Size
         screen: 'Q3',
         finderStep: 3,
         qeustionText: 'Product size Which size best fits your space?',
         defaultSrceenImg: 'class_name0',
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
         screen: 'Q4',
         finderStep: 4,
         qeustionText: 'Ice & Water Dispenser Do you need a fridge with an Ice & Water Dispenser?',
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
      {
         // Priority
         screen: 'Q5',
         finderStep: 5,
         qeustionText: 'Key feature (Opt. Main feature) Which key feature of a fridge is your priority?',
         defaultSrceenImg: 'class_name0',
         selectionsData: [
            {
               dataValue: 'Long-lasting-freshness',
               content: 'Long-lasting freshness',
               description: {
                  head: 'Enjoy fresh food with LG’s temperature control and cooling technology. ',
                  detaile: 'High-tech features like Linear Cooling, Door Cooling+, and etc, lets you keep food fresher, longer.',
               },
               icon: { url: './images/icon/icon-1.png' },
            },
            {
               dataValue: 'Ventilation',
               content: 'Ventilation',
               description: 'Pure N Fresh minimises food odours and keeps the air fresh.',
               icon: { url: './images/icon/icon-2.png' },
            },
            {
               dataValue: 'Energy Ratings',
               content: 'A or better Energy Ratings',
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
let selectData = [

]