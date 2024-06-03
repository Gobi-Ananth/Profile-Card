import propType from 'prop-types';

const userData = [
  {
    'isOnline': false,
    'image': 'images/1.jpeg',
    'name': 'Amit Sharma',
    'city': 'Mumbai',
    'description': 'Frontend developer',
    'skills': ['UI / UX', 'Frontend developer', 'HTML', 'CSS', 'JavaScript', 'React', 'Node']
  },
  {
    'isOnline': true,
    'image': 'images/2.jpeg',
    'name': 'Sneha Gupta',
    'city': 'Delhi',
    'description': 'FullStack developer',
    'skills': ['Django', 'Express', 'MongoDb', 'JavaScript', 'React', 'Node']
  },
  {
    'isOnline': false,
    'image': 'images/3.jpeg',
    'name': 'Vikram Singh',
    'city': 'Bangalore',
    'description': 'Backend developer',
    'skills': ['python', 'Backend developer', 'Django', 'flask', 'MongoDb', 'Express', 'Node']
  }
];

function User (props) {
  return (
    <div className="card-container">
      <span className={props.isOnline ? "status online" : "status ofline"}>{props.isOnline ? "ONLINE" : "OFLINE"}</span>
      <img src={props.image} alt="user" className="img" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {
            props.skills.map((skill, index) => (<li key={index}>{skill}</li>))
          }
        </ul>
      </div>
    </div>
  );
}

export default function () {
  return (
    <>
      {
        userData.map((user, index) => (
          <User key={index} isOnline={user.isOnline} image={user.image} name={user.name} city={user.city} description={user.description} skills={user.skills} />
        ))
      }
    </>
  )
}

User.propType = {
  isOnline: propType.bool.isRequired,
  image: propType.string.isRequired,
  name: propType.string.isRequired,
  city: propType.string.isRequired,
  description: propType.string.isRequired,
  skills: propType.arrayOf(propType.string).isRequired,
}
