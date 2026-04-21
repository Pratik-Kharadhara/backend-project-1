export default function PostCreate(){
    return (
        <section className="post-create">
                <h1>Create Post!</h1>

                <form >
                    <input type="file" name="image" accept="image/*" />
                    <input type="text" name="caption" required />
                    <button className="gen-post-btn">Generate Post</button>

                </form>
        </section>
    )
}