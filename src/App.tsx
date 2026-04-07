import About from "./Widgets/About";
import Contact from "./Widgets/Contact";
import Header from "./Widgets/Header";
import Main from "./Widgets/Main";
import Project from "./Widgets/Project";
import Service from "./Widgets/Service";

export default function App() {

  return(
    <>
      <Header/>
      <Main/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
    </>
  )
}