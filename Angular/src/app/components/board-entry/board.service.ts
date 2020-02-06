import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Board} from '../board-report/board';
import { BasePath} from '../../BasePath';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private base = new BasePath();
  basepath = this.base.springPath;
  public board: Board;
  Board_API_URL = 'http://localhost:8082/boards/all';
  url = this.basepath + '/boards';
  constructor(private http: HttpClient, private httpClient:  HttpClient) { }

  getContacts() {
    return  this.httpClient.get(`${this.Board_API_URL}`);
  }
  createBoard(id, bname ) {
    return this.http.post(this.basepath + 'boards/add', {
      id,
      bname,
    }, httpOptions ).subscribe( data => {
      console.log(data);
      if (data) {
        window.alert('Entry Successful.');
      }
    });
  }
  deleteBoard(id) {
    this.http.delete(this.basepath + 'boards/' + id, httpOptions).subscribe(res => {
      console.log(res);
    });
  }
  updateBoard(upBoard: Board ) {
    this.http.put(this.basepath + 'boards/add', JSON.stringify(upBoard), httpOptions).subscribe(res => {
      console.log(res);
    });
  }
  setter(board: Board) {
    this.board = board;
  }
  getter() {
    return this.board;
  }
}
