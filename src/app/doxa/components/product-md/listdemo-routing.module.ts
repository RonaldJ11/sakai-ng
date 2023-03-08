import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductMdComponent } from './product-md.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProductMdComponent }
	])],
	exports: [RouterModule]
})
export class ListDemoRoutingModule { }
