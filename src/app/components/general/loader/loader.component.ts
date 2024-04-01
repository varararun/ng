import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    hide = false;
    show = false;
    constructor(private router: Router) {
    }
    ngOnInit() {
        setTimeout(() => {
            this.show = true;
        }, 500);

        setTimeout(() => {
            this.router.navigate(['home']);
        }, 3000);
    }
}
