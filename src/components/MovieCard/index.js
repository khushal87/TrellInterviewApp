const MovieCard = (props) => {
  const { name, description, director, duration } = props;
  return (
    <div className="movie-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <h4>Directed by - {director}</h4>
      <strong>Duration - {duration} mins</strong>
    </div>
  );
};

export default MovieCard;
