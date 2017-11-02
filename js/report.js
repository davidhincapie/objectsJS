//Prints out the student information when you input the name of student
var report = '';
var student;
var search;

function print(message) {
  var div = document.getElementById('outcome');
  div.innerHTML = message;
}

function getReport(student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  return report;
}

while (true) {
  search = prompt('Search for a name: type a name or "quit" to end');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < studentS.length; i++) {
    student = studentS[i];
    if (student.name.toLowerCase() === search) {
      message = getReport(student);
      print(message);
    }
  }
}