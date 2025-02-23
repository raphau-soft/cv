import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Directive({
  selector: '[appHoverEffect]',
  standalone: true,
})
export class HoverEffectDirective {
  private revealedArea!: HTMLElement;
  private animationFrameId: number | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.revealedArea = this.el.nativeElement.querySelector('.revealed-area');
    if (!this.revealedArea) {
      console.warn('RevealedAreaDirective: No .revealed-area found');
      return;
    }

    this.renderer.setStyle(this.revealedArea, 'will-change', 'background');
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.animationFrameId = requestAnimationFrame(() => {
      const elementRect = this.el.nativeElement.getBoundingClientRect();
      const mouseX = event.clientX - elementRect.left;
      const mouseY = event.clientY - elementRect.top;
      const elementWidth = elementRect.width;
      const elementHeight = elementRect.height;

      const gradientCenterX = (mouseX / elementWidth) * 100;
      const gradientCenterY = (mouseY / elementHeight) * 100;

      this.updateRevealedAreaBackground(gradientCenterX, gradientCenterY);
    });
  }

  @HostListener('mouseout') onMouseLeave() {
    this.resetRevealedAreaStyle();
  }

  private updateRevealedAreaBackground(x: number, y: number) {
    if (this.revealedArea) {
      this.renderer.setStyle(
        this.revealedArea,
        'background',
        `radial-gradient(circle 90px at ${x}% ${y}%, rgba(46, 71, 86, 0.1) 0%, rgba(46, 71, 86, 1) 100%)`
      );
    }
  }

  private resetRevealedAreaStyle() {
    if (this.revealedArea) {
      this.renderer.setStyle(
        this.revealedArea,
        'background',
        'rgba(46, 71, 86)'
      );
    }
  }
}
