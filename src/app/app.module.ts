import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClusterBarComponent } from './components/cluster-bar/cluster-bar.component';
import { StackBarComponent } from './components/stack-bar/stack-bar.component';
import { AreaComponent } from './components/area/area.component';

// Additional Dependencies Imported:
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmChartsModule } from '@amcharts/amcharts3-angular';

@NgModule({
  declarations: [
    AppComponent,
    ClusterBarComponent,
    StackBarComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
