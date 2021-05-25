import React, { useEffect, useState } from "react";

const siteTitle = "Website Title";
const leftMenu = ["Songs", "Albums", "Artists"];
const rightMenu = ["Browse", "Contact", "Login"];

export const NavBar: React.FC = () => {
  let listener: any = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled: any | null = document.scrollingElement?.scrollTop;
      if (scrolled >= 10) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <div
      className={
        "navbar__holder" +
        " navbar__nav-" +
        (scrollState === "top" ? "top" : "scroll")
      }
    >
      <div className="navbar__wrapper">
        <nav className="navbar__left-menu">
          <ul className="navbar__list navbar__left-list">
            {leftMenu.map((item) => (
              <li className="navbar__list-item">
                <button aria-label={item} className="navbar__list-link">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar__logo-wrapper">
          <a className="navbar__logo-link" href="/">
            <h1 className="navbar__logo">{siteTitle}</h1>
          </a>
        </div>
        <nav className="navbar__right-menu">
          <ul className="navbar__list navbar__right-list">
            {rightMenu.map((item) => (
              <li className="navbar__list-item">
                <button aria-label={item} className="navbar__list-link">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar__mobile">
          <span className="navbar__hamburger-menu">
            <span className="navbar__icon-line">–</span>
            <span className="navbar__icon-line">–</span>
            <span className="navbar__icon-line">–</span>
          </span>
        </div>
      </div>
    </div>
  );
};
