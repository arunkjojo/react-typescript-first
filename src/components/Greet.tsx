type GreetProps = {
    name: string,
    count?: number,
    isLogged: boolean
}

const Greet = (props: GreetProps) => {
  const { count = 0 } = props;
  return (
    <div>
        <h2>{props.isLogged ? `Welcome ${props.name}! You have ${count} unread messages` : 'Welcome Guest'}</h2>
    </div>
  )
}

export default Greet