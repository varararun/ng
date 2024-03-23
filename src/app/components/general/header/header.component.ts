import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations'
import {FormControl} from '@angular/forms';
import {LanguageService} from 'src/app/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger("animateMenu",[
      transition(":enter",[
        query("*", [
          style({opacity: 0, transform: "translateY(-50%)"}),
          stagger(50,[
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({opacity: 1, transform: "none"}))
          ])
        ])
      ])
    ])
  ]
})



export class HeaderComponent implements OnInit {

  responsiveMenuVisible: Boolean = false;
  pageYPosition: number;
  languageFormControl: FormControl= new FormControl();
  fileName: string = "";

  constructor(
    private router: Router,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.languageFormControl.setValue(this.languageService.DEFAULT)
  }

  navigate(link: string) {
      this.router.navigate([link]);
  }

  scroll(el) {
    if(document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({behavior: 'smooth'});
    } else{
      this.router.navigate(['/home']).then(()=> document.getElementById(el).scrollIntoView({behavior: 'smooth'}) );
    }
    this.responsiveMenuVisible=false;
  }

  downloadResume(){
    this.languageService.translateService.get("ResumeFileName").subscribe(val => {
      this.fileName = val
      window.open(window.location.href + "/../assets/resume/" + this.fileName, "_blank");
    })

  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
    getScrollPosition(event) {
        this.pageYPosition=window.pageYOffset
    }
}
