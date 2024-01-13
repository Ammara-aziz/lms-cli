type UserProfile = {
  name: string;
  email: string;
  contact: string;
};

type Announcement = {
  title: string;
  content: string;
  createdBy: string;
  createdDate: Date;
};

type Notification = {
  userId: string;
  message: string;
  createdDate: Date;
};

type CalendarEvent = {
  userId: string;
  title: string;
  date: Date;
};

let userProfileData : {
    [userId : string] : UserProfile
  } = {}
  function getUserProfile(userId : string) : UserProfile {
    return userProfileData[userId] 
  }
  function updateUserProfile(userId : string,updatedProfile : UserProfile):void{
    userProfileData[userId] =  updatedProfile;
  }

function saveAnnouncement(announcement: Announcement): void {
  
  console.log("Announcement saved:", announcement);
}

function createNotification(userId: string, message: string): void {
  const newNotification: Notification = {
    userId,
    message,
    createdDate: new Date(),
  };
  saveNotification(newNotification);
}
createNotification("user123","Be Ready for Upcoming Quiz")
function getNotifications(userId: string): Notification[] {
  // Retrieve notifications for the user from the database
  const userNotifications = getUserNotifications(userId);
  return userNotifications;
}

function createEvent(userId: string, title: string, date: Date): void {
  const newEvent: CalendarEvent = {
    userId,
    title,
    date,
  };
  saveEvent(newEvent);
}

function getEvents(userId: string): CalendarEvent[] {
  // Retrieve events for the user from the database
  const userEvents = getUserEvents(userId);
  return userEvents;
}

function viewProfile(userId: string): void {
  const userProfile = getUserProfile(userId);
  console.log(userProfile);
  
  if (userProfile) {
    console.log("User Profile:");
    console.log(`Name: ${userProfile.name}`);
    console.log(`Email: ${userProfile.email}`);
    console.log(`Contact: ${userProfile.contact}`);
  } else {
    console.log("User profile not found.");
  }
}
updateUserProfile("user123", {
  name: "John Doe",
  email: "john@example.com",
  contact: "123456789",
});

viewProfile("user123");


function updateProfile(userId: string, updatedProfile: UserProfile): void {
  updateUserProfile(userId, updatedProfile);
  console.log("Profile updated successfully!");
}

function createAnnouncement(title: string, content: string, createdBy: string): void {
  const newAnnouncement: Announcement = {
    title,
    content,
    createdBy,
    createdDate: new Date(),
  };
  saveAnnouncement(newAnnouncement); // Call the saveAnnouncement function
  console.log("Announcement created successfully!");
}

function displayNotifications(userId: string): void {
  const userNotifications = getNotifications(userId);
  console.log("Notifications:");
  userNotifications.forEach((notification) => {
    console.log(`${notification.createdDate}: ${notification.message}`);
  });
}

function displayCalendar(userId: string): void {
  const userEvents = getEvents(userId);
  console.log("Calendar:");
  userEvents.forEach((event) => {
    console.log(`${event.date}: ${event.title}`);
  });
}

function saveNotification(notification: Notification): void {
  // Save the notification in the database
  // ...
  console.log('Notification saved:', notification);
}

function getUserNotifications(userId: string): Notification[] {
  // Retrieve notifications for the user from the database
  // ...
  console.log("", userId)
  return []; // Placeholder return
}

function saveEvent(event: CalendarEvent): void {
  // Save the event in the database
  // ...
}

function getUserEvents(userId: string): CalendarEvent[] {
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
