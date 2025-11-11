export default async function BlogDetail({ params }) {
    const id = (await params).id
    return (
        <h1>Blog id: {id}</h1>
    );
}
