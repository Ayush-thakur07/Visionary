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
        let a=document.getElementById("show");
        a = ["This page will tell you about me only",
            "There are many like me but this one is mine"
        ];