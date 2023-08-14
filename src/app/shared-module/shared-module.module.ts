import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SearchpipePipe } from './pipe/searchpipe.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FilterPipe,
    SearchpipePipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[HeaderComponent,
  FilterPipe,SearchpipePipe]
})
export class SharedModuleModule { }
