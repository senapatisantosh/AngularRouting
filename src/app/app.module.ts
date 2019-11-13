import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdjudicationModule } from './modules/adjudication/adjudication.module';
import { PageNotFoundComponent } from './shared/Components/page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './shared/Components/not-authorized/not-authorized.component';
import { NgserviceFactoryService } from './services/ngservice-factory.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AdjudicationModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (dynamicService: NgserviceFactoryService) => () => dynamicService.conditionalLoad(),
      deps: [NgserviceFactoryService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
