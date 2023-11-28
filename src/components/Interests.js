let interests = [
    "Reading",
    "Writing",
    "Running"
];



const Interests = () => {
    return (
        <div className="container">
            <h2>Interests</h2>
            <p>
            {interests.map((interest) => (
                //if is last item, don't add comma
                `${interests[interests.length - 1] === interest ? interest + '.' : interest + ', '}`
            ))}
            </p>
        </div>
    );
}

export default Interests;