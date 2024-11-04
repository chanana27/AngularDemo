import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import {NgIf} from '@angular/common';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, ContainerComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'HotelInventoryApp';
  // role = 'user'

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('name', {static:true}) name!: ElementRef;

  ngOnInit(){
    this.name.nativeElement.innerText = 'Hilton Hotel';
  }

  ngAfterViewInit(){
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.msg="We Have 20 Rooms"
  }
}
  