# Frontend Mentor - Notifications Page Solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- ✅ Distinguish between "unread" and "read" notifications
- ✅ Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- ✅ View the optimal layout for the interface depending on their device's screen size
- ✅ See hover and focus states for all interactive elements on the page

### Screenshot

![Design preview for the Notifications page coding challenge](./design/desktop-preview.jpg)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) - Google Font

### What I learned

This project helped me practice several key frontend development concepts:

#### 1. **State Management with Vanilla JavaScript**
I implemented a notification system that tracks read/unread states and updates the UI dynamically:

```js
function markNotificationAsRead(notification, updateCount = true) {
    if (!notification.classList.contains('unread')) {
        return;
    }

    notification.classList.remove('unread');

    // Remove the unread dot with animation
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
```

#### 2. **Responsive Design with CSS**
I used a mobile-first approach with careful attention to breakpoints:

```css
@media (max-width: 768px) {
  .container {
    border-radius: 0;
    padding: 1.5rem 1rem;
    min-height: 100vh;
    box-shadow: none;
  }
}
```

#### 3. **Accessibility Features**
I implemented comprehensive accessibility features including:
- Keyboard navigation support
- ARIA labels and roles
- Screen reader announcements
- Focus management

```js
// Add ARIA labels and live regions for screen readers
markAllReadBtn.setAttribute('aria-label', 'Mark all notifications as read');
notificationsList.setAttribute('aria-label', 'Notifications list');
```

### Continued development

Areas I want to continue focusing on in future projects:

- **Advanced CSS animations** - Adding more sophisticated micro-interactions
- **Performance optimization** - Implementing virtual scrolling for large notification lists
- **Testing** - Adding unit tests and integration tests for the JavaScript functionality
- **Progressive Web App features** - Adding offline support and push notifications

## Features Implemented

### ✅ Core Functionality
- **Unread/Read States**: Visual distinction with background colors and red dots
- **Mark All as Read**: Button functionality that clears all unread states
- **Dynamic Counter**: Updates automatically as notifications are marked as read
- **Individual Marking**: Click any unread notification to mark it as read

### ✅ Interactive Elements
- **Clickable Names**: User profile links (console logged)
- **Post Titles**: Clickable post references (console logged)
- **Group Names**: Clickable group links (console logged)
- **Private Messages**: Expandable message content (console logged)
- **Picture Thumbnails**: Clickable images (console logged)

### ✅ Design & UX
- **Responsive Layout**: Mobile (375px) and Desktop (1440px) optimized
- **Hover States**: All interactive elements have hover effects
- **Smooth Animations**: Transitions for state changes and interactions
- **Typography**: Plus Jakarta Sans font with proper weights (500, 800)
- **Color Scheme**: Exact colors from the style guide

### ✅ Accessibility
- **Keyboard Navigation**: Full keyboard support with Tab navigation
- **ARIA Labels**: Proper labeling for screen readers
- **Focus States**: Visible focus indicators for all interactive elements
- **Semantic HTML**: Proper use of `<article>`, `<time>`, and other semantic elements
- **Screen Reader Support**: Live regions for dynamic content updates

## File Structure

```
notifications-page-main/
├── index.html          # Main HTML structure
├── style.css           # Complete styling and responsive design
├── script.js           # Interactive functionality and accessibility
├── assets/
│   └── images/         # Avatar images and icons
├── design/             # Design reference files
└── README.md           # This file
```

## How to Run

1. Clone or download the project
2. Open `index.html` in your web browser
3. No build process required - uses vanilla HTML, CSS, and JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

The project uses modern CSS features like CSS Grid and Flexbox, so it requires relatively recent browser versions.

## Author

- Frontend Mentor - [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)
