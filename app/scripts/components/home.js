/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";
import CardContainer from "./CardContainer";

class Home extends React.Component {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */
  
  render() {
    return (
      <section id="home">
        <div className="content">
          <div className="container">
            <CardContainer />
          </div>
        </div>
      </section>
    );
  }
}

// Export out the React Component
export default Home;

