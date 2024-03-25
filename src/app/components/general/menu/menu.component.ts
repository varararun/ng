import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations'
import {FormControl} from '@angular/forms';
import {LanguageService} from 'src/app/services/language/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger(
      'OutAnimation',
      [
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('.2s ease-out',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class MenuComponent implements OnInit {

  menuOpen = false;
  languageFormControl: FormControl= new FormControl();
  fileName = "";

  constructor(
    private router: Router,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.languageFormControl.setValue(this.languageService.DEFAULT)
  }

  navigate(item) {
      if(item.label === 'Resume') {
        this.downloadResume();
      }
      this.router.navigate([item.link]);
  }

  downloadResume(){
    this.languageService.translateService.get("ResumeFileName").subscribe(val => {
      this.fileName = val
      window.open(window.location.href + "/../assets/resume/" + this.fileName, "_blank");
    })
  }
}
