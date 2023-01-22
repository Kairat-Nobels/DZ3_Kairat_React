import styles from './basket.module.css';

function Basket({countBasket})
{
    return(
        <div className={styles.basket} data-product-count={countBasket}>
            <span>&#128722;</span>
        </div>
    )
}
export default Basket