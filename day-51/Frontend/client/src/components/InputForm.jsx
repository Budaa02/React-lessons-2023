export default function InputForm({ isloading, setIsLoading, setData }) {
  const POST_DATA_URL = "http://localhost:8080/data";
  async function postData(data) {
    console.log(typeof data);
    console.log(typeof JSON.stringify(data));
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(POST_DATA_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
    console.log(FETCHED_DATA);
    if (FETCHED_DATA) {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      major: e.target.major.value,
    };
    setIsLoading(true);
    postData(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            placeholder="Name"
            name="name"
          />
        </label>
        <br />
        <label>
          Major:
          <input
            placeholder="Major"
            name="major"
          />
        </label>
        <br />
        <button>Submit</button>
        <br />
      </form>
    </div>
  );
}
