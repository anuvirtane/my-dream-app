import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
serverId: number = 19;
serverStatus: string = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.serverStatus === 'online' ? 'lightgreen' : 'orange';
  }

}
