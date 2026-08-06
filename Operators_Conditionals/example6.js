//Calculate a student's grade using marks.

let marks = 80;

if (marks < 0 || marks > 100) {
    console.log("Invalid Marks");
}
else if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else if (marks >= 60) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}  