import { Component, Input, OnInit, EventEmitter, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges, } from '@angular/core';
import { RoomList } from '../rooms';
import { NgClass, NgFor, NgIf , } from '@angular/common';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, DecimalPipe],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = []
  @Input() allRoom = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor(){
    console.log("Constructor of Room List Component")
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes)
  }

  ngOnInit(): void {
    console.log("NG ON INIT of Room List Component")
  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room)
  }

}
