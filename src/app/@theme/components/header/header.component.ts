import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { MsalService } from "@azure/msal-angular";
import { NGXLogger } from "ngx-logger";
import { AuthFacadeService } from "../../../pas/auth/facade/auth-facade.service";

@Component({
  selector: "ngx-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public pushRightClass: string;

  constructor(
    public router: Router,
    private authFacade: AuthFacadeService,
    private logger: NGXLogger
  ) {
    this.router.events.subscribe((val) => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  // isAdmin(): boolean {
  //     return this.loginService.isAdmin();
  // }

  restaurants = [];
  selectedRestaurant;
  AzureName;

  ngOnInit() {
    this.pushRightClass = "push-right";
    this.restaurants = this.authFacade.getAllUserRestaurants();
    this.selectedRestaurant = this.authFacade.getRestaurant();
    this.logger.log(this.selectedRestaurant);
    this.AzureName = localStorage.getItem("AzureName")
    // console.log("From header",this.AzureName)
  }

  changeRestaurant(res: string) {
    this.authFacade.changeRestaurants(res);
    window.location.reload();
  }

  getUser() {
    this.logger.log("User", this.authFacade.getUserDetails());
  }
  logout() {
    this.authFacade.logout();
  }
  isToggled(): boolean {
    const dom: Element = document.querySelector("body");
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector("body");
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector("body");
    dom.classList.toggle("rtl");
  }
}
