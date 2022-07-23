function getPersonalData() {
  const fullName = 'John Doe';
  const age = 24;

  return [fullName, age];
}

const person = getPersonalData();
console.log(`${person[0]} is ${person[1]} years old.`);

const [fullName, age] = getPersonalData();
console.log(`${fullName} is ${age} years old.`);
