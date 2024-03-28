import {Component} from '@angular/core';

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
    readonly ICON_LIST = [
        'fa-github',
        'fa-angular',
        'fa-docker',
        'fa-npm',
        'fa-java',
        'fa-js',
        'fa-css3',
        'fa-html5',
        'fa-codepen'
    ]
}
