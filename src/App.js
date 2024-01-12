import ContactCard from './ContactCard';

const data = [
  {
    id: 'sunita-abc123',
    name: 'Sunita Kumar',
    job: 'Electrical Engineer',
    email: 'sunita.kumar@acme.co',
  },
  {
    id: 'henderson-def456',
    name: 'Henderson G. Sterling II',
    job: 'Receptionist',
    email: 'henderson-the-second@acme.co',
  },
  {
    id: 'aio-ghi789',
    name: 'Aoi Kobayashi',
    job: 'President',
    email: 'kobayashi.aoi@acme.co',
  },
]

function App() {
  return (
    <ul>
      {
        data.map(({ id, name, job, email }) => (
          <ContactCard
            key={id}
            name={name}
            job={job}
            email={email}
          />
        ))
      }
    </ul>
  );
}

export default App;