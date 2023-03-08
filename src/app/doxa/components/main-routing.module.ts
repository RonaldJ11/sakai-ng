import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'productsMD', loadChildren: () => import('./product-md/product-md.module').then(m => m.ProductMDModule) },
  { path: 'menu', data: { breadcrumb: 'Menu' }, loadChildren: () => import('../../demo/components/uikit/menus/menus.module').then(m => m.MenusModule) },
  { path: '**', redirectTo: '/notfound' }
  // { path: '', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
