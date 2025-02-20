document.addEventListener("DOMContentLoaded", function() {
    const changeBtn = document.getElementById("changeContentBtn");
    const modeToggle = document.getElementById("modeToggle");

    // Switch between Night/Light Mode
    modeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            modeToggle.textContent = "☀️ Light Mode";
        } else {
            modeToggle.textContent = "🌙 Night Mode";
        }
    });
});
