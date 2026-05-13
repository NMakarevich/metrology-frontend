import type { ErrorBoundaryProps, ErrorBoundaryState } from '@shared/ui/ErrorBoundary/types.ts';
import { Spinner } from '@shared/ui/Spinner';
import { Component, type ErrorInfo, lazy, Suspense } from 'react';

const ErrorBoundaryFallback = lazy(
  () => import('../ErrorBoundaryFallback/ErrorBoundaryFallback.tsx'),
);

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: '',
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(errorInfo.componentStack);
    console.log(error.message);
  }

  reset() {
    this.setState({ error: '', hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback={<Spinner />}>
          <ErrorBoundaryFallback message={this.state.error} onReset={this.reset} />
        </Suspense>
      );
    } else {
      return this.props.children;
    }
  }
}
