import { useState, useEffect } from "react";
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import laravelAxios from '@/lib/laravelAxios'
import { useRouter } from "next/router";


const Posts = () => {

  const [posts, setPosts] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await laravelAxios.get('/api/posts');
        console.log(response.data);
        setPosts(response.data.posts);
      } catch(err) {
        console.log(err);
      }
    }

    fetchPosts();
  },[])
  


  return (
    <AppLayout sx={{textAlign: 'center'}}
        header={
          <h3>
                Posts
          </h3>
        }>
        <Head>
            <title>Laravel - Answer</title>
        </Head>
      <h3>一覧</h3>

      <div>
        {posts.map((post) => (
          <div>
            <button onClick={() => router.push(`/post/${post.id}`)}>{post.explanation}</button>
          </div>
        ))}
      </div>
    </AppLayout>
  )
}

export default Posts;