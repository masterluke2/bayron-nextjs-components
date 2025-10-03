export default function Header({ name = 'Your Name' }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <h1 style={{ fontSize: '2.5rem', margin: 0 }}>My Profile</h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.9, marginTop: 4 }}>{name}</p>
    </header>
  );
}
