import {Component} from '@angular/core';
import {LanguageService} from "../../../services/language/language.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    constructor(public languageService: LanguageService) {
    }

    downloadResume() {
        this.languageService.translateService.get("ResumeFileName").subscribe(val => {
            window.open(window.location.href + "/../assets/resume/" + val, "_blank");
        })
    }
}
