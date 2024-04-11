import ContactForm from "@/components/contact-form/ContactForm";
import MaxWidthWrapper from "@/components/max-width-wrapper/MaxWidthWrapper";

export default async function page() {
  return (
    <div>
      <MaxWidthWrapper className={"max-w-7xl py-8"}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">Contáctanos</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <p className="mb-4">
                Estamos aquí para ayudarte en tu camino espiritual. Si tienes
                preguntas, comentarios o deseas solicitar nuestros servicios, no
                dudes en contactarnos.
              </p>
              <p className="mb-2 font-semibold">
                ¡Te invitamos a formar parte de nuestra comunidad espiritual!
              </p>
              <div className="mb-4">
                <h2 className="font-semibold">Visítanos</h2>
                <p>Los Angeles, Ca.</p>

                <p>90015</p>
                <p>United States</p>
                <p>Suite 9003</p>
              </div>
              <div>
                <p className="font-semibold">Teléfono:</p>
                <p>+1(818) 426-3603</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>[your-email@example.com]</p>{" "}
                {/* Replace with actual email */}
              </div>
            </div>
            <div className="md:w-1/2 h-96 md:h-auto md:ml-6">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7721846805657!2d-118.27413620000002!3d34.0497145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7bd35775043%3A0xe6c582c6c9b161be!2s1605%20W%20Olympic%20Blvd%2C%20Los%20Angeles%2C%20CA%2090015!5e0!3m2!1sen!2sus!4v1712866432812!5m2!1sen!2sus"
                title="Google Maps Location"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <ContactForm />
    </div>
  );
}
