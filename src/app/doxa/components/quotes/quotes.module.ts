import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TreeSelectModule } from 'primeng/treeselect';
import { QuotesRoutingModule } from './quotes-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuotesRoutingModule,
		FormsModule,
		TreeModule,
		TreeTableModule,
    TreeSelectModule
  ]
})
export class QuotesModule { }
