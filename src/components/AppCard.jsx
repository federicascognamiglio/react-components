import AppButton from "./AppButton";
import style from "./AppCard.module.css";

function AppCard() {
    return (
        <div className={style.card}>
            <div className={style.row}>
                <div className={style.col-60}>
                    <img src="/images/placeholder.JPG" alt="" />
                </div>
                <div className={style.col-40}>
                    <div className={style.description}>
                        <h4 className={style.title}>Titolo del Post</h4>
                        <p className={style.caption}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio et voluptates eveniet earum iusto? Accusantium harum cum, ullam explicabo repudiandae consequuntur quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis quod nostrum id suscipit.</p>
                        <AppButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppCard;