import styles from './tovar.module.css'
function Tovar({ data, countBasket, setCountBasket })
{
    let c = countBasket;
    const toBasket =(e) => {
        setCountBasket(++c)
        alert(`Пицца ${data.name} добавлена в корзину!\nЦена = ${data.price}`)
    }
    return (
        <div className={styles.tovar}>
            <img src={data.image} alt="pizza" className={`${styles.flyImg} ${styles.image}`} />
            <h3>{data.name} 40см</h3>
            <div>
                <p>Цена: <span> {data.price} cом</span></p>
                <button onClick={toBasket}>В Корзину</button>
            </div>
        </div>
    )
}
export default Tovar