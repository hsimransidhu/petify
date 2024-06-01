
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
function App() {

  const listItems = [{
    name: "",
    id: 1001,
    image: "https://plus.unsplash.com/premium_photo-1683121435740-e290468c71c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "",
    id: 1002,
    image: " https://plus.unsplash.com/premium_photo-1664371675057-83f34f7596a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0Y2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "",
    id: 1003,
    image: " https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fHww",
  },
  {
    name: "",
    id: 1004,
    image: "https://plus.unsplash.com/premium_photo-1665952050940-649e89e51d81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHB1cHxlbnwwfHwwfHx8MA%3D%3D",
  }

  
  ]
  return (

    <>
      <Header />
      <Banner />
      <Gallery listItems={listItems} />
      <Footer />
    </>
  )

}

export default App;
