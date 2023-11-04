// scuber headquarters is on 42nd street
// each block in manhattan is 264 feet long




function distanceFromHqInBlocks(someValue) {
  if (someValue >= 42)
    return someValue - 42
  else if (someValue <= 42)
    return (42 - someValue)
  //goes from 42nd to 43rd street so its 1 block
  //returns the number of blocks given a value
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264


}

function distanceTravelledInFeet(start, destination) {
  if (destination < start)
    return (start - destination) * 264
  else if (destination > start)
    return (destination - start) * 264
  //returns the number of feet traveled
}

function calculatesFarePrice(start, destination) {
  let distanceFeet = distanceTravelledInFeet(start, destination)
  if (distanceFeet <= 400)
    return 0
  else if (distanceFeet > 400 && distanceFeet <= 2000)
  {console.log(distanceFeet)
    return (distanceFeet - 400) * 0.02}
  else if (distanceFeet > 2000 && distanceFeet <= 2500)
    return 25
  else if (distanceFeet > 2500)
    return 'cannot travel that far'


  //first 400 feet are free
  //returns the fare for the customer
  //distance between 400 and 2000 feet is 2cents per foot
  //flat fare of $25 for a distance over 2000 feet and under 2500 feet
  //does not allow rides over 2500 feet 
}
