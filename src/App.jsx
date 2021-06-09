import Container from './layout/Container'
import Row from './layout/Row'
import Column from './layout/Column'
import Header from './layout/Header'
import Counter from './Counter'
import Family from './Family'
import FamilyMember from './FamilyMember'
import ShowHide from './ShowHide'
import InlineStyle from './InlineStyle'
import Navigation from './Routing/Navigation'
import Fetch from './rest-api/Fetch'
import Axios from './rest-api/Axios'

function App() {
  return (
    <Container>
      <Header title="Learning React" />
      <Row>
        <Column size="md-6">
          <Counter />
        </Column>
        <Column size="md-6">
          <ShowHide />
        </Column>
      </Row>
      <Row>
        <Column size="md-6">
          <Family surname="Ribeiro" >
            <FamilyMember name="Breno" />
            <FamilyMember name="Willes" />
          </Family>
        </Column>
        <Column size="md-6">
          <InlineStyle />
        </Column>
      </Row>
      <Row>
        <Navigation />
      </Row>
      <Row>
        <Column size="md-12">
          <Fetch />
        </Column>
      </Row>
      <Row>
        <Column size="md-12">
          <Axios />
        </Column>
      </Row>
      <Row>
        <Column size="md-12">
          api
        </Column>
      </Row>
      <Row>
        <Column size="md-12">
          api
        </Column>
      </Row>
    </Container>
  );
}

export default App;
