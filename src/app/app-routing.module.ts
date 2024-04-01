import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProjectsComponent} from "./components/home/projects/projects.component";
import {ContactComponent} from "./components/home/contact/contact.component";
import {ExperienceComponent} from "./components/home/experience/experience.component";
import {HighlightsComponent} from "./components/home/highlights/highlights.component";
import {LoaderComponent} from "./components/general/loader/loader.component";

const routes: Routes = [

    {path: '', component: LoaderComponent},
    {path: 'home', component: HomeComponent},
    {path: 'highlights', component: HighlightsComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', pathMatch: 'full', redirectTo: '/'},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
