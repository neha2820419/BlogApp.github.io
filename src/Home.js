import useFetch from './useFetch';
import BlogsList from "./BlogsList";


const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs/');
  

  return (
    <div className="content">
      <img className='photo' src='https://stackideas.cachefly.net/images/apps/2429/logo.png' width={230} height={230} alt='The Blog App'/>
      {isPending && <div> Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogsList blogs = {blogs} title= "All Blogs"/>}
     
     </div>
    
  )
}
export default Home;
