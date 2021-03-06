import { Component, OnInit } from '@angular/core';
import { ImageConfig, UploadingProgress, UploadResult } from './../../../../tools-ui';
import { Observable } from 'rxjs/Observable';
import { HttpConfig } from '../../../../config/http.config';
import { RequestService } from '../../../../dashboard/services/request.service';
@Component({
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  // 单图上传配置
  uploadConfig: ImageConfig = {
    uploadeFunc: file => {
      return new Observable<UploadResult>(obs => {
        // 模拟等待2秒（上传中）
        setTimeout(() => {
          obs.next({
            source: 'assets/image/card/4.jpg',
            result: true,
            message: '上传成功'
          });
          obs.complete();
        }, 2000);

      });
    },
    useUploader: true
  };

  // 自动上传配置
  autoUploadConfig: ImageConfig = {

    uploadeFunc: file => {
      return new Observable<UploadResult>(obs => {
        // 模拟等待2秒（上传中）
        setTimeout(() => {
          obs.next({
            source: 'assets/image/card/4.jpg',
            result: true,
            message: '上传成功'
          });
          obs.complete();
        }, 2000);

      });
    },
    useUploader: true,
    auto: true
  };

  // 多图自动上传配置
  filesAutoUploadConfig: ImageConfig = {
    auto: false,
    source: '',
  };

  constructor(private request: RequestService) { }

  ngOnInit() { }

  testFunction($event) {
    console.log($event);
  }

}
