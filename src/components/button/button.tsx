import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'tmx-button',
    styleUrl: 'tmx-button.sass',
    shadow: true
})

export class Button {

    @Prop() teste: string = 'Teste de conteúdo' 

    render(){
        return (
            <button>
                <slot>{ this.teste }</slot>
            </button>
        )
    }
}