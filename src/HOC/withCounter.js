import { useState } from "react";

function withCounter(OriginComponent) {
  function NewComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prevState) => prevState + 1);
      //   setCount(count + 1);
    };

    return <OriginComponent count={count} increment={increment} />;
  }

  return NewComponent;
}

export default withCounter;
