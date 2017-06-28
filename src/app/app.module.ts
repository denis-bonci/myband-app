import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { CoverComponent } from './cover/cover.component';
import { ProposalsComponent } from './proposals/proposals.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    CoverComponent,
    ProposalsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/members',
        pathMatch: 'full'
      },
      {
        path: 'members',
        component: MembersComponent
      },
      {
        path: 'cover',
        component: CoverComponent
      },
      {
        path: 'proposals',
        component: ProposalsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
