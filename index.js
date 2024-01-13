"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userProfileData = {};
function getUserProfile(userId) {
    return userProfileData[userId];
}
function updateUserProfile(userId, updatedProfile) {
    userProfileData[userId] = updatedProfile;
}
function saveAnnouncement(announcement) {
    console.log("Announcement saved:", announcement);
}
function createNotification(userId, message) {
    const newNotification = {
        userId,
        message,
        createdDate: new Date(),
    };
    saveNotification(newNotification);
}
createNotification("user123", "Be Ready for Upcoming Quiz");
function getNotifications(userId) {
    // Retrieve notifications for the user from the database
    const userNotifications = getUserNotifications(userId);
    return userNotifications;
}
function createEvent(userId, title, date) {
    const newEvent = {
        userId,
        title,
        date,
    };
    saveEvent(newEvent);
}
function getEvents(userId) {
    // Retrieve events for the user from the database
    const userEvents = getUserEvents(userId);
    return userEvents;
}
function viewProfile(userId) {
    const userProfile = getUserProfile(userId);
    console.log(userProfile);
    if (userProfile) {
        console.log("User Profile:");
        console.log(`Name: ${userProfile.name}`);
        console.log(`Email: ${userProfile.email}`);
        console.log(`Contact: ${userProfile.contact}`);
    }
    else {
        console.log("User profile not found.");
    }
}
updateUserProfile("user123", {
    name: "John Doe",
    email: "john@example.com",
    contact: "123456789",
});
viewProfile("user123");
function updateProfile(userId, updatedProfile) {
    updateUserProfile(userId, updatedProfile);
    console.log("Profile updated successfully!");
}
function createAnnouncement(title, content, createdBy) {
    const newAnnouncement = {
        title,
        content,
        createdBy,
        createdDate: new Date(),
    };
    saveAnnouncement(newAnnouncement); // Call the saveAnnouncement function
    console.log("Announcement created successfully!");
}
function displayNotifications(userId) {
    const userNotifications = getNotifications(userId);
    console.log("Notifications:");
    userNotifications.forEach((notification) => {
        console.log(`${notification.createdDate}: ${notification.message}`);
    });
}
function displayCalendar(userId) {
    const userEvents = getEvents(userId);
    console.log("Calendar:");
    userEvents.forEach((event) => {
        console.log(`${event.date}: ${event.title}`);
    });
}
function saveNotification(notification) {
    // Save the notification in the database
    // ...
    console.log('Notification saved:', notification);
}
function getUserNotifications(userId) {
    // Retrieve notifications for the user from the database
    // ...
    console.log("", userId);
    return []; // Placeholder return
}
function saveEvent(event) {
    // Save the event in the database
    // ...
}
function getUserEvents(userId) {
    // Retrieve events for the user from the database
    // ...
    return []; // Placeholder return
}
// Usage examples
const userId = "user123";
const profile = getUserProfile(userId);
console.log(profile);
updateProfile(userId, { name: "John", email: "john@example.com", contact: "123456789" });
createAnnouncement("Important Announcement", "Please read the following message...", "Admin");
displayNotifications(userId);
createEvent(userId, "Meeting", new Date());
displayCalendar(userId);
