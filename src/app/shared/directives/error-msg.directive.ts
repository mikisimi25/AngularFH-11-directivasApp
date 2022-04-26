import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requirido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color( valor: string ) {
    this._color = valor;
    this.setColor()
  }

  @Input() set mensaje( valor: string ) {
    this._mensaje = valor;
    this.setMensaje()
  }

  @Input() set valido( valor: boolean ) {
    if( valor ) {
      this.htmlElement.nativeElement.classList.add('hidden')
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden')
    }
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setEstilo()
    this.setColor()
    this.setMensaje()
  }

  ngOnChanges( changes: SimpleChanges ): void {

  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    console.log(this._mensaje);
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

}
