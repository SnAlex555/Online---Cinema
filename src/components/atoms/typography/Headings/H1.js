import { Component } from '../../../../core'

export class H1 extends Component {
    
    componentDidMount() {
        this.attachShadow({ mode: 'open'})
    }

    render() {
         return `
         <div style="display:flex">
         <slot name="header"></slot>
         <slot></slot>
         </div)
         `;
    }
}

customElements.define('it-H1', H1);