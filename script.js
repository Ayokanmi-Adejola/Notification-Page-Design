// DOM Elements
const markAllReadBtn = document.getElementById('markAllRead');
const notificationCount = document.getElementById('notificationCount');
const notificationsList = document.getElementById('notificationsList');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateNotificationCount();
    setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
    // Mark all as read button
    markAllReadBtn.addEventListener('click', markAllAsRead);
    
    // Individual notification click handlers
    setupNotificationClickHandlers();
}

// Set up click handlers for individual notifications
function setupNotificationClickHandlers() {
    const notifications = document.querySelectorAll('.notification');
    
    notifications.forEach(notification => {
        // Make notification clickable to mark as read
        notification.addEventListener('click', function(e) {
            // Don't trigger if clicking on interactive elements
            if (e.target.classList.contains('name') || 
                e.target.classList.contains('post-title') || 
                e.target.classList.contains('group-name') ||
                e.target.classList.contains('private-message') ||
                e.target.classList.contains('picture-thumbnail')) {
                return;
            }
            
            if (notification.classList.contains('unread')) {
                markNotificationAsRead(notification);
            }
        });
        
        // Add keyboard support
        notification.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (notification.classList.contains('unread')) {
                    markNotificationAsRead(notification);
                }
            }
        });
        
        // Make notification focusable
        notification.setAttribute('tabindex', '0');
    });
    
    // Add click handlers for interactive elements
    setupInteractiveElementHandlers();
}

// Set up handlers for interactive elements within notifications
function setupInteractiveElementHandlers() {
    // Name links
    const nameElements = document.querySelectorAll('.name');
    nameElements.forEach(element => {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.addEventListener('click', handleNameClick);
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNameClick(e);
            }
        });
    });
    
    // Post title links
    const postTitleElements = document.querySelectorAll('.post-title');
    postTitleElements.forEach(element => {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.addEventListener('click', handlePostClick);
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePostClick(e);
            }
        });
    });
    
    // Group name links
    const groupNameElements = document.querySelectorAll('.group-name');
    groupNameElements.forEach(element => {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.addEventListener('click', handleGroupClick);
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleGroupClick(e);
            }
        });
    });
    
    // Private message
    const privateMessages = document.querySelectorAll('.private-message');
    privateMessages.forEach(element => {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.addEventListener('click', handlePrivateMessageClick);
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePrivateMessageClick(e);
            }
        });
    });
    
    // Picture thumbnails
    const pictureThumbnails = document.querySelectorAll('.picture-thumbnail');
    pictureThumbnails.forEach(element => {
        element.setAttribute('tabindex', '0');
        element.addEventListener('click', handlePictureClick);
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePictureClick(e);
            }
        });
    });
}

// Mark all notifications as read
function markAllAsRead() {
    const unreadNotifications = document.querySelectorAll('.notification.unread');
    
    unreadNotifications.forEach(notification => {
        markNotificationAsRead(notification, false);
    });
    
    updateNotificationCount();
    
    // Add visual feedback
    notificationCount.classList.add('updating');
    setTimeout(() => {
        notificationCount.classList.remove('updating');
    }, 300);
}

// Mark a single notification as read
function markNotificationAsRead(notification, updateCount = true) {
    if (!notification.classList.contains('unread')) {
        return;
    }
    
    notification.classList.remove('unread');
    
    // Remove the unread dot
    const unreadDot = notification.querySelector('.unread-dot');
    if (unreadDot) {
        unreadDot.style.opacity = '0';
        setTimeout(() => {
            unreadDot.remove();
        }, 300);
    }
    
    if (updateCount) {
        updateNotificationCount();
    }
}

// Update the notification count
function updateNotificationCount() {
    const unreadNotifications = document.querySelectorAll('.notification.unread');
    const count = unreadNotifications.length;
    
    notificationCount.textContent = count;
    
    // Hide count if zero
    if (count === 0) {
        notificationCount.style.display = 'none';
    } else {
        notificationCount.style.display = 'inline-block';
    }
}

// Event handlers for interactive elements
function handleNameClick(e) {
    e.stopPropagation();
    console.log('Name clicked:', e.target.textContent);
    // In a real app, this would navigate to the user's profile
}

function handlePostClick(e) {
    e.stopPropagation();
    console.log('Post clicked:', e.target.textContent);
    // In a real app, this would navigate to the post
}

function handleGroupClick(e) {
    e.stopPropagation();
    console.log('Group clicked:', e.target.textContent);
    // In a real app, this would navigate to the group
}

function handlePrivateMessageClick(e) {
    e.stopPropagation();
    console.log('Private message clicked');
    // In a real app, this would open the full message or conversation
}

function handlePictureClick(e) {
    e.stopPropagation();
    console.log('Picture clicked');
    // In a real app, this would open the full-size image
}

// Utility function to add smooth scrolling (if needed for longer lists)
function scrollToNotification(notification) {
    notification.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}

// Add some accessibility improvements
function enhanceAccessibility() {
    // Add ARIA labels
    markAllReadBtn.setAttribute('aria-label', 'Mark all notifications as read');
    notificationsList.setAttribute('aria-label', 'Notifications list');
    
    // Add live region for screen readers
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    document.body.appendChild(liveRegion);
    
    // Update live region when notifications change
    const originalUpdateCount = updateNotificationCount;
    updateNotificationCount = function() {
        originalUpdateCount();
        const count = document.querySelectorAll('.notification.unread').length;
        liveRegion.textContent = `${count} unread notifications remaining`;
    };
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', enhanceAccessibility);
