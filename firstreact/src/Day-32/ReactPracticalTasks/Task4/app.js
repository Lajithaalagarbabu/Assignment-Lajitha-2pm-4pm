import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <ProfileCard
        name="Ajith Kumar"
        role="Frontend Developer"
        email="ajith@gmail.com"
      />

      <ProfileCard
        name="Suresh"
        role="UI Designer"
        email="suresh@gmail.com"
      />

      <ProfileCard
        name="Ravi"
        role="Backend Developer"
        email="ravi@gmail.com"
      />
    </div>
  );
}

export default App;
