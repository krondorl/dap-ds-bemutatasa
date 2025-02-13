import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'angular';

  @ViewChild('modal', { static: false }) modal!: ElementRef;

  ngAfterViewInit() {
    // Logs the modal's `open` property
    console.log(this.modal.nativeElement.open);
  }

  openModal() {
    if (this.modal) {
      // Check modal state
      console.log(this.modal.nativeElement.open);
      // Call the `show()` method
      this.modal.nativeElement.show();
    }
  }
}
