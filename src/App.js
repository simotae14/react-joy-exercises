import React from 'react';

function ContactCard({ title, job, email }) {
  return (
    <li className="contact-card">
      <h2>{ title }</h2>
      <dl>
        <dt>Job</dt>
        <dd>{ job }</dd>
        <dt>Email</dt>
        <dd>{ email }</dd>
      </dl>
    </li>
  )
}

function App() {
  return (
    <ul>
      <ContactCard 
        title="Sunita Kumar"
        job="Electrical Engineer"
        email="sunita.kumar@acme.co"
      />
      <ContactCard 
        title="Henderson G. Sterling II"
        job="Receptionist"
        email="henderson-the-second@acme.co"
      />
      <ContactCard 
        title="Aoi Kobayashi"
        job="President"
        email="kobayashi.aoi@acme.co"
      />
    </ul>
  );
}

export default App;