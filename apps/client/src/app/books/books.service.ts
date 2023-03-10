import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private socket: Socket) {}
  sendMessage(message: string) {
    this.socket.emit('message', message);
  }
  receiveMessage() {
    return this.socket.fromEvent('message');
  }
  getBooks() {
    return this.socket.fromEvent('books');
  }
}
// https://www.joshmorony.com/creating-a-simple-live-chat-server-with-nestjs-websockets/
