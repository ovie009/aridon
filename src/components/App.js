import '../CSS/App.css';
import LeadSection from './LeadSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

function App() {
  return (
    <main className="App">
      <LeadSection></LeadSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <AboutSection></AboutSection>
      <Footer></Footer>
    </main>
  );
}

export default App;
