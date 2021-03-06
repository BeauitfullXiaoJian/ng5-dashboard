import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';

/*tool-ui*/
import {
    TSCheckboxModule,
    TSFileModule,
    TSLoadingModule,
    TSModalModule,
    TSDatePickerModule,
    TSSelectModule,
    TSToggleModule,
    TSTimePickerModule,
    TSSwitchModule,
    TSLoopCardModule,
    TSBtnGroupModule,
    TSFormSliderModule,
    TSFormEditModule,
} from './../../tools-ui';

/*路由模块*/
import { FormRoutingModule } from './form.routing';

/*弹窗组件*/
import { SimpleModalComponent } from './modal/simple-modal.component';

/*页面组件*/
import { SimpleComponent } from './pages/simple/simple.component';
import { SelectComponent } from './pages/select/select.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { LoopCardComponent } from './pages/loop-card/loop-card.component';
import { MutiComponent } from './pages/muti/muti.component';
import { CheckFormComponent } from './pages/checkform/checkform.component';
import { EditComponent } from './pages/edit/edit.component';

@NgModule({
    imports: [
        FormsModule,
        /*ReactiveFormsModule为响应式表单模块，不使用时，请勿导入*/
        ReactiveFormsModule,
        TSCheckboxModule,
        TSFileModule,
        TSLoadingModule,
        TSModalModule,
        FormRoutingModule,
        TSDatePickerModule,
        TSToggleModule,
        TSSelectModule,
        TSTimePickerModule,
        TSSwitchModule,
        TSLoopCardModule,
        SortablejsModule,
        TSBtnGroupModule,
        TSFormSliderModule,
        TSFormEditModule,
    ],
    declarations: [
        SimpleComponent,
        SimpleModalComponent,
        SelectComponent,
        CheckboxComponent,
        DatepickerComponent,
        MutiComponent,
        LoopCardComponent,
        CheckFormComponent,
        EditComponent,
    ],
    entryComponents: [
        SimpleModalComponent,
    ]
})
export class FormModule { }
