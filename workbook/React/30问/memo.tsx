// import { count } from "console";
// import { useEffect } from "react";

// const MyComponent = React.memo(function MyComponent(props) {
//     //使用props渲染
//     return <div>{props.foo}</div>;
// });


// // useMomo
// const memoizedValue = React.useMemo(() => computeExpensiveValue(a, b), [a, b]);


// //useCallback
// const memoizedCallback = React.useCallback(() => {
//     doSomething(a, b);
// },[a, b]) 

// const memoizedValue = React.useMemo(() => computeExpensiveValue(a, b), [a, b]);

// handleClick() {
//     this.setState({count: this.state.count + 1});
//     this.setState({count: this.state.count + 1});
// }

// setTimeout(() => {
//     this.setState({count: this.state.count + 1});
//     this.setState({count: this.state.count + 1});
// }, 1000);


// function MyComponent() {
//     const [count, setCount] = React.useState(0);]
    
//     // 直接调用setCount，会导致无线循环
//     setCount(count + 1);
//     return <div>{count}</div>;
// }


// function MyComponent() {
//     const [count, setCount] = React.useState(0);]
    
//     useEffect(() => {
//         setCount(count + 1);
//     },[])
    
//     return <div>{count}</div>;
// }
