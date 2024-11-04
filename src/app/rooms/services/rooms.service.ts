import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  roomList: RoomList[] = []
  constructor(private httpClient: HttpClient) { }

  getRooms(){
    return this.httpClient.get('/api/rooms');
  }
}
