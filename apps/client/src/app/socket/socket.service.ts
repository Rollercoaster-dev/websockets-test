import { Injectable } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3300', options: {} };

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }
}
