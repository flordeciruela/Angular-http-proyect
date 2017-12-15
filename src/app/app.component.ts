import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private blog: string;
  private location: string;
  private sumate: string;
  mostrar = 'fsdf';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('https://api.github.com/users/Laboratoria')
    .map((res:any) => {
      res.sumate = res.email;
      return res;
    })
    .subscribe(
      (res: IResponse) => {
        this.blog = res.blog;
        this.location = res.location;
        this.sumate = res.sumate;
      }
    )
  }

}

interface IResponse {
  blog: string;
  location: string;
  sumate: string;
}
