import BlogsPage from "@/src/views/blogs/Blogs";

export default async function Blogs(props: any) {
  
  const params = await props.searchParams
  const searchParams = new URLSearchParams(params)
  const ids = searchParams.get('category')

    return (
      <BlogsPage ids={ids?.split(',').map(id => +id) || []} />
  );
}
