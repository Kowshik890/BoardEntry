import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BoardService} from '../board-entry/board.service';
import {Router} from '@angular/router';
import {Board} from './board';
import { BasePath} from '../../BasePath';

@Component({
  selector: 'app-board-report',
  templateUrl: './board-report.component.html',
  styleUrls: ['./board-report.component.css']
})
export class BoardReportComponent implements OnInit {
  private base = new BasePath();
  basepath = this.base.springPath;
  data: any;
  board: Board;
 //deleteBoard: any;

  constructor(private http: HttpClient, private service: BoardService, private router: Router) {
  }

  ngOnInit() {
    this.http.get(this.basepath + 'boards/all').subscribe(res => {
      console.log(res);
      this.data = res.valueOf();
      // this.data = response.json().users;
    });
  }

/// delete Board
  deleteBoard (id) {
    this.service.deleteBoard(id);
    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i].id === id) {
        this.data.splice(i, 1);
      }
    }
  }
  //Update Board
  updateBoard(data2: Board ) {
   // this.service.board = Object.assign({}, data2)
      this.service.setter(data2);
     this.router.navigate(['/board-entry']);
    }
}
