import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';

@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective
  ],
  exports: [
    ErrorMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
