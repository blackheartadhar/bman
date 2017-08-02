import {Directive, OnInit, ElementRef} from '@angular/core';
declare let componentHandler: any;

@Directive({
  selector: '[mdl], [mdlUpgrade], [mdl-upgrade]'
})
export class MdlUpdateDirective implements OnInit {

  constructor(public elem: ElementRef) {}

  ngOnInit() {
    componentHandler.upgradeElements(this.elem.nativeElement);
  }
}
