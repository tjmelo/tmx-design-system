import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'tmx-button',
    styleUrl: 'button.sass',
    shadow: true
})

export class Button {

    /**
     * Defining Buttons' label
     */
    @Prop() label: string = 'Button'

    /**
     * Defining a Buttons's variations
     */
    @Prop() variation: string;


    render(){
        return (
            <button class={this.variation}>
                <slot>{ this.label }</slot>
            </button>
        )
    }
}