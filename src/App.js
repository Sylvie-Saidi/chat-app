import React from 'react';
import Contact from './components/Contact'
import ContactList from "./components/ContactList"

const avatar = {
  name: "Ahri",
  image: "https://loltracker.com/images/easyblog_articles/6880/b2ap3_large_Ahri-1.jpg",
  status:true,
}
const users = [
  {
    name: 'Robert Reyes',
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
    status: false
  },
  {
    name: 'Nellie Caldwell',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    status: true
  },
  {
    name: 'Vernon Mason',
    image: 'https://randomuser.me/api/portraits/men/84.jpg',
    status: true
  },
  {
    name: 'Erica Hunt',
    image: 'https://randomuser.me/api/portraits/women/87.jpg',
    status: false
  },
  {
    name: 'Juanita Phillips',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    status: true
  }
];
const status = () => status? "online" : "offline";

function App() {
  return (
    <div className="App">
     <Contact{...avatar}/>
    {users.map(user =>(
      <ContactList name={user.name} image={user.image} status={user.status} />
    ))}

    </div>
  );
}

export default App;
