import useFetch from "./useFetch";

function CustomHook(){
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
        <>
        {
            data && data.map( (item) => {
                return <p key={item.id}>{item.title}</p>
            }

            )
        }
        </>
 }

export default CustomHook;