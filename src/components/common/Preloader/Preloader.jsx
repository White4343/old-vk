import preloaderGIF from '../../../assets/images/Spin-1s-200px.svg'
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={preloaderGIF}/>
    </div>
}

export default Preloader;