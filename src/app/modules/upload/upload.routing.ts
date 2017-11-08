import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Breadcrumbs } from './../../dashboard/classes/breadcrumb.class';
import { SimpleComponent } from './pages/simple/simple.component';
import { VideoComponent } from './pages/video/video.component';
import { BreadcrumbService } from './../../dashboard/services/breadcrumb.service';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent, data: { breadcrumbs: new Breadcrumbs([['文件上传', 'upload'], ['图片上传', 'file-image-o']]) } },
  { path: 'video', component: VideoComponent, data: { breadcrumbs: new Breadcrumbs([['文件上传', 'upload'], ['视频上传', 'file-video-o']]) } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UploadRoutingModule {
  constructor(breadcrumbService: BreadcrumbService) {
    breadcrumbService.append('upload', routes);
  }
}
