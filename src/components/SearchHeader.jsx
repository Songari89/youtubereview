import React, { useState } from "react";
import styles from "./SearchHeader.module.css";
import {Link} from 'react-router-dom'
import { PiYoutubeLogoFill } from "react-icons/pi";
import { BiSearchAlt2 } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`)
    setText('');
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logobox}>
          <PiYoutubeLogoFill className={styles.logo} />
          <h2>Youtube</h2>
        </Link>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />{" "}
          {/*사용자가 입력과 동시에 text 업데이트*/}
          <button>
            <BiSearchAlt2 />
          </button>
        </form>
      </div>
    </header>
  );
}
