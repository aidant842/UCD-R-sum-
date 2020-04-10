function sendMail(contactForm){
    $("#fullname").html("");
    $("#emailaddress").html("");
    $("#projectsummary").html("");
    emailjs.send("aidant842_gmail_com", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    
})
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("ERROR", error);
        
        });
        return false;
}