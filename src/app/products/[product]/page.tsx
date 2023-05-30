import Navbar from "@/app/components/navbar";
import { revalidateTag } from "next/cache";
import Link from "next/link";

export default async function Product({
  params,
}: {
  params: { product: string };
}) {
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.product}`,
    { cache: "no-store" }
  );
  const response = await fetchData.json();
  console.log(response);
  return (
    <div>
      <h3>Produsts Details</h3>
      <p>{response.id}</p>
      <p>{response.title}</p>
      <br />
      <p>{response.body}</p>
    </div>
  );
}
