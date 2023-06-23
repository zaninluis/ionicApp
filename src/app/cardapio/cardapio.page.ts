import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CardapioPage implements OnInit {

  escolha = 'salgadas';

  constructor() { }

  ngOnInit() {
  }

  alterar(evento: any){
    this.escolha = evento.detail.value;
    
  }

}
