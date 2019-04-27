const app = "I don't do much."

function bumpCounter(){
  var counter = 0;

  function addBump(){
    counter = counter +1;
  }

  function getBumps(){
    return counter;
  }

  return {
    addBump,
    getBumps
  }

}

function createAnimal(animalType){
  function diabolicalCreation(deadlyDevice){
    var obj = {
      "animalType" : animalType,
      "deadlyDevice" : deadlyDevice
    }
    return obj
  }
  return diabolicalCreation
}


  var sharkCreator = createAnimal('Shark')
  var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
  var sharkWithFrickinCannon = sharkCreator('Cannon')

  console.log(sharkWithFrickinCannon)
