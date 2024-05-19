import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidebarComponent } from './public/components/sidebar/sidebar.component';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './public/pages/home/home.component';
import { HelpCenterComponent } from './public/pages/help-center/help-center.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { ProductComponent } from './public/pages/product/product.component';
import { SearcherComponent } from './public/pages/searcher/searcher.component';
import { SettingsComponent } from './public/pages/settings/settings.component';
import { ShoppingCartComponent } from './public/pages/shopping-cart/shopping-cart.component';
import { ReportsPanelComponent } from './public/pages/reports-panel/reports-panel.component';

import { MatExpansionPanel} from "@angular/material/expansion";
import { MatExpansionPanelHeader} from "@angular/material/expansion";
import { MatExpansionPanelTitle} from "@angular/material/expansion";
import { MatExpansionPanelDescription} from "@angular/material/expansion";

import { NotificationsPanelComponent } from './public/pages/notifications-panel/notifications-panel.component';
import { MatCard } from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";
import { MatCardTitle } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { NotificationsCardComponent } from './notifications/components/card/card.component';
import { ReportCardComponent } from "./reports/components/card/card.component";
import {OrderTableComponent} from './orders/components/table/table.component';
import { OrdersComponent } from './public/pages/orders/orders.component';
import {MatTable, MatTableModule} from "@angular/material/table";
import {CdkCellDef, CdkFooterRowDef, CdkHeaderCellDef, CdkHeaderRowDef, CdkRowDef, CdkTable} from "@angular/cdk/table";
import { MatDialogModule} from "@angular/material/dialog";
import {OrdersObservationComponent} from "./public/components/orders-observation/orders-observation.component";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    HelpCenterComponent,
    PageNotFoundComponent,
    ProductComponent,
    SearcherComponent,
    SettingsComponent,
    ShoppingCartComponent,
    NotificationsPanelComponent,
    NotificationsCardComponent,
    ReportCardComponent,
    ReportsPanelComponent,
    OrderTableComponent,
    OrdersComponent,
    OrdersObservationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanelDescription,
    MatCardContent,
    MatCard,
    MatCardTitle,
    HttpClientModule,
    MatTable,
    MatTableModule,
    CdkTable,
    CdkHeaderCellDef,
    CdkCellDef,
    CdkHeaderRowDef,
    CdkRowDef,
    CdkFooterRowDef,
    MatDialogModule,
    MatFormField,
    FormsModule,
    MatLabel,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [
    provideAnimationsAsync(),
provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
