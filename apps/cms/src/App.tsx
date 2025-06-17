import { Button } from "@suite-poc/ui-kit";

const App = () => {
  return (
    <div>
      <h2>CMS Application</h2>
      <Button
        buttonText="Click Me"
        backgroundColor="#6200ea"
        color="#fff"
        onClick={() => alert("Button from CMS Application clicked!")}
      />
    </div>
  );
};

export default App;
