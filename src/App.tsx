import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {

  const PersonName = {
    firstName: 'Arun',
    lastName: 'Jojo'
  }
  const nameList = [
    {
      firstName: 'Arun',
      lastName: 'Jojo'
    },
    {
      firstName: 'Alphy',
      lastName: 'Jojo'
    },
    {
      firstName: 'Abel',
      lastName: 'Jojo'
    }
  ]
  return (
    <div className="App">
      String, Number, Boolean type
      <Greet name='Arun jojo' count={10} isLogged={false}/>
      Object type
      <Person name = {PersonName} />
      Object of Array type
      <PersonList names={nameList}/>

      <hr />
      Custom Props type
      <Status status='loading'/>
      Child type
      <Heading >
      Placeholder text
      </Heading>
      ReactNode type
      <Oscar >
        <Heading>
          Oscar goes to Arun Jojo
        </Heading>
      </Oscar>
      Optional (?) type
      <Greet name='Arun jojo' isLogged={true}/>

      <hr />
      Event Props type
      <Button handleClick = {(event, id)=> console.log(event, id)} />
      <Input handleChange= {(event)=> console.log(event)} value=''/>

      <hr />
      Style Props type
      <Container styles={{border: '1px solid black', padding:'1rem', display:'flex',  justifyContent:'center'}}/>
    </div>
  );
}

export default App;
