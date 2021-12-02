import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {

  baseUrl = "https://localhost:5001/api/";
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  get400ValidationError(){
    this.http.post(this.baseUrl + 'accept/register', {}).subscribe(response =>{
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    })
  }


}
