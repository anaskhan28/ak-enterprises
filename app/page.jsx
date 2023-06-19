import "./home.scss";
import Image from "next/image";
import Hero from "../public/images/hero.png";
import Hero2 from "../public/images/hero2.png";
import Work from "../public/images/meter.png";
import Clients from "../public/images/user.png";
import Cloud from "../public/images/cloud.png";
import Section from "@/components/section/Section";
import { SlideCards } from "@/components/slide-cards/SlideCards";
import ReviewCards from "@/components/review-cards/ReviewCards";
import Processes from "@/components/processes/Processes";
import Companies from "@/components/companies/Companies";


export default function Home() {
  return (
    <>
      <main className="container">
        <div className="hero">
          <div className="info">
            <div className="welcome">Welcome To</div>
            <div className="name">
              <span>AK </span>
              Enterprises Solution
            </div>
            <div className="text-info">
              <div className="text">
                We are a trusted dealer of scrap materials, electronic scraps,
                wooden scraps, furniture, and provide efficient shifting and
                demolition services.
              </div>
            </div>
            <div className="btn-learn">
            <button className="learn">Learn More</button>
            </div>
          
          </div>
          <Image src={Hero} className="hero-img" />
        </div>
        <div className="line"></div>

        <section>
          <Companies />
          <div className="line"></div>
        </section>

        <section className="section-2">
          <div className="line"></div>
          <div className="hero-2 hero">
            <div className="info-2 info">
              <div className="welcome intro ">
                We are one of the leading compnay in
              </div>
              <div className="name work">Scrap & Shifting</div>
              <div className="text-info">
                <div className="text text1">
                  AK Enterprises is an established family run business in the
                  heart of Mumbai City dealing in all types of scrap metals. We
                  have strong commercial traders in India enabling us to pay the
                  best price possible. This means that we pay higher than our
                  competitors 99% of the time.
                </div>
              </div>
              <div className="btn">
                <button className="service-btn">Our Services</button>
                <button className="connect-btn">Connect with us</button>
              </div>
            </div>
            <Image src={Hero2} className="hero-img hero2-img" />
          </div>
        </section>

        <section className="section-feat">
          <div className="work">
            <Image className="work-img" src={Work} alt="work" />
            <div className="num">100%</div>
            <div className="work-about">
              Satisfactory work followed by rules and regulations
            </div>
          </div>
          <div className="clients">
            <Image className="client-img" src={Clients} alt="clients" />

            <div className="num">10000+</div>
            <div className="client">
              Total clients we have provided our services
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="process-heading">
            <div className="title">Process</div>
            <div className="about-title">How It Works</div>
          </div>
          <Image className="cloud-img" src={Cloud} />
          <div className="process">
           <Processes/>
          </div>
          <div className="process-buttons">
            <button className="button1">About</button>
            <span className="line3"></span>
            <span className="or">OR</span>
            <span className="line3"></span>
            <button className="button2">Enquiry</button>
          </div>
          <Image className="cloud-img2" src={Cloud} />
        </section>
        <section className="work-section">
          <div className="work-heading">
            <div className="title">Our work</div>
            <div className="about-title">Previous work report</div>
          </div>
          <div className="slide-container">
          <div className="rect-slide">
          <SlideCards/>
          </div>
          </div>
        </section>
        <section className="testimony-section">
          <div className="heading">
            <div className="title">TESTIMONIALS</div>
            <div className="about-title">Customer review’s</div>
            <div className="about-desc">Our customer varies from the singular party to enterprise level.</div>
          </div>
          <div className="customer-container">
          <div className="rect-slide">
         <ReviewCards/>
         
          </div>
          </div>
        </section>
        <section className="interested">
          <Section
           title="We buy & sell"
           about="We are interested"
           desc="Items include all types of metals like aluminium, copper, steel, brass and many more. We also deal 
           with old furniture items which inlcude, office furnitures, tables, chairs,
            home furnitures and many more."
            button1="See More"
            button2="Let's Connect"
           />
        </section>
      </main>
    </>
  );
}
