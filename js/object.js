//Creating an object literal inside the variable 'person'
//An object literal is like a series of named variables, each with their own value, packaged into a single item -- the object.
var person = {
  name: 'Sam',
  country: 'US',
  age: 20,
  student: true,
  siblings: ['Bob', 'Tom', 'Joe']
};
//to add or change a PROPERTY to the Object
person.home = 'A city';
//OR person['home'] = 'San Francisco';

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

//accessing objects
var message = '<p>Hello. My name is ' + person.name + ' and from the ' + person.country + '</p>';
message += '<p>I am ' + person.age + ' years old</p>';
message += '<p>I have ' + person.siblings.length + ' siblings. And they are ' + person.siblings.join(', ') + '</p>';
message += '<p>I live in ' + person.home + '</p>';
person.home = 'Another City';
message += '<p>But I wish I lived in ' + person.home + '</p>';

print(message);

//Using a FOR IN loop for an object
for (var propName in person) {
  console.log(propName, ': ', person[propName]); //accessing the Key names and then accessing the Values of the keys
}

//Quiz using an Object inside an Array
var questions = [
  { question: 'How many states are in the United States?', answer: 50 },
  { question: 'How many continents are there?', answer: 7 },
  { question: 'How many legs does an insect have?', answer: 6 }
];

var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i].question; //accesses question from object in the array
  answer = questions[i].answer; //accesses answer from object in the array
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  } 
}

message = "You got " + correctAnswers + " question(s) right."
print(message);


//creating a list of objects to be used with the report.js file
var studentS = [
  { name: 'Bob', track: ['Javascript', 'CSS'], achievements: 5, points: 5 },
  { name: 'Jim', track: ['Java', 'Ajax'], achievements: 5, points: 5 },
  { name: 'Tom', track: ['Ruby', 'Python'], achievements: 5, points: 5 },
  { name: 'Ted', track: ['Perl', 'PHP'], achievements: 5, points: 5 },
  { name: 'Mike', track: 'Cobol', achievements: 5, points: 5 }
];
