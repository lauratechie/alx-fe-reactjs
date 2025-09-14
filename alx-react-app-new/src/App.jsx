import Counter from './components/Counter';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />

      {/* Example usage of UserProfile with props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="John" 
        age="30" 
        bio="Enjoys coding and traveling" 
      />

      {/* Add the Counter component here */}
      <Counter />

      <Footer />
    </div>
  );
}

export default App;
