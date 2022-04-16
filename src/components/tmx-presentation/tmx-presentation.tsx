import { Component, h } from '@stencil/core';

@Component({
  tag: 'tmx-presentation',
  styleUrl: 'tmx-presentation.sass',
  shadow: true,
})
export class TmxPresentation {

  render() {
    return (
      <section class='container'>
          
          <tmx-button 
            label='Primary' 
            variation='primary'
          ></tmx-button>

          <tmx-button 
            label='Success'
            variation='success'
          >
          </tmx-button>

          <tmx-button 
            label='Danger'
            variation='danger'
          >
          </tmx-button>

          <tmx-button 
            label='Warning'
            variation='warning'
          >
          </tmx-button>

      </section>
    );
  }

}
