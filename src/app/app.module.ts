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

import { LoginFormComponent } from "./public/components/login/login-form/login-form.component";
import { LoginComponent } from "./public/pages/login/login.component";
import { SignUpComponent } from "./public/pages/sign-up/sign-up.component";
import { ResetPasswordComponent } from "./public/pages/reset-password/reset-password.component";
import { SignUpFormComponent } from "./public/components/sign-up/sign-up-form/sign-up-form.component";
import { ResetPasswordFormComponent } from "./public/components/reset-password/reset-password-form/reset-password-form.component";

import { MatExpansionPanel} from "@angular/material/expansion";
import { MatExpansionPanelHeader} from "@angular/material/expansion";
import { MatExpansionPanelTitle} from "@angular/material/expansion";
import { MatExpansionPanelDescription} from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

import { NotificationsPanelComponent } from './public/pages/notifications-panel/notifications-panel.component';
import { MatCard } from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";
import { MatCardTitle } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { NotificationsCardComponent } from './notifications/components/card/card.component';
import { ReportCardComponent } from "./reports/components/card/card.component";

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
    LoginFormComponent,
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    SignUpFormComponent,
    ResetPasswordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanelDescription,
    MatCardContent,
    MatCard,
    MatCardTitle,
    HttpClientModule
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
