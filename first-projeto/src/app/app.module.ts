import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
    declarations: [
        AppComponent,
        MeuPrimeiroComponent,
        MeuSegundoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CursosModule
    ]
})
export class AppModule { }
