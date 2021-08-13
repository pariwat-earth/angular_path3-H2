import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeService } from './about-me.service';
import { AboutMeComponent } from './about-me/about-me.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {
    path: '',
    component:AboutMeComponent
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  {
    path: 'contact',
    component: ContactMeComponent
  },
  {
    path: 'protfolio',
    component: ProtfolioComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillComponent,
    ContactMeComponent,
    ProtfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AboutMeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
