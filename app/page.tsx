import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello Next Js</h1>
      <Link href="/users">Users List</Link>
      <br></br>
      <Link href="/products/grocerry/dairy/milk">Milk Items</Link>
      <br></br>
      <Link href="/products/grocerry/dairy/milk?sortOrder=name&filterBy=brand">Milk Items With Query</Link>
      <ProductCard />
    </main>
  )
}
