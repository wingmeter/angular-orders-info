import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutComponent } from './components/layout/layout.component'
import { routingComponents } from './app-routing.module'
import { TabsModule } from 'ngx-bootstrap/tabs'

@NgModule({
  declarations: [AppComponent, LayoutComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule, TabsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
