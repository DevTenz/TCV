export default function Tag(props) {
  return (
    <li className="list-disc py-2">
      <p className="font-semibold">&lt;{props.name}&gt;</p>
      <p>{props.description}</p>
      <code className="bg-slate-300 block text-center m-1">
        &lt;{props.name}&gt;...&lt;/{props.name}&gt;
      </code>
    </li>
  );
}
