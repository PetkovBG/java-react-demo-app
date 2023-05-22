import Hero from "../hero/Hero";

const Home = ({movies}) => {
    console.log("Movie here", movies);
    return (
        <Hero movies={movies} />
    )
}

export default Home;