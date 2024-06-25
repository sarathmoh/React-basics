import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";

export default function TabDetails() {
  const [selectedTopic, setselectedTopic] = useState();
  function changeHandler(option) {
    setselectedTopic(option);
  }
  let tabContent = <p>PLease select an option</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>{" "}
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <main>
        <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          onSelect={() => {
            changeHandler("components");
          }}
          color={selectedTopic === "components"}
        >
          Components
        </TabButton>
        <TabButton
          onSelect={() => {
            changeHandler("jsx");
          }}
          color={selectedTopic === "jsx"}
        >
          JSX
        </TabButton>
        <TabButton
          onSelect={() => {
            changeHandler("props");
          }}
          color={selectedTopic === "props"}
        >
          Props
        </TabButton>
        <TabButton
          onSelect={() => {
            changeHandler("state");
          }}
          color={selectedTopic === "state"}
        >
          State
        </TabButton>
      </menu>
      {/* {!selectedTopic ? (
            "PLease select an option"
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>{" "}
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

      {/* {!selectedTopic && "PLease select an option"}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>{" "}
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

      {tabContent}
    </section>

    </main>
    
  );
}
