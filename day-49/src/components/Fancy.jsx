export default function Fancy() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {isFancy}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use Fancy styling
      </label>
    </div>
  );
}
