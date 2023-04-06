import { Inter } from "next/font/google";
// import "@/styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
