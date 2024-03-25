import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  readonly DEFAULT = "en";

  constructor(
    public translateService: TranslateService
  ) {}

}
