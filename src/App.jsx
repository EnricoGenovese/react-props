import posts from "./data/posts";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"


function App() {
  const postsData = [...posts]
  // console.log(postsData)
  return (
    <>
      <HeaderComponent />
      <MainComponent posts={postsData} />
      <FooterComponent />
    </>
  )
}

export default App;
