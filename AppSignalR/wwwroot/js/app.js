const btnIncrease = document.getElementById('increase');
var counter = document.getElementById("viewCounter");

// create connection
let connection = new signalR.HubConnectionBuilder()
  // .configureLogging(signalR.LogLevel.Trace)
  // .configureLogging(new CustomerLogger())
  .withUrl("/hubs/view", {
    transport:
      signalR.HttpTransportType.WebSockets |
      signalR.HttpTransportType.ServerSentEvents,
  })
  .withAutomaticReconnect(new CustomRetryPolicy())
  .build();

//on view update message from client
connection.on("viewCountUpdate", (value) => {
  var counter = document.getElementById("viewCounter");
  counter.innerText = value.toString();
});

// btnIncrease.addEventListener('click', () => {
//     connection.invoke("IncrementServerView");
// });

// connection.on("incrementView", (value) => {
//   counter.innerText = value.toString();

//   if (value % 10 === 0)
//         connection.off("incrementView");
// });

// notify server we're watching
function notify() {
  connection.send("notifyWatching");
}
// start connection
function startSuccess() {
  console.log("Connected.");
  //notify();
}
function startFail() {
  console.log("Connection Failed");
}
connection.start().then(startSuccess, startFail);
