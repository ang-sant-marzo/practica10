import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoadFade]'
})
export class LoadFadeDirective {

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.renderer.addClass(this.elementRef.nativeElement, 'show');
    }, 100)
  }

}
