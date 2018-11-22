import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ion4TabsSlideComponent } from './ion4-tabs-slide/ion4-tabs-slide.component';
import { Ion4ExpandableHeaderComponent } from './ion4-expandable-header/ion4-expandable-header.component';
import { Ion4ExpandableImageHeaderComponent } from './ion4-expandable-image-header/ion4-expandable-image-header.component';
import { Ion4UploadImageFirebaseComponent } from './ion4-upload-image-firebase/ion4-upload-image-firebase.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    Ion4TabsSlideComponent,
    Ion4ExpandableHeaderComponent,
    Ion4ExpandableImageHeaderComponent,
    Ion4UploadImageFirebaseComponent
  ],
  exports: [
    Ion4TabsSlideComponent,
    Ion4ExpandableHeaderComponent,
    Ion4ExpandableImageHeaderComponent,
    Ion4UploadImageFirebaseComponent
  ]
})
export class ComponentsModule { }
