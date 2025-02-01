import {
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  MailIcon,
  Phone,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col bg-blue-600 pb-4">
      <div className="flex flex-col sm:flex-row md:flex-row gap-3 justify-around p-4 border-t">
        <div className="flex flex-col gap-4">
          <section className="text-2xl font-serif font-bold text-white">
            ELECTRO
          </section>
          <section>
            <span className="flex gap-2">
              <FacebookIcon />
              <InstagramIcon />
              <Linkedin />
            </span>
          </section>
          <section>@kouamenelsongmail.com</section>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-xl font-mono text-white">
            Get to know
          </span>
          <span className="flex flex-col gap-2">
            <p>About us</p>
            <p>News & blog</p>
            <p>careers</p>
            <p>Contact us</p>
            <p>How to shop</p>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold font-mono text-white">
            Order returns
          </span>
          <span className="flex flex-col gap-2">
            <p>shopping discovery</p>
            <p>Retturn exchange</p>
            <p>selling tips</p>
            <p>
              <>track order</>
            </p>
            <p>payment</p>
          </span>
        </div>
        <div className="flex flex-col text-xl gap-4">
          <section className="text-xl font-bold text-white">Contact</section>
          <section className="flex flex-col gap-4">
            <span className="flex flex-col gap-4">
              <small className="flex gap-3">
                <MailIcon />
                <aside>john@gmail.com</aside>
              </small>
              <small className="flex gap-3">
                <Phone />
                <aside>telephone</aside>
              </small>
            </span>
          </section>
        </div>
      </div>
      <div className="border-t-2 text-center flex gap-2 justify-center italic">
        <span>Nelson12</span>
        <span>email:kouamenelson47@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
