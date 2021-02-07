import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

  @Input() rowData: any;

  columnDefs = [
    { headerName: 'Id', field: 'id', sortable: true, checkboxSelection: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Username', field: 'username', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Website', field: 'website', sortable: true, filter: true },
    { headerName: 'Street', field: 'street', sortable: true, filter: true }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.rowData = this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
