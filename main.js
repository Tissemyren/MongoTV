const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    htmlElement.classList.add('dark-mode');
}

// Toggle theme on click
toggleButton.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    if (htmlElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});