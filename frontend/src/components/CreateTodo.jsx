import { useState } from "react";

export function CreateTodo(props) {
    

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return <div>
        <input id="title"
            style={{
                padding: 10,
            margin: 10
            }}
            type= "text"
            placeholder="Title"
            onChange={
                (e) => {
                    setTitle(e.target.value);
                }
            }         
           >
        </input>

        <br></br>

                <input id="description"
            style={{
                padding: 10,
            margin: 10
            }}
            type= "text"
            placeholder="Description"
            onChange={
                (e) => {
                    setDescription(e.target.value);
                }
            }         
           >
        </input>
        

        <button style={{
            padding: 10,
            margin: 10
        }}
            onClick={
                fetch("localhost:5000/todo",{
                    method: "POST",
                    body: JSON.stringify(
                        {
                            title: title,
                            description: description
                        }
                    ),
                    headers: {
                    "Content-type": "application/json"
                }
                })
                    .then(async (res) => {
                     const json = await res.json();
                        alert("Todo created");
                    
                })
            }
        
        >
            Add todo
        </button>

         <br></br>

    </div>
}