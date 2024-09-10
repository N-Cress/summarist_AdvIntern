"use client"

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState } from "react";
import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";
import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoPerson, IoPersonSharp } from "react-icons/io5";
import { RiLeafLine } from "react-icons/ri";



export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showNewAccount, setShowNewAccount] = useState(false);
  
  function toggleModal() {
    setShowModal(!showModal);
  }

  function toggleForgot() {
    setShowModal(!showModal);
    setShowForgotPassword(!showForgotPassword);
  }

  function toggleNewAccount() {
    setShowModal(!showModal);
    setShowNewAccount(!showNewAccount);
  }

  function closeAllModals() {
    if(showModal === true || showForgotPassword === true || showNewAccount === true) {
      setShowModal(false);
      setShowForgotPassword(false);
      setShowNewAccount(false);
    }
  }

  return (
    <body>
      {showModal && 
    <div onClick={closeAllModals} className="modal">
      <div className="modal_container"> 
        <div className="modal_x"> 
          <button className="modal_x-button" onClick={toggleModal}>  ╳ </button>
        </div>
        <div className="modal_header"> Log in to Summarist </div>
        <button className="modal_button button_guest"> 
          <IoPersonSharp size={24}/> 
          <div className="button_text-guest"> Login as a Guest</div>  
        </button>
        <div className="or_line"> 
          <div className="or_before-after"> </div>
          <span className="or"> or </span>
        </div>
        <button className="modal_button button_google"> 
          <img src="/assets/google.png" className="google-img" alt="google logo"/>
          <div className="button_text"> Login with Google</div>  
        </button>
        <div className="or_line"> 
          <span className="or"> or </span>
        </div>
        <form className="modal_form"> 
          <input className="modal_form-input" type="text" placeholder="Email Address" />
          <input className="modal_form-input" type="password" placeholder="Password" />
          <button className="modal_form-button">
            <div> Login   </div>
          </button> 
        </form>
        <div className="modal_forgot" onClick={toggleForgot}> Forgot your password? </div>
        <button onClick={toggleNewAccount} className="modal_newAccount"> Don't have an account? </button>
      </div> 
    </div>
      }
      {showForgotPassword && 
    <div className="modal">
      <div className="modal_container-forgot"> 
        <div className="modal_x"> 
          <button className="modal_x-button" onClick={closeAllModals}>  ╳ </button>
        </div>
        <div className="modal_header forgot_header"> Reset your password</div>
        <form className="modal_form"> 
          <input className="modal_form-input" type="text" placeholder="Email Address" />
          <button className="modal_form-button forgot_button">
            <div> Send reset password link  </div>
          </button> 
        </form>
        <button onClick={toggleForgot} className="modal_newAccount"> Go to login </button>
      </div> 
    </div>
      }
      {showNewAccount && 
    <div className="modal">
      <div className="modal_container-new"> 
        <div className="modal_x"> 
          <button className="modal_x-button" onClick={closeAllModals}>  ╳ </button>
        </div>
        <div className="modal_header "> Sign up to Summarist</div>
        <button className="modal_button button_google"> 
          <img src="/assets/google.png" className="google-img" alt="google logo"/>
          <div className="button_text"> Login with Google</div>  
        </button>
        <div className="or_line"> 
          <span className="or"> or </span>
        </div>
        <form className="modal_form"> 
          <input className="modal_form-input" type="text" placeholder="Email Address" />
          <input className="modal_form-input" type="password" placeholder="Password" /> 
          <button className="modal_form-button button-newaccount">
            <div> Sign up  </div>
          </button> 
        </form>
        <button onClick={toggleNewAccount} className="modal_newAccount"> Already have an account? </button>
      </div> 
    </div>
      }
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img className="nav__img" src="/assets/logo.png" alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <li onClick={toggleModal} className="nav__list nav__list--login">Login</li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <div className="landing__content">
              <div className="landing__content__title">
                Gain more knowledge <br className="remove--tablet" />
                in less time
              </div>
              <div className="landing__content__subtitle">
                Great summaries for busy people,
                <br className="remove--tablet" />
                individuals who barely have time to read,
                <br className="remove--tablet" />
                and even people who don’t like to read.
              </div>
              <button className="btn home__cta--btn">Login</button>
            </div>
            <figure className="landing__image--mask">
              <img src="/assets/landing.png" alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div className="container">
        <div className="row">
          <div className="section__title">Understand books in few minutes</div>
          <div className="features__wrapper">
            <div className="features">
              <div className="features__icon">
                <AiFillFileText />
              </div>
              <div className="features__title">Read or listen</div>
              <div className="features__sub--title">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="features">
              <div className="features__icon">
                <AiFillBulb />
              </div>
              <div className="features__title">Find your next read</div>
              <div className="features__sub--title">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div className="features">
              <div className="features__icon">
                <AiFillAudio />
              </div>
              <div className="features__title">Briefcasts</div>
              <div className="features__sub--title">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          <div className="statistics__wrapper">
            <div className="statistics__content--header">
              <div className="statistics__heading">Enhance your knowledge</div>
              <div className="statistics__heading">Achieve greater success</div>
              <div className="statistics__heading">Improve your health</div>
              <div className="statistics__heading">
                Develop better parenting skills
              </div>
              <div className="statistics__heading">Increase happiness</div>
              <div className="statistics__heading">
                Be the best version of yourself!
              </div>
            </div>
            <div className="statistics__content--details">
              <div className="statistics__data">
                <div className="statistics__data--number">93%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">96%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">90%</div>
                <div className="statistics__data--title">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
          <div className="statistics__wrapper">
            <div
              className="statistics__content--details statistics__content--details-second"
            >
              <div className="statistics__data">
                <div className="statistics__data--number">91%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>report feeling more productive</b>
                   after incorporating the service into their daily routine.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">94%</div>
                <div className="statistics__data--title">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">88%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>
            <div
              className="statistics__content--header statistics__content--header-second"
            >
              <div className="statistics__heading">Expand your learning</div>
              <div className="statistics__heading">Accomplish your goals</div>
              <div className="statistics__heading">Strengthen your vitality</div>
              <div className="statistics__heading">Become a better caregiver</div>
              <div className="statistics__heading">Improve your mood</div>
              <div className="statistics__heading">Maximize your abilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="reviews">
      <div className="row">
        <div className="container">
          <div className="section__title">What our members say</div>
          <div className="reviews__wrapper">
            <div className="review">
              <div className="review__header">
                <div className="review__name">Hanna M.</div>
                <div className="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                This app has been a <b>game-changer</b> for me! It's saved me so
                much time and effort in reading and comprehending books. Highly
                recommend it to all book lovers.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">David B.</div>
                <div className="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                I love this app! It provides
                <b>concise and accurate summaries</b> of books in a way that is
                easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Nathan S.</div>
                <div className="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.
                <b>The summaries are well-written and informative.</b>
                Definitely worth downloading.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Ryan R.</div>
                <div className="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                If you're a busy person who
                <b>loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide a great overview of the book's content.
              </div>
            </div>
          </div>
          <div className="reviews__btn--wrapper">
            <button className="btn home__cta--btn">Login</button>
          </div>
        </div>
      </div>
    </section>
    <section id="numbers">
      <div className="container">
        <div className="row">
          <div className="section__title">Start growing with Summarist now</div>
          <div className="numbers__wrapper">
            <div className="numbers">
              <div className="numbers__icon">
                <BiCrown />
              </div>
              <div className="numbers__title">3 Million</div>
              <div className="numbers__sub--title">Downloads on all platforms</div>
            </div>
            <div className="numbers">
              <div className="numbers__icon numbers__star--icon">
                <BsStarFill />
                <BsStarHalf />
              </div>
              <div className="numbers__title">4.5 Stars</div>
              <div className="numbers__sub--title">
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div className="numbers">
              <div className="numbers__icon">
                <RiLeafLine />
              </div>
              <div className="numbers__title">97%</div>
              <div className="numbers__sub--title">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="footer__top--wrapper">
            <div className="footer__block">
              <div className="footer__link--title">Actions</div>
              <div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Summarist Magazine</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Cancel Subscription</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Help</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Contact us</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Useful Links</div>
              <div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Pricing</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Summarist Business</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Gift Cards</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Authors & Publishers</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Company</div>
              <div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">About</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Careers</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Partners</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Code of Conduct</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Other</div>
              <div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Sitemap</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Legal Notice</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Terms of Service</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright--wrapper">
            <div className="footer__copyright">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
  );
}
