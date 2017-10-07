import { Component } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
import { environment } from '../environments/environment.prod'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[TranslateService]
})
export class AppComponent {
  title = 'app';

  constructor( private translateService: TranslateService,){
  	translateService.setDefaultLang(environment.language);
  	translateService.use(environment.language);
  }
}
