class ErrorBoundary extends React.Copoment {
    constructor(props) {
        super(props);
        this.state = { hasError: false};
    }
    
    static getDerivedStateFromError(error) {
        // 当发生错误时，更新状态使下一次渲染显示备用UI
        return { hasError: true };
    }
    compomentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        logErrorToMyService(error, errorInfo);
    }   

    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
    
}

// 使用
<ErrorBoundary>
    <MyWidget />
</ErrorBoundary>