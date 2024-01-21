import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'table-scroll-wrapper',
	templateUrl: './table-scroll-wrapper.component.html',
	styleUrls: ['table-scroll-wrapper.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TableScrollWrapperComponent {
	@Input() height: string = '300px';
	@Input() backgroundColor: string = 'white';
}
