import { Injectable } from '@angular/core';

const CONFIG = {
  apiUrl: 'https://mighty-woodland-68486.herokuapp.com/'
};

@Injectable()
export class AppSettings {

  constructor() { }
  public getApiUrl() {
    return CONFIG.apiUrl;
  }
}
