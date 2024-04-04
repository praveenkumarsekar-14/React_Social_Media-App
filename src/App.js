import { Route, Routes} from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import {DataProvider} from './context/dataContext';



function App() {

  // const [posts, setPosts] = useState([]);
  // const [search,setSearch]= useState('');
  // const [searchResults, setSearchResults]= useState([]);
  // const [postTitle, setPostTitle] = useState('');
  // const [postBody, SetPostBody] = useState('');
  // const [editTitle, setEditTitle] = useState('');
  // const [editBody, SetEditBody] = useState('');
  // const navigate = useNavigate();
  // const {width} = useWindowSize();
  // const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  // useEffect(()=>{
    
  //   setPosts(data);
  // },[data]);
  // console.log(posts);
  // useEffect(()=> {
  //     const fetchPosts = async () => {
  //       try{
  //         const response = await api.get('/posts');
  //         setPosts(response.data);
  //       }catch(err){
  //         if(err.response){
  //           //Not in the 200 response range 
  //           console.log(err.response.data);
  //           console.log(err.response.status);
  //           console.log(err.response.headers);
  //         }else{
  //           console.log(`Error : ${err.message}`);
  //         }
  //       }
  //     }
  //     fetchPosts();
  // },[])


  // useEffect(()=>{
  //   const filteredResults = posts.filter((post) => 
  //     ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
  //     ((post.title).toLowerCase()).includes(search.toLowerCase()))
  //   console.log(filteredResults);

  //   setSearchResults(filteredResults.reverse());
  // },[posts, search]);
  // console.log(searchResults);
  // const handleSubmit = async (e)=> {
  //     e.preventDefault();
  //     const id= posts.length ? posts[posts.length-1].id+1 : 1;
  //     const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  //     const newPost= {id, title: postTitle, datetime, body: postBody};
  //     try {
  //        const response = await api.post('/posts', newPost);
  //     const allPosts = [...posts, response.data];
  //     setPosts(allPosts);
  //     setPostTitle('');
  //     SetPostBody('');
  //     navigate('/');
  //     }catch(err){
  //         if(err.response){
  //           //Not in the 200 response range 
  //           console.log(err.response.data);
  //           console.log(err.response.status);
  //           console.log(err.response.headers);
  //         }else{
  //           console.log(`Error : ${err.message}`);
  //         }
  //        }
  // }
  //   const handleEdit = async(id) => {
  //     const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  //     const updatePost= {id, title: editTitle, datetime, body: editBody};

  //     try{
  //       const response = await api.put(`/posts/${id}`,updatePost);
  //       setPosts(posts.map(post=>post.id===id ? {...response.data}:post));
  //     setEditTitle('');
  //     SetEditBody('');
  //     navigate('/');
  //     }catch(err)
  //   {
  //     console.log(`Error: ${err.message}`);
  //   }
  //   }
  // const handledelete = async (id)=>{
  //   try 
  //   {
  //     await api.delete(`posts/${id}`);
  //      const postsList = posts.filter(post=> post.id !== id)
  //       setPosts(postsList);
  //       navigate('/');
  //   }catch(err)
  //   {
  //     console.log(`Error: ${err.message}`);
  //   }
   
  // }
  return (
    <div className="App">
      <DataProvider>
        <Header title="Praveen Social Media"/>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='post'>
              <Route index element={<NewPost/>} />
              <Route path=':id' element={<PostPage />} />
            </Route>
            <Route path='/edit/:id' element ={ <EditPost />} />
            <Route path='about' element={<About />} /> 
            <Route path='*' element={ <Missing />} />           
           </Routes>
            <Footer />
       </DataProvider>
      </div>
  );
}

export default App;
