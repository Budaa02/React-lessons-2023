// const Category = () => {
//     interface Ipurpose {
//       itemId: number;
//       purpose: string;
//     }
//     const PURPOSE_URL = "http://localhost:8081/purpose/list";
//     const [purpose, setPurpose] = useState<Ipurpose[]>([]);
//     async function fetchPurpose(url: string): Promise<void> {
//       const FETCHED_DATA = await fetch(url);
//       const FETCHED_JSON = await FETCHED_DATA.json();
//       setPurpose(FETCHED_JSON.data);
//     }
//     useEffect(() => {
//       fetchPurpose(PURPOSE_URL);
//     }, []);
//     interface Icolor {
//       itemId: number;
//       color: string;
//     }
//     const COLOR_URL = "http://localhost:8081/color/list";

//     const [color, setColor] = useState<Icolor[]>([]);
//     async function fetchRoles(url: string): Promise<void> {
//       const FETCHED_DATA = await fetch(url);
//       const FETCHED_JSON = await FETCHED_DATA.json();
//       console.log(FETCHED_JSON.data);
//       setColor(FETCHED_JSON.data);
//     }
//     useEffect(() => {
//       fetchRoles(COLOR_URL);
//     }, []);
//     interface Isize {
//       itemId: number;

//       size: string;
//     }
//     const SIZE_URL = "http://localhost:8081/sizes/list";
//     const [size, setSize] = useState<Isize[]>([]);
//     async function fetchSize(url: string) {
//       const FETCHED_DATA = await fetch(url);
//       const FETCHED_JSON = await FETCHED_DATA.json();
//       setSize(FETCHED_JSON.data);
//     }
//     useEffect(() => {
//       fetchSize(SIZE_URL);
//     }, []);
