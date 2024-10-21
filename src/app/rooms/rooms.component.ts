import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { NgIf } from '@angular/common';
import {NgFor} from '@angular/common';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})

export class RoomsComponent implements OnInit{
  hotelName = 'Chanana Hotel'
  msg = "We have 10 rooms"
  hideRooms = true

  selectedRoom!:RoomList
  
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  
  roomsList: RoomList[] = []

ngOnInit(): void {
  this.roomsList = [{
    roomNumber: 1,
    roomType: 'Deluxe',
    amenities: 'Wifi, A.C, T.V, Water, Fridge, Snacks',
    price: 3500,
    photos: 'Shadow Fax Running',
    checkinTime: new Date('18-Oct-2024'),
    checkoutTime: new Date('19-Oct-2024'),
    rating:4.5
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe',
    amenities: 'Wifi, A.C, T.V, Water, Fridge, Snacks',
    price: 3500,
    photos: 'Shadow Fax Running',
    checkinTime: new Date('18-Oct-2024'),
    checkoutTime: new Date('19-Oct-2024'),
    rating:3.45
  },
  {
    roomNumber: 3,
    roomType: 'Deluxe',
    amenities: 'Wifi, A.C, T.V, Water, Fridge, Snacks',
    price: 3500,
    photos: 'Shadow Fax Running',
    checkinTime: new Date('18-Oct-2024'),
    checkoutTime: new Date('19-Oct-2024'),
    rating:4.156
  }
]
}

constructor(){}

toggle(){
  this.hideRooms = !this.hideRooms
}

selectRoom(room: RoomList){
  console.log(room)
  this.selectedRoom = room
}
}
