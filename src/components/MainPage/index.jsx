import React from "react";
import { useData } from "../context/ThemeContext";
import Header from "./Header";
import Search from "./Search";
import Content from "./Content";

// Import the GitHub icon from react-icons
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex items-center justify-center h-16">
      <p className="mr-2">Made by Yared  ♞</p>
      <a href="https://github.com/theHabesa1" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
    </footer>
  );
}

function MainPage() {
  const { theme, font } = useData();

  return (
    <div className={`min-h-screen ${font === 'sans-serif' ? 'font-sans-serif' : font === 'serif' ? 'font-serif' : 'font-mono'} ${theme ? "bg-dark" : "bg-light"}`}>
      <div className={`container mx-auto max-w-[737px] px-10 md:px-0 py-10`}>
        <Header />
        <Search />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;