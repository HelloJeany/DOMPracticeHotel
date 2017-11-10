var hotel = {
    name: 'Biltmore',
    rooms: 500,
    roomsBooked: 200,
    availableROoms: function() {
        return this.rooms - this.roomsBooked;
    }
};

//onclick= = "Hello JavaScript!"'

function clickMe() {
    var totalRooms= hotel.rooms;
    var availRooms= hotel.availableROoms();
    
    document.getElementById("name").innerHTML=hotel.name;
    document.getElementById("avail").innerHTML=availRooms;
    document.getElementById("booked").innerHTML=hotel.roomsBooked;


    

}

