// grade Exapmple use (if)

let grade = 70;
if (grade >= 90 && grade <= 100) {
  console.log("Pass your grade is A");
} else if (grade >= 80 && grade < 90) {
  console.log("Pass your grade is B");
} else if (grade >= 70 && grade < 80) {
  console.log("Pass your grade C");
} else if (grade >= 50 && grade < 70) {
  console.log("Pass your grade D");
} else if (grade >= 0 && grade < 50) {
  console.log("Failed your grade is F");
} else {
  console.log("Please enter the correct grade between 0-100");
}

// grade Exapmple use (Switch)

switch (true) {
  case grade >= 90 && grade <= 100:
    console.log("Pass your grade is A");
    break;
  case grade >= 80 && grade < 90:
    console.log("Pass your grade is B");

  case grade >= 70 && grade < 80:
    console.log("Pass your grade C");
    break;
  case grade >= 50 && grade < 70:
    console.log("Pass your grade D");

  case grade >= 0 && grade < 50:
    console.log("Failed your grade is F");
    break;

  default:
    console.log("Please enter the correct grade between 0-100");
}

let userRole = "odai";

switch (userRole) {
  case "Admin":
    console.log(`Welcom ${userRole}`);
    break;
  case "User":
    console.log(`Welcom ${userRole}`);
    break;
  case "Guest":
    console.log(`Welcom ${userRole}`);
    break;
  default:
    console.log("Soory you dont have access");
}
