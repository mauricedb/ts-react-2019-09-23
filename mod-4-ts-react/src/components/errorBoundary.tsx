import React, { ComponentType, ErrorInfo } from "react";

type State = {
  error: Error | null;
};

function withErrorBoundary<T>(WrappedComponent: ComponentType<T>) {
  return class ErrorBoundary extends React.Component<T, State> {
    constructor(props: T) {
      super(props);
      this.state = { error: null };
    }

    static displayName = "ErrorBoundary for " + WrappedComponent.name;

    static getDerivedStateFromError(error: Error) {
      return { error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
      console.warn("Oops", error, info);
    }

    render() {
      const { error } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withErrorBoundary;
