import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  myDate = new Date();
  activeCard = "Client";
  activeCards ="Accounting"
  constructor( private router: Router, private modalService:NgbModal) { }
  setActiveCard(c: string) {
    this.activeCard = c;
    console.log(this.activeCard);
   
  }
  setActive(c: string) {
    this.activeCards = c;
    console.log(this.activeCards);
   
  }
  ngOnInit(): void {
    
  }
  addNew() {
      this.router.navigate(["/newclient"]);

}
@ViewChild("addField") addField: TemplateRef<any>;
  requestdate() {
    this.modalService.open(this.addField, {
      centered: true,
      backdrop: true,
      windowClass: "sidebar-modal",
      size: "lg",
    });
  }

}
