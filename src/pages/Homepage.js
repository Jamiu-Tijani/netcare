import React from 'react';
import '../home.css';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillGooglePlusCircle } from 'react-icons/ai';
import { MdPayments } from 'react-icons/md';

const Homepage = () => (
  <>
    <header className="header">
      <nav className="topNav">
        <h3>NatCare</h3>
      </nav>
      <div className="headerCon">
        <h1>Work with an amazing design</h1>
        <p>
          We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play
          this game
        </p>
        <button>Create Account</button>

        <h5>Find US</h5>
        <div className="social">
          <AiFillFacebook className="icon" />
          <AiFillInstagram className="icon" />
          <AiFillTwitterCircle className="icon" />
          <AiFillGooglePlusCircle className="iconL" />
        </div>
      </div>
    </header>

    <section className="work">
      <div className="work1">
        <div className="work1Con">
          <div className="TextCont">
            <div className="TextCon">
              <MdPayments className="textIcon" />
              <h2>Fully integrated</h2>
              <p>We get insulted by others, lose trust for those We get back freezes</p>
            </div>
            <div className="TextCon">
              <MdPayments className="textIcon" />
              <h2>Fully integrated</h2>
              <p>We get insulted by others, lose trust for those We get back freezes</p>
            </div>
            <div className="TextCon">
              <MdPayments className="textIcon" />
              <h2>Fully integrated</h2>
              <p>We get insulted by others, lose trust for those We get back freezes</p>
            </div>
            <div className="TextCon">
              <MdPayments className="textIcon" />
              <h2>Fully integrated</h2>
              <p>We get insulted by others, lose trust for those We get back freezes</p>
            </div>
          </div>
          <div className="wokImgCap">

          <div className="wokImg">
            <div className="img">
              <img src="/assets/images/covers/test2.jpeg" alt="" />
            </div>
            <h3>Image</h3>
            <p>
              Website visitors today demand a frictionless user expericence — especially when using search. Because of
              the hight standards.
            </p>
            <button>find out more</button>
          </div>
          </div>
        </div>
      </div>
      <div className="wor2">
        <div className="wor2Con">
          <h1>The Executive Team</h1>
          <p>There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill.</p>

          <div className="worDiv">
            <div className="divTab">
              <div className="img">
                <img src="/assets/images/covers/test2.jpeg" alt="" />
              </div>
              <div>
                <h1>Emma Roberts</h1>
                <h3>UI Designer</h3>
                <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
              </div>
            </div>
            <div className="divTab">
              <div className="img">
                <img src="/assets/images/covers/test2.jpeg" alt="" />
              </div>
              <div>
                <h1>Emma Roberts</h1>
                <h3>UI Designer</h3>
                <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
              </div>
            </div>
            <div className="divTab">
              <div className="img">
                <img src="/assets/images/covers/test2.jpeg" alt="" />
              </div>
              <div>
                <h1>Emma Roberts</h1>
                <h3>UI Designer</h3>
                <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
              </div>
            </div>
            <div className="divTab">
              <div className="img">
                <img src="/assets/images/covers/test2.jpeg" alt="" />
              </div>
              <div>
                <h1>Emma Roberts</h1>
                <h3>UI Designer</h3>
                <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='spon'>
        j
      </div>
    </section>
  </>
);

export default Homepage;
