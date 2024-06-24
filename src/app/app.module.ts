import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {SidebarComponent} from './public/components/sidebar/sidebar.component';
import {HelpCenterComponent} from './public/pages/help-center/help-center.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {ProductComponent} from './public/pages/product/product.component';
import {SearcherComponent} from './public/pages/searcher/searcher.component';
import {SettingsComponent} from './profile-managment/pages/settings/settings.component';
import {ShoppingCartComponent} from './subscription-and-payments/pages/shopping-cart/shopping-cart.component';
import {ReportsPanelComponent} from './public/pages/reports-panel/reports-panel.component';
import {NotificationsPanelComponent} from './profile-managment/pages/notifications-panel/notifications-panel.component';
import {NotificationsCardComponent} from './profile-managment/components/card/card.component';
import {ReportCardComponent} from './reports/components/card/card.component';
import {ProductsCardComponent} from './products/components/card/card.component';
import {SignInComponent} from './iam/pages/sign-in/sign-in.component';
import {SignUpComponent} from './iam/pages/sign-up/sign-up.component';
import {ResetPasswordComponent} from './iam/pages/reset-password/reset-password.component';
import {SignInFormComponent} from './iam/components/sign-in-form/sign-in-form.component';
import {ResetPasswordFormComponent} from './iam/components/reset-password-form/reset-password-form.component';
import {SignUpFormComponent} from './iam/components/sign-up-form/sign-up-form.component';
import {CardComponent} from './product-refunds/components/card/card.component';
import {FormComponent} from './product-refunds/components/form/form.component';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';

import {CardSettingsComponent} from './profile-managment/components/card-settings/card-settings.component';
import {FormSettingsComponent} from './profile-managment/components/form-settings/form-settings.component';
import {ProductsComponent} from './products/components/products/products.component';

import {FavoritesCardComponent} from './dashboard-and-analytics/components/card/card.component';
import {FavoritesPanelComponent} from './profile-managment/pages/favorites-panel/favorites-panel.component';
import {HomeClientComponent} from './dashboard-and-analytics/pages/home-client/home-client.component';
import {HomeStaffComponent} from './dashboard-and-analytics/pages/home-staff/home-staff.component';
import {UpdateComponent} from './products/components/interaction-crud/update/update.component';
import {UploadComponent} from './products/components/interaction-crud/upload/upload.component';
import {RemoveComponent} from './products/components/interaction-crud/remove/remove.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NotifyCustomerComponent} from './profile-managment/pages/notify-customer/notify-customer.component';
import {NotifySuppliersComponent} from './profile-managment/pages/notify-suppliers/notify-suppliers.component';
import {ManageReturnsComponent} from './profile-managment/pages/manage-returns/manage-returns.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';
import {OrdersObservationComponent} from './public/components/orders-observation/orders-observation.component';
import {OrdersComponent} from './public/pages/orders/orders.component';
import {OrderTableComponent} from "./orders/components/table/table.component";
import {MatTable, MatTableModule} from "@angular/material/table";
import {CdkCellDef, CdkFooterRowDef, CdkHeaderCellDef, CdkHeaderRowDef, CdkTable} from "@angular/cdk/table";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HelpCenterComponent,
    PageNotFoundComponent,
    ProductComponent,
    SearcherComponent,
    SettingsComponent,
    ShoppingCartComponent,
    ReportsPanelComponent,
    NotificationsPanelComponent,
    NotificationsCardComponent,
    ReportCardComponent,
    ProductsCardComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    SignInFormComponent,
    ResetPasswordFormComponent,
    SignUpFormComponent,
    CardSettingsComponent,
    FormSettingsComponent,
    ProductsComponent,
    FavoritesCardComponent,
    FavoritesPanelComponent,
    HomeClientComponent,
    HomeStaffComponent,
    UpdateComponent,
    UploadComponent,
    RemoveComponent,
    NotifyCustomerComponent,
    NotifySuppliersComponent,
    ManageReturnsComponent,
    CardComponent,
    FormComponent,
    OrdersObservationComponent,
    OrdersComponent,
    OrderTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    FormsModule,
    MatFormField,
    CommonModule,
    MatCard,
    MatIcon,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,
    MatTable,
    MatTableModule,
    CdkTable,
    CdkHeaderCellDef,
    CdkCellDef,
    CdkHeaderRowDef,
    CdkTable,
    CdkFooterRowDef,
    CdkFooterRowDef,
    MatDialogModule,
    MatFormField,
    FormsModule,
    MatLabel,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
