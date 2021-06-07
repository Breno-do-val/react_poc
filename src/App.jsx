import Header from './header/Header'
import Counter from './counter/Counter'
import Family from './Family/Family'
import FamilyMember from './Family/FamilyMember/FamilyMember'

function App() {
  return (
    <div className="App">
      <Header title="Learning React"/>
      <p>Hello World</p>
      <Counter />
      <Family surname="Ribeiro" >
        <FamilyMember name="Breno" />
        <FamilyMember name="Willes" />
      </Family>
    </div>
  );
}

export default App;
