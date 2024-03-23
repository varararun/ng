import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HighlightsComponent} from './highlights/highlights.component';
import {BannerComponent} from './banner/banner.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ExperienceComponent} from "./experience/experience.component";

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    HighlightsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
