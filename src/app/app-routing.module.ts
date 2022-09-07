import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/authentication/services/auth.guard';

const routes: Routes = [
  {
    path: 'products', loadChildren: () => import('./featureModules/products/products.module')
      .then(m => m.ProductsModule), canActivate: [AuthGuard]
  },
  {
    path: 'auth', loadChildren: () => import('./core/authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },

  { path: '', redirectTo: 'products', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
