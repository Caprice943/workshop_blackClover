import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appMageBorder]',
  standalone: true,
})
export class MageBorderDirective {
  mageName = input.required<string>();
  private initialColor: string;

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '3px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    const color = this.getBorderColor();
    this.setBorder(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const color = this.initialColor;
    this.setBorder(color);
  }

  private setBorder(color: String) {
    this.el.nativeElement.style.borderColor = color;
  }

  private getBorderColor() {
    switch (this.mageName()) {
      case 'Asta':
        return '#f1b8f0';
      case 'Yami':
        return '#8333ff ';
      case 'Noelle':
        return '#2240ec ';
      case 'Finral':
        return '#6eec22 ';
      case 'Luck':
        return '#33c7ff ';
      case 'Vanessa':
        return '#602354';
      case 'Zora':
        return '#e82929';
      case 'Magna':
        return '#e8cb29 ';
      case 'Charmy':
        return '#f1b8f0';
      default:
        return 'darpurple';
    }
  }
}
