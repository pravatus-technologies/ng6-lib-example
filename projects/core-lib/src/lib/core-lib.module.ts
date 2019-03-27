import { NgModule } from '@angular/core';
import { CoreLibComponent } from './core-lib.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [CoreLibComponent, FooComponent],
  imports: [
  ],
  exports: [CoreLibComponent, FooComponent]
})
export class CoreLibModule { }
