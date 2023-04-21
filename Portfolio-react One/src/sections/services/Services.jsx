import data from './deta'
import Card from '../../component/Card'
import './Services.css'

const services = () => {
  return (
    <section id="services">
    <h2>My Services</h2>
    <p>I give you the best in oll services below</p>
    <div className="container service__container">
    {
      data.map(item => (      
        <Card key={item.id} className="service light">
          <div className="service__icon">{item.icon}</div>
          <div className="service__details">
            <h4>{item.title}</h4>
              <p>{item.desc}</p>
          </div>
        </Card>
      ))
    }
    </div>
    </section>
  )
}

export default services
