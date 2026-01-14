function showNotification(message) {
  setTimeout(() => {
    console.log("Notification:", message);
  }, 2000);
}

showNotification("You have a new message!");
