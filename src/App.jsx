import React, { useEffect } from "react";
import { fetchBrews, getBrews, getFilms, fetchFilms } from "./services/promise-me";


export default function App() {
  useEffect(() => {
    fetchFilms();
  });

  useEffect(() => {
    getFilms();
  });

  useEffect(() => {
    fetchBrews();
  });

  useEffect(() => {
    getBrews();
  });

  return <h1>Hello World</h1>;
}
