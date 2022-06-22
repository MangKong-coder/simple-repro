import "./index.css";

function A(props) {
  return (
    <a {...props} href="/a">Example</a>
  );
}

function B(props) {
  return (
    <A {...props} href="/b">Example</A>
  );
}

export default function Page() {
  return <B href="/c">C</B>
}
