import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, SetIsPeding] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        SetIsPeding(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added")
            SetIsPeding(false)
            //history.go(-1)// goes 1 step back
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h1>Create a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type="text"
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea 
                required 
                value = {body}
                onChange={(e) => setBody(e.target.value)}/>
                <label>Blog author:</label>
                <select
                value ={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog</button>}
            </form>
        </div>
     );
}
 
export default Create;