import css from './style.module.css';

export default function Notificaciones({ notificacion }: { notificacion: string}){
    return  <div className={css.nb}>
            <h1> { notificacion } </h1>
        </div>
}