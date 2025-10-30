
import styles from "./App.module.css";
import { Navbar } from "./componets/NavBar/NavBar";
import { Contact } from "./componets/Contact/Contact";
import { Avatar } from "./componets/Avatar/Avatar";
import { About } from "./componets/About/About";
import { Skills } from "./componets/Skills/Skills";
import { Projects } from "./componets/Projects/Projects";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
