import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server!: Server;
  books = 0;
  async handleConnection() {
    Logger.log('Client connected', 'SocketGateway', this.server);
    // A client has connected
    this.books++;
    // Notify connected clients of current books
    this.server.emit('books', this.books);
  }
  async handleDisconnect() {
    Logger.log('Client disconnected', 'SocketGateway', this.server);
    // A client has disconnected
    this.books--;
    // Notify connected clients of current books
    this.server.emit('books', this.books);
  }
  @SubscribeMessage('message')
  async onMessage(client: Socket, message: string) {
    Logger.log(message, 'SocketGateway', this.server);
    client.broadcast.emit('message', message);
  }
}
