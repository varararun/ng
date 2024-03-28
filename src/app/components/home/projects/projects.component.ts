import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../../services/language/language.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [
        trigger(
            'ExitAnimation',
            [
                transition(
                    ':leave',
                    [
                        style({opacity: 1 }),
                        animate('.5s ease', style({opacity: 0, transform: 'translateY(100px)'}))
                    ]
                )
            ]
        )
    ]
})
export class ProjectsComponent implements OnInit{
    personal = [];
    allPersonal = [];
    featured = [];
    allFeatured = [];

    constructor(
        private languageService: LanguageService
    ) {
    }

    ngOnInit() {
        this.languageService.translateService.get("FeatureProjects.Projects").subscribe(val => {
            this.allFeatured = val;
            this.featured = this.allFeatured.slice(0, 3);
        });

        this.languageService.translateService.get("PersonalProjects.Projects").subscribe(val => {
            this.allPersonal = val;
            this.personal = this.allPersonal.slice(0, 3);
        });
    }

    toggleFeatured() {
        this.featured = this.featured.length < this.allFeatured.length ? this.allFeatured : this.allFeatured.slice(0, 3);
    }

    togglePersonal() {
        this.personal = this.personal.length < this.allPersonal.length ? this.allPersonal : this.allPersonal.slice(0, 3);
    }
}
