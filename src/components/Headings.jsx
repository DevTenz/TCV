export default function Heading(props) {
  return (
    <p>
      <span className="font-bold">
        <u>{props.heading}</u> :
      </span>
      {props.headingDescription}
    </p>
  );
}
