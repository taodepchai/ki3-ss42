
export default function Bt2() {
  return (
    <div>
      <h1>bt2</h1>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>
    </div>
  );
}
