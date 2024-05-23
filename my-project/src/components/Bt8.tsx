import "bootstrap/dist/css/bootstrap.min.css";

export default function Bt8() {
  return (
    <div>
      <h1>bt8</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" >
            Active
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" >
            Link
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" >
            Link
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link disabled"
            tabIndex={-1}
            aria-disabled="true"
          >
            Disabled
          </button>
        </li>
      </ul>
    </div>
  );
}
