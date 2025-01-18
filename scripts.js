// Grab elements from the DOM
const darkModeToggle = document.getElementById('dark-mode-toggle');
const fontSizeSelector = document.getElementById('font-size');
const notificationsToggle = document.getElementById('notifications-toggle');
const saveSettingsButton = document.getElementById('save-settings');

// Load saved settings from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    const savedNotifications = localStorage.getItem('notifications') === 'true';

    darkModeToggle.checked = savedDarkMode;
    fontSizeSelector.value = savedFontSize;
    notificationsToggle.checked = savedNotifications;

    applySettings();
});

// Apply settings immediately
function applySettings() {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    document.body.style.fontSize = fontSizeSelector.value === 'small' ? '14px' :
                                   fontSizeSelector.value === 'large' ? '20px' : '16px';
}

// Event listeners for immediate effect
darkModeToggle.addEventListener('change', applySettings);
fontSizeSelector.addEventListener('change', applySettings);

// Save settings to localStorage
saveSettingsButton.addEventListener('click', () => {
    localStorage.setItem('darkMode', darkModeToggle.checked);
    localStorage.setItem('fontSize', fontSizeSelector.value);
    localStorage.setItem('notifications', notificationsToggle.checked);

    alert('Settings saved successfully!');
});
