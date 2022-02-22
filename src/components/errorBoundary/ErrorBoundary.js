import { Component } from "react";
import ErrorMessage from "../errorMessage/errorMessage";


class ErrorBoundary extends Component {
    state = {
        error: false
    }
    // альтернатива для componentDidCatch
    // static getDerivateStateError(error) {
    //     return {error: true};
    // }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error){
            return <ErrorMessage/>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;