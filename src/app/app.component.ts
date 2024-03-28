import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {Meta, Title} from '@angular/platform-browser';

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
        document.body.setAttribute('data-theme', localStorage.getItem('theme') || 'dark');
        this.titleService.setTitle("Arun Varghese | Software Engineer");
        this.metaService.addTags([
            {name: 'keywords', content: 'software, engineer, developer'},
            {name: 'description', content: '#engineer #husband #traveler'},
        ]);

        AOS.init();

    }
}
