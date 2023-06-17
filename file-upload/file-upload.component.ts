import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFiles!: FileList | null;

  onFileChange(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
    if (this.selectedFiles) {
      const files: File[] = Array.from(this.selectedFiles);
      // Implement the logic to match images with article numbers and sync the data
      // For example, you can use the FileReader API to read the image files and perform the matching
    }
  }
}
