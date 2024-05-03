import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CodatConnectionsModule } from './codat-connections/codat-connections.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CodatConnectionsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
