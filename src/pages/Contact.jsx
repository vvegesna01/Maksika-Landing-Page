import { PageHero } from '../components/Bits.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { contact } from '../content.js';

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact us"
        intro="For questions or to explore service pricing, email us or fill in the form and we will get back to you as soon as possible."
        crumbs={[{ label: 'Contact' }]}
      />
      <section className="section">
        <div className="container split">
          <div>
            <h2>Hyderabad office</h2>
            <address className="address--dark">
              {contact.address.map((l) => (
                <span key={l}>{l}</span>
              ))}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </address>
          </div>
          <ContactForm full />
        </div>
      </section>
    </>
  );
}
