import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ProjectRoutingModule} from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';



@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    NewProjectComponent,
    InviteComponent,
  ],
  entryComponents: [
    NewProjectComponent,
    InviteComponent,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ]
})
export class ProjectModule { }
