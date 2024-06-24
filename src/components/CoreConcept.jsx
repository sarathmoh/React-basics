
 export default function CoreConcept({ title, desription, image }) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{desription}</p>
      </li>
    );
  }