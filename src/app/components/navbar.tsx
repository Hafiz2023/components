import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <ul className="flex bg-gray-400 px-3">
        <li className="mx-3 underline">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-3 underline">
          <Link href="/about">About</Link>
        </li>
        <li className="mx-3 underline">
          <Link href="/products">Products</Link>
        </li>
      </ul>
      <br />
    </>
  );
}
