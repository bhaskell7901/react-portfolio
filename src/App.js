import Header from './components/Header';
import Bio from './components/Bio';
import ProjectList from './components/ProjectList';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Bio />
                <ProjectList />
                <ContactMe />
            </main>
            <Footer />
        </div>
    );
}

export default App;
