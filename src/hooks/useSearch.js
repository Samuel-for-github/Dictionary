// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

const useSearch = (search)=>{


    const [data, setData] = useState([])

useEffect(()=>{  let url = `https://api.api-ninjas.com/v1/dictionary?word=${search}`
fetch(url, {headers: {'X-Api-Key': 'PuaznLQ8l9JT4CzArvb58QbEgH9tV5WhNp0XnOgz'}})
    .then((res)=> res.json())
    .then((res)=> setData(res))
    
}, [search])
return data

}

export default useSearch
