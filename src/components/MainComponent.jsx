import CardComponent from "./CardComponent";

export default function MainComponent({ posts }) {
    const validPosts = [...posts]
    // console.log(validPosts);
    return (
        <>
            <main className="container mx-auto w-50 mb-5">
                {validPosts.map((validPost, id) => {
                    return <CardComponent key={id} obj={validPost} />
                })}
            </main>
        </>
    )
}