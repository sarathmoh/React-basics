export default function TabButton({ children,onSelect,color }) {
  return (
    <li>
      <button className={color ? 'active' : ''} onClick={onSelect}>{children}</button>
    </li>
  );
}
