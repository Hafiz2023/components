import Link from "next/link";
import Navbar from "../components/navbar";

export default async function Products() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await fetchData.json();
  console.log(response);

  return (
    <div>
      <Navbar />
      <br />
      <h3> Products list</h3>
<br />
<ol>
        {response.map((item: any, i: number) => {
          return (
            <li>
              <Link href={`/products/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
