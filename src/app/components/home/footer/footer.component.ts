import {Component, ElementRef, HostListener, inject, OnInit} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations'
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
}
