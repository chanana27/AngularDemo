import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { NgIf } from '@angular/common';
import {NgFor} from '@angular/common';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})

export class RoomsComponent implements OnInit, AfterViewInit{
  hotelName = 'Chanana Hotel'
  msg = "We have 10 rooms"
  hideRooms = true

  allRoom = 'Rooms List are as follows'

  selectedRoom!:RoomList
  
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  
  roomsList: RoomList[] = []

ngOnInit(): void {
  console.log("NG ON INIT of Rooms Component")
  console.log(this.roomsService.getRooms())
}

@ViewChild(HeaderComponent) header!: HeaderComponent

ngAfterViewInit(){
  this.header.title = 'Welcome to Chanana Hotels'
}

constructor(private roomsService:RoomsService){
  console.log("Constructor of Rooms Component")
}

toggle(){
  this.hideRooms = !this.hideRooms
}

selectRoom(room: RoomList){
  console.log(room)
  this.selectedRoom = room
}

addRoom(){
  const room = {
    roomNumber: 4,
    roomType: 'Private',
    amenities: 'Wifi, A.C, T.V, Water, Fridge, Snacks',
    price: 5000,
    photos: 'Shadow Fax Running',
    checkinTime: new Date('18-Oct-2024'),
    checkoutTime: new Date('19-Oct-2024'),
    rating:4.7
  }
  // this.roomsList.push(room)
  this.roomsList = [...this.roomsList, room]
}
}
