import React from "react";

//Importing router from next
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div id="header">
        <div id="brand">
          <Link href="/">
            <a>
              <h1>AudioMind</h1>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        #header {
          display: flex;
          justify-content: center;
          background: white;
          box-shadow: 0px 6px 24px 0 rgba(0, 0, 0, 0.4);
          z-index: 999;
          border-bottom: 2px solid black;
          position: sticky;
        }

        #header #brand h1 {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Header;
