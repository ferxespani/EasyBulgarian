import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { OnlineCoursesComponent } from './components/online-courses/online-courses.component';
import { SpeakingClubsComponent } from './components/speaking-clubs/speaking-clubs.component';
import { GroupsComponent } from './components/groups/groups.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentDialogComponent } from './components/payment-dialog/payment-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    OnlineCoursesComponent,
    SpeakingClubsComponent,
    GroupsComponent,
    PaymentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatChipsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
