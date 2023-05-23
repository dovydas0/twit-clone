import Post from "./Post"

const MainFeed = () => {
    const dummy_posts = [
        {
            author: "dummy user",
            content: "Hello this is my first post",
            likes: 3,
        },
        {
            author: "dummy user 2",
            content: "Hello this is my third post",
            likes: 26,
        },
    ]
  
    return (
        <div>
            {
                dummy_posts.map((post) => (
                    <Post 
                    key={post.content}
                    author={post.author}
                    content={post.content}
                    likes={post.likes}
                    />
                ))
            }
        </div>
    )
}

export default MainFeed