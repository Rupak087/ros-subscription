import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigateByUrl("/integration")
  }
}
