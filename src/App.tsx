import CardImg from "./components/CardImg";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="cars-section">
          <h2>Venha nos visitar</h2>
          <CardImg/>
          <CardImg/>
        </section>
        <section className="comments-section">
          <h2>O que estão dizendo</h2>
          <Comments/>
          <Comments/>
          <Comments/>
          <Comments/>
          <Comments/>
          <Comments/>
        </section>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
