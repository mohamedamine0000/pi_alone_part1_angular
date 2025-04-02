import { Component } from '@angular/core';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {


	files: File[] = [];

	onSelect(event: { addedFiles: any; }) {
		this.files.push(...event.addedFiles);
	}

	onRemove(event: File) {
		this.files.splice(this.files.indexOf(event), 1);
	}


	breadCrumbItems!: Array<{}>;

	ngOnInit(): void {
		/**
	   * BreadCrumb
	   */
		this.breadCrumbItems = [
			{ label: 'Forms' },
			{ label: 'File Upload', active: true }
		];
	}

}
