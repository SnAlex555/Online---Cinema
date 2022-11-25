export class Component extends HTMLElement {
  constructor() {
    super();
    this.state = {};
    this.props = {};
    this.isShadow = false;
  }

  get html () {
    return this.isShadow
    ? this
    : this.shadowRoot
  }

  setState(callback) {
    this.state = callback(this.state);
    if(this.isShadow) {
      this.shadowRoot.innerHTML = this.render ()
    } else {
      this.innerHTML = this.render()
    }
  }

  connectedCallback() {
    if(this.isShadow) {
      this.attachShadow ({ mode: 'open'});
      this.shadowRoot.innerHTML = this.render ()
    } else {
      this.innerHTML = this.render()
    }
  }

  this.ComponentDidMount(){

  }

  disconnectedCallback() {
    this.componentWillUnmount();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWillUpdate(name, oldValue, newValue);
    this.getAttributeNames().forEach((name) => {
      this.props[name] = this.getAttribute(name);
    });
  }

  dispatch(type, props) {
    this.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: props }));
  }

  registerEvents() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentWillUpdate() {}
  componentWillUnmount() {}
  render() {}
}