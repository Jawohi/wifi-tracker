// initialize config variables here

class TrackingData
{
  constructor(Clients, Tracker, Room){
    this.clients = Clients;
    this.tracker = Tracker;
    this.room = Room;
  }
}

class clients
{
  constructor(mac,x,y,acc)
  {
    this.mac = mac;
    this.x = x;
    this.y = y;
    this.acc = acc;
  }
}

class tracker
{
  constructor(name,x,y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
}

class room
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
  }
}


let canvas, ctx

// setup config variables and start the program

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)


async function init() {

  var trackingData = await getTrackingData()

  canvas = document.getElementById('roomCanvas')

  var factorX = canvas.clientWidth / trackingData.room.x
  var factorY = canvas.clientHeight / trackingData.room.y


  console.log(factorX, factorY)


  //create rect for tracker
  for (let i = 0; i < trackingData.tracker.length; i++) {
    createRect(trackingData.tracker[i].x * factorX, trackingData.tracker[i].y * factorY, 'green')
  }

  //create initial rect for clients

  for (let j = 0; j < trackingData.clients.length; j++) {
    //create rect for each tracked device
    createRect(trackingData.clients[j].x * factorX, trackingData.clients[j].y * factorY, 'red')
  }


  setInterval(async () => {

    var trackingData = await getTrackingData()

    for (let i = 0; i < trackingData.clients.length; i++) { //create rect for each tracked device
      createRect(trackingData.clients[i].x * factorX, trackingData.clients[i].y * factorY, 'orange')
    }


  }, 10000)

}


async function getTrackingData() {


  var res = await fetch("http://localhost/device-tracker-backend-master/track.php");
  var data = await res.json();
  trackingdata = JSON.parse(data);

  /*
  var json = '{"clients":[{"mac":"e0:cb:ee:46:58:fa","x":2.000251321150406,"y":2.298495242436292,"acc":0.5},{"mac":"e0:cb:ee:46:58:fa","x":3.800251321150406,"y":2.798495242436292,"acc":0.5}],"tracker":[{"name":"Tracker: 1","x":2.4,"y":0},{"name":"Tracker: 2","x":0,"y":3.5},{"name":"Tracker: 3","x":4,"y":3.5},{"name":"Tracker: 4","x":4,"y":2.4},{"name":"Tracker: 5","x":4,"y":0}],"room":{"x":4.5,"y":4}}'

  trackingdata = new TrackingData();
  trackingdata = JSON.parse(json);

   */

  return trackingdata;
}

function createRect(x,y,color)
{
  canvas = document.getElementById('roomCanvas')
  ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.fillStyle = color;


  ctx.fillRect(x, y, 50, 50)

}
