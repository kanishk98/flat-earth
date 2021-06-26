import { ErrorBoundary } from "react-error-boundary";

import Editor from "./organisms/Editor";
import { StyledAppContainer } from "./styles";

function ErrorFallback({ error }: { error: Error }) {
  // TODO: This really needs better design
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <StyledAppContainer>
        <Editor />
      </StyledAppContainer>
    </ErrorBoundary>
  );
}

export default App;
