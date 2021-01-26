import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './login/login';
import { ProfileComponent } from './profile/profile.component';
import { ProfileItemComponent } from './profile-item/profile-item.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileItemComponent,
    ProfileDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
