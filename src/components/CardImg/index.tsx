import './styles.css';
import car from '../../assets/car.png';

export default function CardImg() {
    return(
        <div className='carCard'>
            <img src={car} alt="Carro" />
            <h3>Lorem ipsum dolor</h3>
        </div>
    )
}