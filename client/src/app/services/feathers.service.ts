import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import * as feathers from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';
import { AuthenticationRequest } from '@feathersjs/authentication/lib';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FeathersService {
  private _feathers: any = feathers();        // init socket.io
  private _socket = io(environment.serverUrl); // init feathers
  private feathersAuthClient = require('@feathersjs/authentication-client').default;

  constructor() {
    this._feathers
      .configure(feathersSocketIOClient(this._socket))  // add socket.io plugin
      .configure(this.feathersAuthClient({              // add authentication plugin
        storage: window.localStorage
      }));
  }

  // expose services
  public service(name: string) {
    return this._feathers.service(name);
  }

  // expose authentication as login
  public login(credentials?: AuthenticationRequest) {
    return this._feathers.authenticate(credentials);
  }

  // expose logout
  public logout() {
    return this._feathers.logout();
  }
}
