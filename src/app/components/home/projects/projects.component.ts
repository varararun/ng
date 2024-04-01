import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../../services/language/language.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [
        trigger(
            'exit-animation',
            [
                transition(
                    ':leave',
                    [
                        style({opacity: 1}),
                        animate('.5s ease', style({opacity: 0, transform: 'translateY(100px)'}))
                    ]
                )
            ]
        )
    ]
})
export class ProjectsComponent implements OnInit {
    filtered = [];
    all = [];
    selectedTag = 'featured';

    constructor(
        private languageService: LanguageService
    ) {
    }

    ngOnInit() {
        this.languageService.translateService.get("Projects.Projects").subscribe(val => {
            this.all = val;
            this.filterProjects(this.selectedTag);
        });
    }

    filterProjects(tag: string) {
        this.selectedTag = tag;
        this.filtered = this.all.filter((project) => {
            const tags: string[] = project['Tags'];
            if (!this.selectedTag) {
                return true;
            }
            return tags ? tags.includes(this.selectedTag) : false
        });
    }
}
