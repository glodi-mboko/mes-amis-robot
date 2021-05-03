import Robot from './Robot'

const ListRobot = ({robots}) => {
    
    console.log(robots)
    return (
        <div className='container-robot'>
            {
                robots.map(({name, email}, index)=>(
                    <Robot key={index} id={index} nameRobot={name} mailRobot={email}/>
                ))
            }
        </div>
    );
}

export default ListRobot;
