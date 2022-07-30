import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NewmomentComponent } from './pages/newmoment/newmoment.component';
import { MomentformComponent } from './components/momentform/momentform.component';
import { MessageComponent } from './components/message/message.component';
import { MomentComponent } from './pages/moment/moment.component';
import { EditmomentComponent } from './pages/editmoment/editmoment.component';

  @NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      AboutComponent,
      HomeComponent,
      NewmomentComponent,
      MomentformComponent,
      MessageComponent,
      MomentComponent,
      EditmomentComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })

    export class AppModule { }
