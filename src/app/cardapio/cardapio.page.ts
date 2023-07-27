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
  carrinho: ItemCardapio[] = [];

  constructor() { }

  ngOnInit() {
  }

  alterar(evento: any) {
    this.escolha = evento.detail.value;
  }

  adicionarAoCarrinho(nomeProduto: string) {
    const tamanhoSelecionado = this.escolha;

    const item: ItemCardapio = {
      nome: nomeProduto,
      tamanho: tamanhoSelecionado
    };

    this.carrinho.push(item);
    console.log("testado")
  }

  exibirCarrinho() {
    let mensagem = 'Itens no carrinho:\n';

    if (this.carrinho.length === 0) {
      mensagem += 'Nenhum item no carrinho.';
    } else {
      this.carrinho.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.nome} - Tamanho: ${item.tamanho}\n`;
      });
    }

    alert(mensagem);
    console.log("loging")
  }
}

// Definindo a interface ItemCardapio dentro do mesmo componente
interface ItemCardapio {
  nome: string;
  tamanho: string;
}
