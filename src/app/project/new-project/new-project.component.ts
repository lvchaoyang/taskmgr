import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private dialog: MatDialogRef<NewProjectComponent>,
              private oc: OverlayContainer) { }

  ngOnInit() {
    console.log(JSON.stringify(this.data));
    const nowThemeClass = this.data.dark ? 'myapp-dark-theme' : null;
    this.oc.getContainerElement().classList.add(nowThemeClass);
  }
  onClick() {
    this.dialog.close('I received your message');
  }
}
