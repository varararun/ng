import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HighlightsComponent} from './highlights.component';

describe('HighlightsComponent', () => {
    let component: HighlightsComponent;
    let fixture: ComponentFixture<HighlightsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HighlightsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HighlightsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
