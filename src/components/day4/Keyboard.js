import React, { useEffect, useState } from "react";
import "../../assets/day4/styles/index.css";
const Keyboard = () => {
  const keys = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "del",
    "Tab",
    "Q",
    "W",
    "E",
    "R",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "Caps",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ":",
    "'",
    "Enter",
    "shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    ",",
    ".",
    "/",
    "Shift",
  ];
  const [selectedKey, setSelectedKey] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [clickedKey, setClickedKey] = useState("");

  const onKeyClick = (e) => {
    console.log(e);
    e.preventDefault();
    if (e.key.toLowerCase().trim() === selectedKey.toLowerCase().trim()) {
      setIsCorrect(true);
      setIsIncorrect(false);
    } else {
      setClickedKey(e.key.toLowerCase().trim());
      setIsIncorrect(true);
    }
  };

  useEffect(() => {
    if (selectedKey === "" || isCorrect) {
      const randomIndex = Math.floor(Math.random() * keys.length + 1);
      const key = keys[randomIndex];
      console.log("Picked", key);
      setSelectedKey(key);
      setIsCorrect(false);
    }
    document.addEventListener("keydown", onKeyClick);

    return () => {
      document.removeEventListener("keydown", onKeyClick);
    };
  }, [selectedKey, isCorrect]);

  return (
    <div className="keyboard-container">
      <h1>Eyes on the screen</h1>
      <div className="keyboard-frame">
        {keys.map((key) => {
          let currentKeyClassName = "keyboard-key";

          if (key.toLowerCase().trim() === selectedKey.toLowerCase().trim()) {
            currentKeyClassName += " active";
          }

          if (
            isIncorrect &&
            clickedKey === key.toLowerCase().trim() &&
            clickedKey !== ""
          ) {
            currentKeyClassName += " incorrect";
          }

          if (
            key.toLowerCase().trim() === "tab" ||
            key.toLowerCase().trim() === "del"
          ) {
            currentKeyClassName += " medium bland-text";
          } else if (
            key.toLowerCase().trim() === "caps" ||
            key.toLowerCase().trim() === "enter"
          ) {
            currentKeyClassName += " large bland-text";
          } else if (key.toLowerCase().trim() === "shift") {
            currentKeyClassName += " larger bland-text";
          } else if (key.toLowerCase().trim() === "space") {
            currentKeyClassName += " extra-large colored-text";
          } else {
            currentKeyClassName += " regular colored-text";
          }

          return (
            <p key={key} className={currentKeyClassName}>
              {key.toUpperCase()}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
