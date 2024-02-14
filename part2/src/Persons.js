const Persons = ({persons, filter}) => {
    return(
        <div>
            <h3>Persons</h3>
            <ul>
                {persons
                .filter((person) => {
                return person.name.toLowerCase().startsWith(filter.toLowerCase())
                })
                .map((person) => {
                return(
                    <li key={person.id} >{person.name}, {person.phone}</li>
                )
                })}
            </ul>
        </div>
    )
}

export default Persons;