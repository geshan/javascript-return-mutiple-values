function getPersonalData() {
  const fullName = 'John Doe';

  return fullName;
}

console.log(`Fullname is: ${getPersonalData()}`);

//Return multiple values with array
function getPersonalDataArr() {
  const fullName = 'John Doe';
  const age = 24;

  return [fullName, age];
}


const person = getPersonalDataArr();
console.log(`${person[0]} is ${person[1]} years old.`);


const [fullName, age] = getPersonalDataArr();
console.log(`${fullName} is ${age} years old.`);


//return multiple values with object
function getPersonalDataObj() {
  const fullName = 'John Doe';
  const age = 24;

  return {fullName, age};
}

const personObj = getPersonalDataObj();
console.log(`${personObj.fullName} is ${personObj.age} years old.`);


const {fullName02 = fullName, age02 = age } = getPersonalDataObj();
console.log(`${fullName02} is ${age02} years old.`);
