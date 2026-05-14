function click() {
            let cl = document.getElementById("hello");
        }

        function dbl() {
            document.getElementById("hello").innerHTML = "Button double-clicked!";
        }
        let form = document.getElementById("myForm");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let mail = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            localStorage.setItem("name", name);
            localStorage.setItem("email", mail);
            localStorage.setItem("message", message);
            alert("Form submitted! Name: " + name
                + ", Email: " + mail
                + ", Message: " + message
            );
        });
        function type(text, elementId, speed = 50){
            let i = 0;
            let output = document.getElementById(elementId);
            output.innerHTML = "";
            function typeWriter() {
                if (i < text.length) {
                    output.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }
            typeWriter();
        }
        setTimeout(() => {type("Hello I am greatful that you are here", "greet", 100); }, 500);
        setTimeout(() => {type("Leave the message i'll get back to you soon","hello", 100); }, 4500);
        setTimeout(() => {type("Thanks for contacting me...","effect", 100); }, 9500);