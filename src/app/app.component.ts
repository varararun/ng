import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {Meta, Title} from '@angular/platform-browser';
import * as config from "../environments/environment";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Arun Varghese';

    constructor(
        private titleService: Title,
        private metaService: Meta
    ) {
    }

    ngOnInit(): void {
        document.body.setAttribute('data-theme', localStorage.getItem('theme') || config.environment.theme);
        this.titleService.setTitle("Arun Varghese | Software Engineer");
        this.metaService.addTag({name: 'appVersion', id: config.environment.version});

        AOS.init();

    }
}
