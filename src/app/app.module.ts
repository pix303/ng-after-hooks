import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentChildComponent } from './content-children/content-child/content-child.component';
import { ContentParentComponent } from './content-children/content-parent/content-parent.component';
import { DateViewerDirective } from './content-children/date-viewer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentChildComponent,
    ContentParentComponent,
    DateViewerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
