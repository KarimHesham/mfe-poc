import { Button } from "@suite-poc/ui-kit";

const App = () => {
  return (
    <div>
      <h2>CRM Application</h2>
      <Button
        buttonText="Click Me"
        backgroundColor="#f44336"
        color="#ffffff"
        onClick={() => alert("Button from CRM Application clicked!")}
      />
    </div>
  );
};

export default App;
