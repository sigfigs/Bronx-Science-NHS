const Outside = props => {
  const name = props.name;
  const description = props.description;
  const link = props.link;

  return (
    <div>
      <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
        {name}
      </h2>
      <p>{description}</p>
      <br></br>
      <p>
        More information{" "}
        <a style={{ color: "#04a089" }} href={link} target="_blank">
          here.
        </a>
      </p>
    </div>
  );
};

export default Outside;
