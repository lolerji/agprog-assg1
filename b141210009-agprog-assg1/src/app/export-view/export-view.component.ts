import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-export-view',
  templateUrl: './export-view.component.html',
  styleUrls: ['./export-view.component.css']
})
export class ExportViewComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
