import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
export default function NavigationBar() {
  return (
    <div className={styles.header}>
      <h1>Navigation Bar</h1>
      <div className={styles.body}>
        <div>
          <img src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" />
        </div>
        <div className={styles.search}>
          <input
            type="search"
            placeholder="🔍Search movies, TV, actors, more..."
          />
        </div>

        <div className={styles.baby}>
          <div>
            <a href="#">What's the Tomatometer</a>
            <a href="#">Critics</a>
            <a href="#">LOGIN/SIGNUP</a>
          </div>
          <div className={styles.baby_p}>
            <p>movies</p>
            <p>TV shows</p>
            <p>movie trivia</p>
            <p>news</p>
            <p>showtimes</p>
          </div>
        </div>
      </div>
      <div className={styles.trending}>
        <div>
          <h2>TRENDING ON RT</h2>
        </div>
        <div>
          <Link href="#">The Super Mario Bros. Movie First Reviews</Link>
        </div>
      </div>
    </div>
  );
}
