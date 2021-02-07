import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ag-page',
  templateUrl: './ag-page.component.html',
  styleUrls: ['./ag-page.component.scss']
})
export class AgPageComponent implements OnInit {
  gridData: any;
  fpbForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.fpbForm = this.fb.group({
      unit: '',
      rpUnit: ''
    });
  }

  applyFilter(event) {
    console.log(this.fpbForm.value);
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res =>
      this.gridData = res
    );
  }
}
