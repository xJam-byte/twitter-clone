import React, { useState } from "react";

function Home() {
  const [isButtonActive, setIsButtonActive] = useState(true);

  return (
    <div className="home_page">
      <div className="mini-header">
        <p>Home</p>
        <div className="buttons">
          <button>For you</button>
          <button>Following</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
