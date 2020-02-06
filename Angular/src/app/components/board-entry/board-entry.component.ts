import { Component, OnInit } from '@angular/core';
import {BoardService} from './board.service';
import { HttpClient } from '@angular/common/http';
import {Board} from '../board-report/board';
import { BasePath} from '../../BasePath';

@Component({
  selector: 'app-board-entry',
  templateUrl: './board-entry.component.html',
  styleUrls: ['./board-entry.component.css']
})
export class BoardEntryComponent implements OnInit {
  errorFind1 = '';
  private base = new BasePath();
  basepath = this.base.springPath;
  data: any;
  data2: any;
  boardId: any;
  bname2: any;
  model: any = {};
  public board: Board ;
  constructor (private service: BoardService, private http: HttpClient ) { }
  ngOnInit() {
    this.board = this.service.getter();
    // this.http.get('http://localhost:8082/boards/all').subscribe(res => {
    //   console.log(res);
    //   this.data = res.valueOf();
    //   // this.data = response.json().users;
    // });
    this.http.get(this.basepath + 'lastboard').subscribe(res => {
      console.log(res);
      this.data2 = res.valueOf();
     // console.log("data2" + this.data2);
       this.boardId = this.data2.id;
        console.log(' boardId=' + this.boardId);
    });
  }
  getContacts() {
    this.http.get(this.basepath + 'boards/all').subscribe(res => {
      console.log(res);
      this.data = res.valueOf();
     // this.data = response.json().users;
    });
  }
  boardEntry(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.querySelector('#id').value;
    const bname = target.querySelector('#bname').value.toUpperCase();
    this.service.createBoard(id, bname);
     this.bname2 = bname;
   /* if (bname === '') {
      this.errorFind1 = 'Please fill up the field';
      //window.alert('fill the field');
    }*/
    // if (bname !== bname.toUpperCase()) {
    //   this.errorFind1 = 'Please fill up the field with Uppercase letter';
    // }

  }
}
