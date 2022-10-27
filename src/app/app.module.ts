// import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphVisaulizerComponent } from './core/components/graph-visaulizer/graph-visaulizer.component';
import { NodeComponent } from './core/components/node/node.component';
import { ActionsComponent } from './core/components/actions/actions.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GraphVisaulizerComponent,
    NodeComponent,
    ActionsComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    DragDropModule, 
    ReactiveFormsModule, 
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
