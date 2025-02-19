import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]',
  standalone: true,
})
export class HoverEffectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseleave') onMouseLeave() {
    this.resetRevealedAreaStyle();
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const elementRect = this.el.nativeElement.getBoundingClientRect();
    const elementWidth = this.el.nativeElement.offsetWidth;
    const elementHeight = this.el.nativeElement.offsetHeight;

    const mouseX = event.clientX - elementRect.left;
    const mouseY = event.clientY - elementRect.top;

    const gradientCenterX = (mouseX / elementWidth) * 100;
    const gradientCenterY = (mouseY / elementHeight) * 100;

    this.updateRevealedAreaBackground(gradientCenterX, gradientCenterY);
  }

  private updateRevealedAreaBackground(x: number, y: number) {
    const revealedArea = this.el.nativeElement.querySelector('.revealed-area');

    if (revealedArea) {
      this.renderer.setStyle(
        revealedArea,
        'background',
        `radial-gradient(
        circle 60px at ${x}% ${y}%,
        transparent 100%,
        rgba(0, 0, 0, 1)
      )`
      );
    }
  }

  private resetRevealedAreaStyle() {
    const revealedArea = this.el.nativeElement.querySelector('.revealed-area');

    if (revealedArea) {
      this.renderer.setStyle(revealedArea, 'background', 'black');
    }
  }
}
