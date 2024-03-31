import { useEffect, useState } from "react";
import Domains from "./Domains";
import Records from "./Records";

function App() {
  const [element, setElement] = useState("domain");
  const [selectedDomainId, setSelectedDomainId] = useState(null);

  useEffect(() => {
    if (selectedDomainId !== null) setElement("records");
  }, [selectedDomainId]);

  return (
    <div className="flex flex-col space-y-8 px-6 py-8">
      {element === "domain" ? (
        <Domains setSelectedDomainId={setSelectedDomainId} />
      ) : (
        element === "records" &&
        selectedDomainId !== null && <Records domainId={selectedDomainId} />
      )}
    </div>
  );
}

export default App;
