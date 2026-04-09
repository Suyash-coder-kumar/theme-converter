let btn = document.querySelector(".btn");

function switchTheme() {
    let theme = document.body.classList.contains("dark") ? "dark" : "light";
    if (theme === "dark") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }

    console.log("Theme is now:", document.body.className);
}

btn.addEventListener("click", switchTheme);