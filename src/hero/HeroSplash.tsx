import * as React from "react";
import { Button } from "../button/Button";
import { setViewHeight } from "../utils/setViewHeight";

// interface HeroSplashProps {

// }

setViewHeight();

export const HeroSplash: React.FC = () => {
  return (
    <section id="hero__">
      <div className="hero__splash">
        <div className="hero__content">
          <h1 className="hero__splash-text">Welcome to my new website</h1>
          <div className="hero__button-row">
            <Button>Push me</Button>
            <Button variant="filled">Push me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
