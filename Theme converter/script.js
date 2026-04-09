let btn = document.querySelector(".btn");

if (window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.remove("light");
    document.body.classList.add("dark");
}else{
    document.body.classList.remove("dark");
    document.body.classList.add("light");
}

function switchTheme() {
    let theme = document.body.classList.contains("dark") ? "dark" : "light";
    if (theme === "dark") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }

}

btn.addEventListener("click", switchTheme);