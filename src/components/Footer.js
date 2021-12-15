import React from 'react';
import { GoMarkGithub, GoMail } from "react-icons/go";

function Footer() {

    return (
      <div className="footer">
        <h5>fpcschoonenberg</h5>
        <a
          href="https://github.com/FpcSchoonenberg/studentdashboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMarkGithub className="icon_footer" />
        </a>
        <a href="mailto:fpcschoonenberg@hotmail.com">
          <GoMail className="icon_footer" />
        </a>
      </div>
    );
  }

export default Footer;
