import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../app/pas/auth/auth.guard";
import { MsalGuard } from "@azure/msal-angular";
import { LoginComponent } from "./pas/auth/login/login.component";
import { RegisterComponent } from "./pas/auth/register/register.component";
import { DashboardComponent } from "./pas/dashboard/dashboard.component";
import { IntegrationComponent } from "./pas/integration/integration.component";
import { NewClientComponent } from "./pas/new-client/new-client.component";
import { AccountComponent } from "./pas/administration/account/account.component";
import { SubscriptionComponent } from "./pas/administration/subscription/subscription.component";

export const routes: Routes = [
  {
    path: "ROS",
    loadChildren: () => import("./pas/pas.module").then((m) => m.ROSModule),
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [MsalGuard],
  },
  {
    path: "account",
    component: AccountComponent,
    canActivate: [MsalGuard],
  },
  {
    path: "subscription",
    component: SubscriptionComponent,
    canActivate: [MsalGuard],
  },
  {
    path: "accounting",
    canLoad: [],

    loadChildren: () =>
      import("./pas/cash-management/cash-management.module").then(
        (m) => m.CashManagementModule
      ),
  },
  {
    path: "integration",
    component: IntegrationComponent,
    canActivate: [MsalGuard],
  },
  {
    path: "newclient",
    component: NewClientComponent,
    canActivate: [MsalGuard],
  },
  {
    path: "emp-management",
    canLoad: [],

    loadChildren: () =>
      import("./pas/employee/employee.module").then((m) => m.EmployeeModule),
  },

  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },

  { path: "", redirectTo: "ROS", pathMatch: "full" },
  { path: "**", redirectTo: "ROS" },
];

const config: ExtraOptions = {
  useHash: false,
};

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      initialNavigation: !isIframe ? "enabled" : "disabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
