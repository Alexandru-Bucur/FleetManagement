import { Component, ElementRef, effect, signal, viewChild } from '@angular/core';
import { Modal } from 'bootstrap-italia'
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styles: ``
})
export class ModalComponent {
  modal=viewChild<ElementRef>('mymodal')
  bootstrapModal= signal<Modal|null>(null)
  shown= signal(false)

  constructor(){
    effect(()=>{
      if(this.shown())
        this.bootstrapModal()!.show()
    })
  }

  ngAfterViewInit(){
    const bootstrapModal=new Modal(this.modal()!.nativeElement,{backdrop: false, keyboard: true, focus: true});
    this.bootstrapModal.set(bootstrapModal)
    fromEvent(this.modal()!.nativeElement, 'hide.bs.modal')
    .subscribe(()=>{
      this.toggleModal();
    })
  }

  toggleModal=()=>{
    this.shown.set(!this.shown())
  }
}
