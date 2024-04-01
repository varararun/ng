import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    animations: [
        trigger(
            'HideAnimation',
            [
                transition(
                    ':enter',
                    [
                        style({opacity: 0}),
                        animate('.2s ease-in',
                        style({opacity: 1}))
                    ]
                ),
                transition(
                ':leave',
                [
                    style({opacity: 1}),
                    animate('1s ease-out',
                        style({opacity: 0}))
                ]
            )
            ]
        )
    ]
})
export class LoaderComponent implements OnInit {

    constructor(private router: Router) {
    }
    ngOnInit() {
        setTimeout(() => {
            this.router.navigate(['home']);
        }, 3000);
    }
}
