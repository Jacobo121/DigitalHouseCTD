const personalInformation = {
    personalData: {
        name: "Johnny",
        lastname: "Depp",
        age: 44,
        nationality: "American",
        residence: "France",
        occupation: "Actor / Producer",
        avatar: "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg"
    },
    experience: [
        { id: 1, movie: "Pirates of the Caribbean"},
        { id: 2, movie: "Edward Scissors hand"},
        { id: 3, movie: "Johnny Brasco"}
    ],
    education: [
        { id: 1, institute: "University of Arts."},
        { id: 2, institute: "University UCLA"},
        { id: 3, institute: "University of Paris"}
    ],
    bio: "I am a person like everyone else, trying to have a normal life whilst doing the things that make me happy"
}

const Header = () => {
    return (
        <header id="header">
            <nav style={{width: "100%"}}>
                <ul id="items">
                    <li className="liPoint">Home</li>
                    <li className="liPoint">About</li>
                    <li className="liPoint">Career</li>
                    <li className="liPoint">Education</li>
                </ul>
            </nav>
        </header>
    )
};

const List = ({text}) => {
    return (
        <li>{text}</li>
    )
}

const {experience} = personalInformation;
const {education} = personalInformation;

const Info = ({name, nationality, age, occupation, avatar, lastname, bio}) => {
    return (
        <div className="info">
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <div>
                <h2>Personal Information:</h2>
                <p>Name: {name}</p>
                <p>lastname: {lastname}</p>
                <p>Nationality: {nationality}</p>
                <p>Age: {age}</p>
                <p>Ocuppation: {occupation}</p>

                <p>experience in movies: </p>
                <ul>
                    {
                        experience.map(item => 
                            <List 
                                key={item.id}
                                text={item.movie}
                            />
                        )
                    }
                </ul>

                <p>Education: </p>
                <ul>
                    {
                        education.map(item => 
                            <List 
                                key={item.id}
                                text={item.institute}
                            />
                        )
                    }
                </ul>

                <p className="bio" >Bio: {bio}</p>   
            </div>
        </div>
    )
}

const App = (
        <div>
            <Header />

            <Info 
                name={personalInformation.personalData.name}
                lastname={personalInformation.personalData.lastname}
                nationality={personalInformation.personalData.nationality}
                age={personalInformation.personalData.age}
                occupation={personalInformation.personalData.occupation}
                avatar={personalInformation.personalData.avatar}
                bio={personalInformation.bio}
            />
        </div>
);

const htmlElement = document.getElementById("root");

ReactDOM.render(App, htmlElement);