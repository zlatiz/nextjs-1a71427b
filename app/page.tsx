import React from "react";
import Image from "next/image";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import Input from "../components/ui/input";

const IMAGES: string[] = [
  "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg"
];

export default function HomePage() {
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const heroImage = images[1] ?? images[0];

  return (
    <div className="space-y-12 py-10">
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5">
          <div className="rounded-lg p-6 bg-white border">
            <h1 className="text-3xl md:text-4xl font-semibold">Garber Bros Inc</h1>
            <p className="mt-4 text-gray-700">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
            <div className="mt-6">
              <Button href="/vessels">View Our Fleet of Vessels</Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="aspect-video rounded-lg overflow-hidden border bg-gray-50">
            {heroImage && (
              (() => {
                const safeSrc = encodeURI(heroImage);
                return (
                  <Image src={safeSrc} alt="Hero - Garber Bros fleet" width={1200} height={700} className="object-cover w-full h-full" unoptimized />
                );
              })()
            )}
          </div>
          <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
            <a href="javascript:previousSlide6347994()">Prev</a>
            <div className="text-gray-500">Image slideshow</div>
            <a href="javascript:nextSlide6347994()">Next</a>
          </div>
        </div>
      </section>

      {/* Feature Tiles */}
      <section aria-labelledby="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex flex-col h-full">
            <div className="aspect-[4/3] rounded overflow-hidden bg-gray-100 border">
              {(() => {
                const src = encodeURI(images[1]);
                return <Image src={src} alt="Our Vessels" width={800} height={600} className="object-cover" unoptimized />;
              })()}
            </div>
            <div className="mt-4 flex-1 flex flex-col">
              <h3 className="text-lg font-medium">Our Vessels</h3>
              <p className="mt-2 text-gray-700">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
              <div className="mt-4">
                <a href="/vessels" className="text-sm text-blue-700">View Our Vessels »</a>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col h-full">
            <div className="aspect-[4/3] rounded overflow-hidden bg-gray-100 border">
              {(() => {
                const src = encodeURI(images[2]);
                return <Image src={src} alt="Employment" width={800} height={600} className="object-cover" unoptimized />;
              })()}
            </div>
            <div className="mt-4 flex-1 flex flex-col">
              <h3 className="text-lg font-medium">Employment</h3>
              <p className="mt-2 text-gray-700">Interested in working at Garber Bros? Download our employment application.</p>
              <div className="mt-4 flex flex-col gap-2">
                <a href="/websites/garberbrosinc/images/application.pdf" className="text-sm text-blue-700">View Our Employment Application »</a>
                <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="text-sm text-blue-700">Apply Online</a>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col h-full">
            <div className="aspect-[4/3] rounded overflow-hidden bg-gray-100 border">
              {(() => {
                const src = encodeURI(images[3]);
                return <Image src={src} alt="Contact Garber Bros" width={800} height={600} className="object-cover" unoptimized />;
              })()}
            </div>
            <div className="mt-4 flex-1 flex flex-col">
              <h3 className="text-lg font-medium">Contact Us</h3>
              <p className="mt-2 text-gray-700">To contact Garber Bros Inc regarding vessel availability, click here.</p>
              <div className="mt-4 flex flex-col gap-2">
                <a href="/contact" className="text-sm text-blue-700">Contact Garber Bros Inc »</a>
                <a href="contact.aspx" className="text-sm text-blue-700">Contact (alternate)</a>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Gallery / Secondary Images */}
      <section aria-labelledby="gallery">
        <h2 id="gallery" className="text-2xl font-semibold">Gallery</h2>
        <p className="mt-2 text-gray-700">Photographs of our fleet and operations.</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.isArray(images) ? (Array.isArray(images) ? images : []).map((img, idx) => {
            const safeSrc = encodeURI(img);
            const altMap: Record<number,string> = {
              0: 'Garber Bros logo',
              1: 'Vessels',
              2: 'Employment application image',
              3: 'Contact image'
            };
            return (
              <div key={idx} className="rounded border overflow-hidden bg-gray-50">
                <Image src={safeSrc} alt={altMap[idx] ?? 'Garber image'} width={600} height={450} className="object-cover w-full h-full" unoptimized />
              </div>
            );
          }) : null}
        </div>
      </section>

      {/* Contact / Small Form (visual only) */}
      <section aria-labelledby="contact" className="py-6">
        <h2 id="contact" className="text-2xl font-semibold">Get in touch</h2>
        <p className="mt-2 text-gray-700">Reach out for vessel availability and service inquiries.</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Card>
              <form>
                <div className="space-y-3">
                  <Input label="Name" name="name" />
                  <Input label="Email" name="email" type="email" />
                  <Input label="Message" name="message" type="text" />
                  <div className="pt-2">
                    <Button href="/contact">Contact Us</Button>
                  </div>
                </div>
              </form>
            </Card>
          </div>
          <div>
            <Card>
              <h3 className="text-lg font-medium">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/about" className="text-blue-700">About Us</a></li>
                <li><a href="/lock-status" className="text-blue-700">Lock Status</a></li>
                <li><a href="/barges" className="text-blue-700">Barges</a></li>
                <li><a href="/transparency-in-coverage" className="text-blue-700">Transparency in Coverage</a></li>
                <li><a href="#" className="text-blue-700">Back to top</a></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
