let connection = new signalR.HubConnectionBuilder()
  .withUrl("/hubs/string", {
    transport:
      signalR.HttpTransportType.WebSockets |
      signalR.HttpTransportType.ServerSentEvents,
  })
  .build();

const btnGetFullName = document.getElementById("getFullName");

btnGetFullName.addEventListener("click", () => {
  const firstName = document.getElementById("firstName");
  
  const lastName = document.getElementById("lastName");

  connection.invoke("getFullName", firstName.value, lastName.value).then((val) => {
    alert(val);
  });
});

// start connection
function startSuccess() {
  console.log("Connected.");
}
function startFail() {
  console.log("Connection Failed");
}
connection.start().then(startSuccess, startFail);
