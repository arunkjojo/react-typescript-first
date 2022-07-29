import { Name } from '../types';

type PersonListProps = {
  names: Name[]
}
const PersonList = (props : PersonListProps) => {
  return (
    <div>
        {props.names.map(name => (
            <h2 key={name.firstName}>{name.firstName} {name.lastName}</h2>
        ))}
    </div>
  )
}

export default PersonList