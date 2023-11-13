import Button from '../utility/Button';

const Profile = () => {
    return (
        <div className='profile'>
            <img src="https://avatars.githubusercontent.com/u/100000?v=4" alt="profile" />
            <div className='profile-header'>
                <h1>John Doe</h1>
                <h2>Web Developer</h2>
                <a href="https://www.google.com">https://www.google.com</a>
            </div>
            <div className='profile-links'>
                <Button source="Email" children="Email"  />
                <Button source="Linkedin" children="Linkedin" />
                <Button source="Github" children="Github" />
            </div>
        </div>
    );
}

export default Profile;