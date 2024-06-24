import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=>(<CoreConcept key={item.title} {...item}/>))}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              desription={CORE_CONCEPTS[1].desription}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              desription={CORE_CONCEPTS[2].desription}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              desription={CORE_CONCEPTS[3].desription}
              image={CORE_CONCEPTS[3].image}
            /> */}
          </ul>
        </section>
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
    </div>
  );
}

export default App;
