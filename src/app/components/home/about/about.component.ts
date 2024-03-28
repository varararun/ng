import {Component} from '@angular/core';
import {LanguageService} from "../../../services/language/language.service";
import {AnalyticsService} from "../../../services/analytics/analytics.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    constructor(private languageService: LanguageService, public analyticsService: AnalyticsService) {
    }

    downloadResume() {
        this.languageService.translateService.get("ResumeFileName").subscribe(val => {
            window.open(window.location.href + "/../assets/resume/" + val, "_blank");
        })
    }
}
