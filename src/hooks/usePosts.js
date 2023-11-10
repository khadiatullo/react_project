import { useMemo } from "react";

export function useSortedPosts(posts, sort){
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
          return posts
        }
      }, [sort, posts])

    return sortedPosts
}

export function usePost(posts, sort, query){
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPost = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])

    return sortedAndSearchedPost
}

