// Variables to track menu state, elements, and active link
let isMenuOpen = false;
const sideNavbar = document.getElementById("sideNavbar");
const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const navItems = document.querySelectorAll('.nav-item');
const notification = document.getElementById('notification');
const loadingOverlay = document.getElementById("loadingOverlay");
const themeToggle = document.getElementById("themeToggle");
let activeLink = null;

// Open the side navbar when hamburger icon is clicked
openMenuBtn.addEventListener('click', () => {
    isMenuOpen = true;
    sideNavbar.style.width = "250px"; // Slide open
});

// Close the side navbar when close button is clicked
closeMenuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    isMenuOpen = false;
    sideNavbar.style.width = "0"; // Slide closed
});

// Handle the active link state
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        
        // Remove active state from the previously active link
        if (activeLink) activeLink.classList.remove('active');
        
        // Add active class to the clicked link
        activeLink = event.target;
        activeLink.classList.add('active');
        
        // Trigger notification
        triggerNotification();
        
        // Close the menu if it's open on mobile
        if (isMenuOpen) {
            isMenuOpen = false;
            sideNavbar.style.width = "0"; // Slide closed
        }
        
        console.log(`Nav item clicked: ${event.target.textContent}`);
    });
});

// Trigger the notification by showing the loading overlay
function triggerNotification() {
    // Show loading overlay and change message to "Loading page..."
    loadingOverlay.classList.remove("hidden");
    setTimeout(() => {
        loadingOverlay.classList.add("hidden"); // Hide overlay after 2 seconds
        // Show 'Page Loaded' message
        notification.textContent = "Page Loaded!";
        notification.classList.add("show"); // Display notification
        setTimeout(() => {
            notification.classList.remove("show"); // Hide notification after 3 seconds
        }, 3000);
    }, 2000); // Simulate page loading for 2 seconds
}

// Handle theme toggle (Dark/Light Mode)
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️"; // Set icon to sun for dark mode
}

// Toggle theme between dark and light
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙"; // Switch theme icon
    localStorage.setItem("theme", isDark ? "dark" : "light"); // Persist theme preference
});

// Event bubbling demonstration: log when app container is clicked
const appContainer = document.getElementById('appContainer');
appContainer.addEventListener('click', () => {
    console.log("App Container clicked! (Triggered via Event Bubbling)");
});