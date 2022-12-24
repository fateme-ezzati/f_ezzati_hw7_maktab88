generateData()

function generateData(){
    for (const key in personData) {
        // console.log(personData[key].uid)

        let index = additionalPersonData.find(item=>item.uid===key)
        // var result = myArray.find(item => item.id === 2);
        // console.log(index,result)

        console.log(personData[key])
      }
}