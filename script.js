
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const calcContainer = document.querySelector(".bg-white");

    
    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

   
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            const value = this.innerText;
            if (value === "=") calculate();
            else if (value === "C") clearDisplay();
            else if (value === "⌫") deleteLast();
            else appendToDisplay(value);
        });
    });

    
    document.addEventListener("keydown", (event) => {
        const key = event.key;

        if (!isNaN(key) || "+-*/.".includes(key)) {
            appendToDisplay(key);
        } else if (key === "Enter") {
            calculate();
        } else if (key === "Backspace") {
            deleteLast();
        } else if (key === "Escape") {
            clearDisplay();
        }
    });

   
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("bg-blue-100")) {
            // Switch to Dark Mode
            body.classList.replace("bg-blue-100", "bg-gray-900");
            calcContainer.classList.replace("bg-white", "bg-gray-800");
            calcContainer.classList.replace("border-blue-200", "border-gray-600");

            display.classList.replace("bg-blue-50", "bg-gray-700");
            display.classList.replace("text-gray-700", "text-white");

            themeToggle.innerHTML = "☀️ Light Mode";
            themeToggle.classList.replace("bg-gray-300", "bg-gray-700");
            themeToggle.classList.replace("text-gray-700", "text-white");
        } else {
            // Switch to Light Mode
            body.classList.replace("bg-gray-900", "bg-blue-100");
            calcContainer.classList.replace("bg-gray-800", "bg-white");
            calcContainer.classList.replace("border-gray-600", "border-blue-200");

            display.classList.replace("bg-gray-700", "bg-blue-50");
            display.classList.replace("text-white", "text-gray-700");

            themeToggle.innerHTML = "🌙 Dark Mode";
            themeToggle.classList.replace("bg-gray-700", "bg-gray-300");
            themeToggle.classList.replace("text-white", "text-gray-700");
        }
    });
});
