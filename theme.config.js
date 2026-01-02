const YEAR = new Date().getFullYear();

export default {
  darkMode: true,
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Basavraj Chinagundi.
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
      `}</style>
    </footer>
  ),
};
