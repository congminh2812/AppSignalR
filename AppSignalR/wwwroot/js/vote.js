const pieVotes = document.getElementById("pieVotes");
const baconVotes = document.getElementById("baconVotes");

let connection = new signalR.HubConnectionBuilder()
  .withUrl("/hubs/vote")
  .build();

connection.on("updateVotes", (votes) => {
  console.log('Run');
  pieVotes.innerText = votes.pie;
  baconVotes.innerText = votes.bacon;
});

// start connection
function startSuccess() {
  console.log("Connected.");
  connection.invoke("GetCurrentVotes").then((votes) => {
    pieVotes.innerText = votes.pie;
    baconVotes.innerText = votes.bacon;
  });
}
function startFail() {
  console.log("Connection Failed");
}
connection.start().then(startSuccess, startFail);
