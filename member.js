function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 25,
    skills: ['JavaScript', 'React', 'Node'],
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };

  return member;
}