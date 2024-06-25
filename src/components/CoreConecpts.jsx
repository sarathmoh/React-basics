import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
export default function CoreConecpts() {
  return (
    <main>
      {" "}
      <section id="core-concepts">
        <h2>core concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => (
            <CoreConcept key={item.title} {...item} />
          ))}
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
    </main>
  );
}
