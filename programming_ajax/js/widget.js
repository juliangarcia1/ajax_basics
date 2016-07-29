var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState ===4){
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for(var i=0;i <employees.length; i+=1){
      if(employees[i].inoffice ===true){
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    document.getElementById('employeeList').innerHTML = statusHTML;
    statusHTML += '</ul>';
  }
};

xhr.open('GET', 'data/employees.json');
xhr.send();

var xhrRooms = new XMLHttpRequest();
xhrRooms.onreadystatechange = function () {
  if(xhrRooms.readyState === 4){
    var rooms = JSON.parse(xhrRooms.responseText);
    var roomsHTML = '<ul class"rooms">';
    for(var i=0; i< rooms.length;i+=1){
      if( rooms[i].available === true) {
        roomsHTML += '<li class="empty">';
      }
      else {
        roomsHTML += '<li class="full">';
      }
      roomsHTML += rooms[i].room;
      roomsHTML += '</li>';
    }
    roomsHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomsHTML;
  }
};

xhrRooms.open('GET', 'data/rooms.json');
xhrRooms.send();