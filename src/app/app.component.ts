import { Component } from '@angular/core';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url = '';

  constructor(private req: RequestService) {}

  search() {
    if (this.url.length > 0) {
      console.log(this.url);
      this.req.getSite(this.url)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

}
