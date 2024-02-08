function Avatar({person, size=100}) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile({scientist, size=70}){
  return(
    <section className="profile">
        <h2>{scientist.name}</h2>
        <Avatar
            person={{name: scientist.name, imageId: scientist.imageId}}
            size={70} />
        <ul>
          <li>
            <b>Profession: </b>
            {scientist.profession}
          </li>
          <li>
            <b>Awards: {scientist.awards.split(',').length} </b>
            ({scientist.awards})
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discovered}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        scientist={{name:'Maria Skłodowska-Curie', imageId:'szV5sdG', profession:'physicist and chemist', awards:'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal', discovered:'polonium (element)'}} 
        size = {70}
      />
      <Profile 
        scientist={{name:'Katsuko Saruhashi', imageId:'YfeOqp2', profession:'geochemist', awards:'Miyake Prize for geochemistry, Tanaka Prize', discovered:'a method for measuring carbon dioxide in seawater'}} 
        size = {70}
      />
    </div>
  );
}
