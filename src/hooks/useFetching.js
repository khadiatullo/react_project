import { useState } from "react"

export default function useFetching(callback){
    const [isPostsLoading, setIsPostsLoading] = useState('false')
    const [error, setError] = useState('')
    
    async function fetching(){
        try {
            setIsPostsLoading(true) 
            await callback() 
        }
        catch(e) {
            setError(e.message)
        }
        finally{
            setIsPostsLoading(false)
        }
    }

    return [fetching, isPostsLoading, error]
}