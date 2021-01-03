import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Server was not created.';
  serverName = 'Patil';
  serverCreated = false;
  servers = ['TestServer1','TestServer2'];

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is '+this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: any){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
