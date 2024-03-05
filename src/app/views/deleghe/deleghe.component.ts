import { Component, viewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-deleghe',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './deleghe.component.html',
  styles: ``,
})
export default class DelegheComponent {
  modalone=viewChild<ModalComponent>('modalone')

  toggleModal=()=>{
    this.modalone()?.toggleModal()
  }
}
