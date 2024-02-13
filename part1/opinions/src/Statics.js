
const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td> 
    </tr>
  )
}

function Statics(props) {
    
    const good = props.good;
    const neutral = props.neutral;
    const bad = props.bad;

    const all = good + neutral + bad;
    const positive = (good / all) * 100;
  
  return (
    <div className="Statics">
      <h1>Statics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <tr>
            <td>all</td> 
            <td>{all}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive}%</td> 
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default Statics;
