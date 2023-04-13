import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SubscriberService } from './Services/subscribers.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SubscribersComponent } from './Containers/subscribers/subscribers.component';
import { SubscriberCardComponent } from './Components/subscriber-card/subscriber-card.component';
import { AddNewComponent } from './Containers/add-new/add-new.component';
import { SubscriberDetailComponent } from './Containers/subscriber-detail/subscriber-detail.component';
import { PageNotFoundComponent } from './Containers/page-not-found/page-not-found.component';
import { NewSubscriberFormComponent } from './Components/new-subscriber-form/new-subscriber-form.component';
import { SubscriberDetailCardComponent } from './Components/subscriber-detail-card/subscriber-detail-card.component';

const routes: Routes = [
  {path: '', component: SubscribersComponent},
  {path: 'add', component: AddNewComponent},
  {path: 'subscriber', component: SubscribersComponent},
  {path: 'subscriber/:id', component: SubscriberDetailComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubscribersComponent,
    SubscriberCardComponent,
    AddNewComponent,
    SubscriberDetailComponent,
    PageNotFoundComponent,
    NewSubscriberFormComponent,
    SubscriberDetailCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SubscriberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
