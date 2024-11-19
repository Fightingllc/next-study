function withExtraProp(Component) {
    return function (props) {
        return <Component {...props} extraProp="Extra Prop" />;
    };
}