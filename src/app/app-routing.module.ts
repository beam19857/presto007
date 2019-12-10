import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'model-page', loadChildren: './model-page/model-page.module#ModelPagePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'orderlist', loadChildren: './orderlist/orderlist.module#OrderlistPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'modelselect/:marketname', loadChildren: './modelselect/modelselect.module#ModelselectPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'register2', loadChildren: './register2/register2.module#Register2PageModule' },
  { path: 'bill', loadChildren: './bill/bill.module#BillPageModule' },
  { path: 'headbill', loadChildren: './headbill/headbill.module#HeadbillPageModule' },
  { path: 'bill-detail', loadChildren: './bill-detail/bill-detail.module#BillDetailPageModule' },
  { path: 'modeldrink', loadChildren: './modeldrink/modeldrink.module#ModeldrinkPageModule' },
  { path: 'modelsnack', loadChildren: './modelsnack/modelsnack.module#ModelsnackPageModule' },
  { path: 'modelfruit', loadChildren: './modelfruit/modelfruit.module#ModelfruitPageModule' },
  { path: 'modelbuffone', loadChildren: './modelbuffone/modelbuffone.module#ModelbuffonePageModule' },
  { path: 'modelbufftwo', loadChildren: './modelbufftwo/modelbufftwo.module#ModelbufftwoPageModule' },
  { path: 'modelgrill', loadChildren: './modelgrill/modelgrill.module#ModelgrillPageModule' },
  { path: 'mainpage', loadChildren: './mainpage/mainpage.module#MainpagePageModule' },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
