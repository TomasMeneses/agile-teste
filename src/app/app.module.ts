import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BarraComponent } from "./components/barra/barra.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [AppComponent, BarraComponent],
  imports: [BrowserModule, ChartsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
