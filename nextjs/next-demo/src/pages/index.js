import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h2>Welcome to NextJs</h2>
      <Link href="/about">About Page</Link>
    </div>
  );
}
