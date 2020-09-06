import { Component } from '@angular/core';
import { FileService } from './services/file.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fileService: FileService) {}
  title = 'urban-potato-client';
  files = [];

  ngOnInit() {
    this.fileService.getFiles()
      .subscribe((response) => {
        this.files = response.results;
    });
  }
}
