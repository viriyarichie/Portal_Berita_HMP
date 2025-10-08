import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'kategori/:namaKategori',
    loadChildren: () =>
      import('./kategori/kategori.module').then((m) => m.KategoriPageModule),
  },
  {
    path: 'daftar-berita',
    loadChildren: () =>
      import('./daftar-berita/daftar-berita.module').then(
        (m) => m.DaftarBeritaPageModule
      ),
  },
  {
    path: 'baca-berita/:asal/:judul',
    loadChildren: () =>
      import('./baca-berita/baca-berita.module').then(
        (m) => m.BacaBeritaPageModule
      ),
  },
  {
    path: 'my-favorite',
    loadChildren: () =>
      import('./my-favorite/my-favorite.module').then(
        (m) => m.MyFavoritePageModule
      ),
  },
  {
    path: 'cari-berita',
    loadChildren: () =>
      import('./cari-berita/cari-berita.module').then(
        (m) => m.CariBeritaPageModule
      ),
  },  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
