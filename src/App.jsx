import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  let [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => handleClick("components")}
              isSelected={selectedTopic == "components"}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => handleClick("jsx")}
              isSelected={selectedTopic == "jsx"}
            >
              Jsx
            </TabButton>
            <TabButton
              onClick={() => handleClick("props")}
              isSelected={selectedTopic == "props"}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => handleClick("state")}
              isSelected={selectedTopic == "state"}
            >
              State
            </TabButton>
          </menu>

          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a topic.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
