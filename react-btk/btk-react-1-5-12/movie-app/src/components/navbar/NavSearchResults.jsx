export default function NavSearchResults({ totalResults }) {
  return (
    <div className="col-4 text-end">
      <strong>{totalResults}</strong> kayıt bulundu.
    </div>
  );
}