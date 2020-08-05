function Joshua() {
    let email = prompt(`What is your email?`);
    if (email == "") {
        alert("Please enter a valid email. eg. example@gmail.com")
    }
    else {
        alert("Thank you, we have received your detail. You would soon hear from us." + email)
        console.log(email);
    }
}

Joshua();
