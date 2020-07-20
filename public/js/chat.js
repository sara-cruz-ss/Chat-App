const socket = io();

socket.on("countUpdated", (count) => {
  console.log("The account has been updated", count);
});

document.querySelector("#increment").addEventListener("click", () => {
  console.log("Clicked");
  socket.emit("increment");
});
