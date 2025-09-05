export default function Header({ name = 'Rain Secjadas' }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <h1>My Profile</h1>
      <h2>{name}</h2>
    </header>
  );
}