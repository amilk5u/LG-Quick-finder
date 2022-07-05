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