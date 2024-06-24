import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HelpCenterComponent} from './public/pages/help-center/help-center.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {ProductComponent} from './public/pages/product/product.component';
import {SearcherComponent} from './public/pages/searcher/searcher.component';
import {SettingsComponent} from './profile-managment/pages/settings/settings.component';
import {ShoppingCartComponent} from './subscription-and-payments/pages/shopping-cart/shopping-cart.component';
import {ReportsPanelComponent} from './public/pages/reports-panel/reports-panel.component';
import {NotificationsPanelComponent} from './profile-managment/pages/notifications-panel/notifications-panel.component';
import {SignInComponent} from './iam/pages/sign-in/sign-in.component';
import {SignUpComponent} from './iam/pages/sign-up/sign-up.component';
import {ResetPasswordComponent} from './iam/pages/reset-password/reset-password.component';
import {FavoritesPanelComponent} from './profile-managment/pages/favorites-panel/favorites-panel.component';
import {HomeClientComponent} from './dashboard-and-analytics/pages/home-client/home-client.component';
import {UploadComponent} from './products/components/interaction-crud/upload/upload.component';
import {UpdateComponent} from './products/components/interaction-crud/update/update.component';
import {RemoveComponent} from './products/components/interaction-crud/remove/remove.component';
import {NotifySuppliersComponent} from './profile-managment/pages/notify-suppliers/notify-suppliers.component';
import {NotifyCustomerComponent} from './profile-managment/pages/notify-customer/notify-customer.component';
import {ManageReturnsComponent} from './profile-managment/pages/manage-returns/manage-returns.component';
import {OrdersComponent} from "./public/pages/orders/orders.component";

const routes: Routes = [
  /* General routes */
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'reset-password', component: ResetPasswordComponent},

  /* Client routes */
  {path: 'client/home', component: HomeClientComponent},
  {path: 'client/notifications', component: NotificationsPanelComponent},
  {path: 'client/favorites', component: FavoritesPanelComponent},
  {path: 'client/shopping-cart', component: ShoppingCartComponent},
  {path: 'client/reports', component: ReportsPanelComponent},
  {path: 'client/product', component: ProductComponent},
  {path: 'client/searcher', component: SearcherComponent},
  {path: 'client/settings', component: SettingsComponent},
  {path: 'client/help-center', component: HelpCenterComponent},

  /* Staff routes */
  {path: 'staff/home', component: OrdersComponent},
  {path: 'staff/upload-item', component: UploadComponent},
  {path: 'staff/update-item', component: UpdateComponent},
  {path: 'staff/remove-item', component: RemoveComponent},
  {path: 'staff/notify-suppliers', component: NotifySuppliersComponent},
  {path: 'staff/notify-costumer', component: NotifyCustomerComponent},
  {path: 'staff/manage-returns', component: ManageReturnsComponent},
  {path: 'staff/settings', component: SettingsComponent},
  {path: 'staff/help-center', component: HelpCenterComponent},

  /* Extra routes */
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
