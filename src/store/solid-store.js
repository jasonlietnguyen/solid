var state = {
  s: { name: 'Single Responsibility Principle', description: '' },
  o: { name: 'Open/Close Principle', description: '' },
  l: { name: 'Liskov Substitution Principle', description: '' },
  i: { name: 'Interface Segregation Priciple', description: '' },
  d: { name: 'Dependecy Inversion', description: '' }
}

export default { 
  getPrinciple(letter) {
    return state[letter.toLowerCase()] || {name: "ERROR", description: "Invaild Syntact"}
  }
 }