import React from "react";

function withErrorBoundary(WrappedComponent) {
  return class ErrorBoundary extends React.Component {
    state = { error: null };

    static displayName = "ErrorBoundary for " + WrappedComponent.name;

    static getDerivedStateFromError(error) {
      return { error };
    }
    componentDidCatch(error, info) {
      console.warn("Oops", error, info);
    }

    render() {
      const { error } = this.state;
      if (error) return <div>Error: {error.message}</div>;
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withErrorBoundary;
