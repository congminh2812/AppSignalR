const btnJoinYellow = document.getElementById("btnJoinYellow");
const btnJoinBlue = document.getElementById("btnJoinBlue");
const btnJoinOrange = document.getElementById("btnJoinOrange");

const btnTriggerYellow = document.getElementById("btnTriggerYellow");
const btnTriggerBlue = document.getElementById("btnTriggerBlue");
const btnTriggerOrange = document.getElementById("btnTriggerOrange");

let connection = new signalR.HubConnectionBuilder()
  .withUrl("/hubs/color", {
    transport:
      signalR.HttpTransportType.WebSockets |
      signalR.HttpTransportType.ServerSentEvents,
  })
  .build();

// start connection
function startSuccess() {
  console.log("Connected.");
}
function startFail() {
  console.log("Connection Failed");
}
connection.start().then(startSuccess, startFail);

btnJoinYellow.addEventListener("click", () => {
  connection.invoke("JoinGroup", "Yellow");
});
btnJoinBlue.addEventListener("click", () => {
  connection.invoke("JoinGroup", "Blue");
});
btnJoinOrange.addEventListener("click", () => {
  connection.invoke("JoinGroup", "Orange");
});
btnTriggerYellow.addEventListener("click", () => {
  connection.invoke("TriggerGroup", "Yellow");
});
btnTriggerBlue.addEventListener("click", () => {
  connection.invoke("TriggerGroup", "Blue");
});
btnTriggerOrange.addEventListener("click", () => {
  connection.invoke("TriggerGroup", "Orange");
});

connection.on("triggerColor", (color) => {
  document.getElementsByTagName("body")[0].style.backgroundColor = color;
});