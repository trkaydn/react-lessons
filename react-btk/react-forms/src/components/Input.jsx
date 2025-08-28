export default function Input({type, name, labelText, id, error, ...props }) {
    
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {labelText}
            </label>
            <input type={type} className="form-control" id={id} name={name} {...props} />
            {error && <div className="invalid-feedback d-block">{error}</div>}
        </div>
    );
}