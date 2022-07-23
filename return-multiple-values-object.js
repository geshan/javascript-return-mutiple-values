function getPersonalData() {
  const fullName = 'John Doe';
  const age = 24;

  return {fullName, age};
}

const person = getPersonalData();
console.log(`${person.fullName} is ${person.age} years old.`);


const {fullName, age} = getPersonalData();
console.log(`${fullName} is ${age} years old.`);
