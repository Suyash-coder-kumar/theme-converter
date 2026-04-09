let btn = document.querySelector(".btn");


function applyTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.add(systemPrefersDark ? 'dark' : 'light');
    }
}

function switchTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);

    localStorage.setItem('theme', newTheme);
}


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
        const systemTheme = e.matches ? 'dark' : 'light';
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(systemTheme);
    }
});


applyTheme();
btn.addEventListener('click', switchTheme);