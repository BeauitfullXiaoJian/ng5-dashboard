import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Breadcrumbs } from './../../dashboard/classes/breadcrumb.class';
import { GoodsInfoComponent } from './pages/goods-info/goods-info.component';
import { GoodsListComponent } from './pages/goods-list/goods-list.component';
import { GoodsTypeComponent } from './pages/goods-type/goods-type.component';
import { GoodsLoopComponent } from './pages/goods-loop/goods-loop.component';
import { GoodsListSmartComponent } from './pages/goods-list-smart/goods-list-smart.component';

const routes: Routes = [
  {
    path: 'list',
    component: GoodsListComponent,
    data: { breadcrumbs: new Breadcrumbs([['商品列表', 'list-alt']]) },
    children: [
      {
        path: 'info/:id',
        component: GoodsInfoComponent,
        data: { breadcrumbs: new Breadcrumbs([['商品列表', 'list-alt', '/goods/list'], ['商品详情', 'info']]) },
      },
      {
        path: 'info',
        component: GoodsInfoComponent,
        data: { breadcrumbs: new Breadcrumbs([['商品列表', 'list-alt', '/goods/list'], ['添加商品', 'plus']]) },
      }
    ]
  },
  {
    path: 'list-smart',
    component: GoodsListSmartComponent,
    data: { breadcrumbs: new Breadcrumbs([['商品列表-SMART', 'list-alt']]) },
    children: [
      {
        path: 'info/:id',
        component: GoodsInfoComponent,
        data: { breadcrumbs: new Breadcrumbs([['商品列表', 'list-alt', '/goods/list'], ['商品详情', 'info']]) },
      },
      {
        path: 'info',
        component: GoodsInfoComponent,
        data: { breadcrumbs: new Breadcrumbs([['商品列表', 'list-alt', '/goods/list'], ['添加商品', 'plus']]) },
      }
    ]
  },
  { path: 'type', component: GoodsTypeComponent, data: { breadcrumbs: new Breadcrumbs([['商品分类', 'tags']]) } },
  { path: 'loop', component: GoodsLoopComponent, data: { breadcrumbs: new Breadcrumbs([['商城幻灯片', 'picture-o']]) } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GoodsRoutingModule { }
