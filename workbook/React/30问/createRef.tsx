class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
    }
    
    componentDidMount() {
        const node = this.myRef.current;
        // 你现在可以访问DOM节点或者组件实例
    }
    render() {
      return <div ref={this.myRef}>Hello world!</div>
    }
 }

 
 
 class MyComponent extends React.Component {
    componentDidMount() {
        // 你现在可以访问DOM节点或者组件实例
    }

    render() {
        return <div ref={node => this.myRef = node} /> 
 }