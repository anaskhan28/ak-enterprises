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
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main  className="container">
        <div   className="hero">
          <div className="info">
            <div className="welcome">Welcome To</div>
            <div className="name">
              <span>AK </span>
              Enterprise Group
            </div>
            <div className="text-info">
              <div className="text">
              We help banks maintain secure locker operations, compliant scrap disposal, and smooth branch shifting
               with trust and confidentiality.
              </div>
            </div>
            <div className="btn-learn">
            <button className="learn">
              <Link  href='#learnMore'>Learn More</Link>
              </button>
            </div>
          
          </div>
          <Image src={Hero} className="hero-img" />
        </div>
        <div className="line"></div>

        <section data-aos="fade-up" id="clients">
          <Companies />
          <div className="line"></div>
        </section>

        <section data-aos="fade-up" id="learnMore" className="section-2">
          <div className="line"></div>
          <div className="hero-2 hero">
            <div className="info-2 info">
              <div className="welcome intro ">
              Trusted Partner for Banks</div>
              <div className="name work">Shifting & Disposal</div>
              <div className="text-info">
                <div className="text text1">
                AK Enterprise Group is a trusted partner for bank locker AMC, vault door servicing, branch shifting, and confidential scrap disposal.
                We ensure operational continuity, compliance safety, and complete confidentiality inside every branch we serve.
                </div>
              </div>
              <div className="btn">
                <button className="service-btn"><Link href='/services'>Our Services</Link> </button>
                <button className="connect-btn"><Link href='/contact'>Request Branch Visit</Link></button>
              </div>
            </div>
            <Image src={Hero2} className="hero-img hero2-img" />
          </div>
        </section>

        <section data-aos="fade-up" className="section-feat">
          <div className="work">
            <Image className="work-img" src={Work} alt="work" />
            <div className="num">100%</div>
            <div className="work-about">
            Strict safety, confidentiality & compliance with bank protocols.            </div>
          </div>
          <div className="clients">
            <Image className="client-img" src={Clients} alt="clients" />

            <div className="num">100+</div>
            <div className="client">
            Locker AMC, vault servicing, scrap disposal & shifting projects.
            </div>
          </div>
        </section>

        <section data-aos="fade-up" id="process" className="process-section">
          <div className="process-heading">
            <div className="title">Process</div>
            <div className="about-title">How It Works</div>
          </div>
          <Image className="cloud-img" src={Cloud} />
          <div className="process">
           <Processes/>
          </div>
          <div className="process-buttons">
            <button className="button1"><Link href='/about'>About</Link></button>
            <span className="line3"></span>
            <span className="or">OR</span>
            <span className="line3"></span>
            <button className="button2"><Link href='/contact'>Enquiry</Link></button>
          </div>
          <Image className="cloud-img2" src={Cloud} />
        </section>
        <section data-aos="fade-up" id="work" className="work-section">
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
        <section data-aos="fade-up" id="review" className="testimony-section">
          <div className="heading">
            <div className="title">TESTIMONIALS</div>
            <div className="about-title">Clients review’s</div>
            <div className="about-desc">Our Clients varies from the singular party to enterprise level.</div>
          </div>
          <div className="customer-container">
          <div className="rect-slide">
         <ReviewCards/>
         
          </div>
          </div>
        </section>
        <section data-aos="fade-up" id="connect" className="interested">
          <Section
           title="WE WORK WITH BANKS"
           about="Secure Branch Operations"
           desc="We handle locker shifting, vault servicing, and confidential disposal
ensuring safe and smooth branch operations with zero disruption."
            button1="See More"
            button2="Let's Connect"
            link1='services'
            link2='contact'
           />
        </section>
      </main>
    </>
  );
}
