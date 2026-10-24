import { contact } from '../content.js';

// No backend: opens the visitor's email client. Swap for Formspree / Netlify Forms if desired.
export default function ContactForm({ full = false }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = [f.get('first') || f.get('name'), f.get('last')].filter(Boolean).join(' ');
    const lines = [f.get('message'), '', name, f.get('email'), f.get('phone')].filter((x) => x !== null);
    window.location.href =
      `mailto:${contact.email}?subject=${encodeURIComponent(`Inquiry from ${name}`)}` +
      `&body=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      {full ? (
        <div className="form__row">
          <label>First name<input name="first" type="text" autoComplete="given-name" required /></label>
          <label>Last name<input name="last" type="text" autoComplete="family-name" /></label>
        </div>
      ) : (
        <label>Name<input name="name" type="text" autoComplete="name" required /></label>
      )}
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      {full && <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>}
      <label>How can we help?<textarea name="message" rows="4" required /></label>
      <button type="submit" className="btn btn--dark">Send message</button>
    </form>
  );
}
