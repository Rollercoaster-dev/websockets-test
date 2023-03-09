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
    // A client has connected
    this.books++;
    // Notify connected clients of current books
    this.server.emit('books', this.books);
  }
  async handleDisconnect() {
    // A client has disconnected
    this.books--;
    // Notify connected clients of current books
    this.server.emit('books', this.books);
  }
  @SubscribeMessage('message')
  async onMessage(client: Socket, message: string) {
    client.broadcast.emit('message', message);
  }
}
