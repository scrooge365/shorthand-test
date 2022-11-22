import React from "react";
import "./App.css";
import { Shorthand } from "./Shorthand";

function App() {
  const [story, setStory] = React.useState<number>(1);

  const data = [
    {
      src: "https://christies.shorthandstories.com/21486-dubai-private-sale-block-party-nfts/embed.js",
      "data-shorthand":
        "//christies.shorthandstories.com/21486-dubai-private-sale-block-party-nfts",
    },
    {
      src: "https://christies.shorthandstories.com/20281-trespassing-nft-feature/embed.js",
      "data-id": "DuEKBggv8N",
    },
  ];

  return (
    <div className="App">
      <header style={{ paddingBottom: 40 }}>
        <h1>SHORTHAND TEST</h1>
        <button onClick={() => setStory(story === 1 ? 0 : 1)}>
          set story number {story === 0 ? 1 : 0}
        </button>
      </header>
      <Shorthand {...data[story]} />
    </div>
  );
}

export default App;
