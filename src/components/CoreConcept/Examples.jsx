import { useState } from "react";

import { EXAMPLES } from "../../data.js";
import TabButton from "../TabButton/TabButton.jsx";
import Section from "../Section.jsx";
import Tabs from "../Tabs.jsx";

export default function Examples() {
  let [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title={"Examples"} id={"examples"}>
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>
    </Section>
    // <section id="examples">
    //   <h2>Examples</h2>

    // </section>
  );
}
