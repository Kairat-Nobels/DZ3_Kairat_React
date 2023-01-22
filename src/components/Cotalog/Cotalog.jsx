import Tovar from "./Tovar/Tovar"
import styles from './cotalog.module.css'
function Cotalog({ searchValue, countBasket, setCountBasket })
{
    const pizza = [
    { id: 1, name: '4 Сыра', price: 798, image: '../public/pizza1.png' },
    { id: 2, name: 'Барбекю', price: 788, image: '../public/pizza2.png' },
    { id: 3, name: 'Деревенская', price: 948, image: '../public/pizza3.png' },
    { id: 4, name: 'Классика', price: 728, image: '../public/pizza4.png' },
    { id: 5, name: 'Мегапепперони', price: 678, image: '../public/pizza5.png' },
    { id: 6, name: 'Мексиканка', price: 798, image: '../public/pizza6.png' },
    { id: 7, name: 'Куриная', price: 848, image: '../public/pizza7.png' },
    { id: 8, name: 'Шашлычная с говядиной', price: 828, image: '../public/pizza8.png' },
    { id: 9, name: 'Чили', price: 828, image: '../public/pizza9.png'},
    ]
    return(
        <div className={styles.cotalog}>
            {
                pizza.filter(obj =>
                {
                    if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) return true
                    return false
                }).map(p => <Tovar countBasket={countBasket} setCountBasket={setCountBasket} key={p.id} data={p} />).reverse()
            }
        </div>
    )
}
export default Cotalog