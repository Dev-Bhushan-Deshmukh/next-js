import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
export default function Home() {
  return (
  <div>home page
<Header/>

<Link href='/about'>about</Link>
  </div>
  );
}
