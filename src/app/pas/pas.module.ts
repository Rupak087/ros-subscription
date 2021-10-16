import { NgModule } from "@angular/core";
import { ROSRoutingModule } from "./pas-routing.module";
import { ROSComponent } from "./pas.component";
import { ThemeModule } from "../@theme/theme.module";

import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { CashManagementModule } from "./cash-management/cash-management.module";
import { EmployeeModule } from "./employee/employee.module";
import { StockModule } from "./stock/stock.module";
import { NbMenuModule, NbPopoverModule, NbSelectModule, NbToggleModule, NbTooltipModule } from "@nebular/theme";

import { SharedModule } from "../shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { IntegrationComponent } from './integration/integration.component';
import { NewClientComponent } from "./new-client/new-client.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CashManagementRoutingModule } from "./cash-management/cash-management-routing.module";
import { ConfigurationComponent } from './administration/subscription/configuration/configuration.component';

@NgModule({
  declarations: [ROSComponent, DashboardComponent, IntegrationComponent, NewClientComponent, ConfigurationComponent],
  imports: [

    ThemeModule,
    // NbMenuModule,
    // CashManagementModule,
    // EmployeeModule,
    // StockModule,
    AuthModule,
    MiscellaneousModule,
    SharedModule,
    CommonModule,
    CashManagementRoutingModule,
    MatSidenavModule,
    SharedModule,
    NgbModalModule,
    FormsModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    NgbModalModule,
    FormsModule,
    MatTooltipModule,
    NbTooltipModule,
    NbPopoverModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    NbSelectModule,
    NbToggleModule,
    NgbModule,
    ThemeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
})
export class ROSModule {}
