var socials = [
    {
        name: 'facebook',
        link: 'https://www.facebook.com/CodeYourFuture.io/',
        icon: 'fa-brands fa-facebook-f'
    },
    {
        name: 'twitter',
        link: 'https://twitter.com/CodeYourFuture',
        icon: 'fa-brands fa-twitter'
    },
    {
        name: 'instagram',
        link: 'https://www.instagram.com/codeyourfuture_/',
        icon: 'fa-brands fa-instagram'
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/codeyourfuture/',
        icon: 'fa-brands fa-linkedin-in'
    }
];

const Socials = () => {
    return (
        <div>
            {socials.map((social) => (
                <a href={social.link} target="_blank" rel="noreferrer">
                    <i className={social.icon}></i>
                </a>
            ))}
        </div>
    );
}

export default Socials;