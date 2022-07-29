import {PersonProps} from '../types';

const Person = (props: PersonProps) => {
  return (
    <h2>{props.name.firstName} {props.name.lastName}</h2>
  )
}

export default Person