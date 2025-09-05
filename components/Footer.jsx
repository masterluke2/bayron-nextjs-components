export default function Footer({ name = 'Rain Secjadas' }) {
  return (
    <footer style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
      <small>© 2025 {name}. All rights reserved.</small>  {/* Matches screenshot year */}
    </footer>
  );
}