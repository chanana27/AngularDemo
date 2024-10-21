import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { RoomList } from '../rooms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, DecimalPipe],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})

export class RoomsListComponent implements OnInit {
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor(){}

  ngOnInit(): void {
  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room)
  }

}
