export default function Radio({ label, ...rest }) {
  return (
    <label type="radio" className="radio">
      <input className="sr-only" type="radio" {...rest} />
      {label}
    </label>
  );
}
