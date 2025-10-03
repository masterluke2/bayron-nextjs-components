export default function Footer({ name = 'Your Name' }) {
  return (
    <footer style={{ textAlign: 'center', marginTop: '2rem', color: '#bbb' }}>
      <small>© 2025 {name}. All rights reserved.</small>
    </footer>
  );
}
