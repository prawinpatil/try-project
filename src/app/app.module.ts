import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material';

import {AngularFireModule} from '@angular/fire' ;
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';

import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { CancelComponent } from './cancel/cancel.component';
import { PayFeesComponent } from './pay-fees/pay-fees.component';
import { DetailsComponent } from './details/details.component';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    

    AppComponent,
    LoginComponent,
    HomeComponent,
    TabsComponent,
    NewAdmissionComponent, CancelComponent, PayFeesComponent,
    DetailsComponent,

    
  ],

  imports: [

    FormsModule,
    ReactiveFormsModule,

    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatGridListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
 

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'app-login', component: LoginComponent },
      {path: 'tab', component: TabsComponent},
      {path: 'newAdmission', component: NewAdmissionComponent},
      {path: 'cancel', component: CancelComponent},
      {path: 'payFees', component: PayFeesComponent},
      {path: 'details', component: DetailsComponent},

    ])
  ],


  providers: [
    LoginService,
  ],


  bootstrap: [AppComponent]
})
//note this is also class 
export class AppModule { }
