export default function Checkbox({
  name,
  label,
  checked,
  onChange,
  className,
  children,
}) {
  return (
    <label className={`checkbox ${className}  `}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      {children ? (
        children
      ) : (
        <span className="wihtepace-pre-wrap"> {label} </span>
      )}
    </label>
  );
}
