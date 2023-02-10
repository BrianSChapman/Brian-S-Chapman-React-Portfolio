import React from "react";
import petPlayDate from "../Images/petPlayDate.png";
import monster from "../Images/monster-dashboard-snippet.png";
import wordOfMyLife from "../Images/wordOfMyLife.png";
import textEditor from "../Images/textEditor.png";
import githubIcon from "../Images/githubIcon.png";
import herokuLogo from "../Images/herokulogo.png";
import ProjectCard from "../Components/ProjectCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="container">
      <h1 className="text-center">Projects</h1>
      <p className="text-center mt-2 pb-2">
        (Click the image for deployment or the icon to check out the codebase)
      </p>
      <div className="row">
        <ProjectCard
          title="Pet Play Date"
          img={petPlayDate}
          Alt="Pet Play Date App Screenshot"
          description="Collaboration on a full-stack app. Create a profile for your pet, match profiles with other pet owners in your area, and schedule pet play dates!"
          githubLink="https://github.com/BrianSChapman/pet-playdate"
          deployment="https://salty-sierra-16506.herokuapp.com/"
        />
        <ProjectCard
          title="My Friendly Monster"
          img={monster}
          Alt="My Friendly Monster App Screenshot"
          description="A collaborative project utilizing a MERN stack (With GraphQL & Apollo for querying and database communication). Adopt a monster as a pet and interact with it online."
          githubLink="https://github.com/BrianSChapman/my-friendly-monster"
          deployment="https://radiant-garden-89222.herokuapp.com/"
        />
        <ProjectCard
          title="Word of My Life"
          img={wordOfMyLife}
          Alt="Word of My Life App Screenshot"
          description="Collaborative effort. Log on to the app to receive a word of the day along with any relevant media related to it (Movie, books, video games). Making learning a new word fun!"
          githubLink="https://github.com/BrianSChapman/word-of-my-life"
          deployment="https://brianschapman.github.io/word-of-my-life/"
        />
        <ProjectCard
          title="Not Another Text Editor"
          img={textEditor}
          Alt="Text Editor Screenshot"
          description="Progressive web app text editor that can be installed onto your device, giving the user functionality even when offline."
          githubLink="https://github.com/BrianSChapman/textual-healing"
          deployment="https://limitless-oasis-11120.herokuapp.com/"
        />
      </div>
    </section>
  );
}
