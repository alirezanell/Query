import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    return res.json();
}

function QueryExample() {
    const [isLoadData, setIsLoadData] = useState(false)
    const { data: posts, isLoading, error,refetch } =
        useQuery({ queryKey: ["posts"], queryFn: fetchPosts, enabled: isLoadData, });
    return (
        <div className="section">
            <h2>1. Intro and Setup</h2>
            <p>This is the manual version without TanStack Query.</p>

            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}

<button 
    onClick={() => setIsLoadData(true)} 
    style={{ cursor: "pointer", padding: "10px 20px" }}
>
    Load Data
</button>
<button onClick={()=> refetch()}>Refetch</button>
            {posts?.map((post) => (
                <div key={post.id} className="card">
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default QueryExample;
