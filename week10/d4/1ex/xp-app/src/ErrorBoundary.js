import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch = (error, errorInfo) => {
        console.log(error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    };

    render() {
        if (this.state.error) {
            return (
                <div className="error-message">
                    <h2>Something went wrong!</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;