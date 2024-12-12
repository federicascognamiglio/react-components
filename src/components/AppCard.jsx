import AppButton from "./AppButton";

function AppCard() {
    return (
        <div className="card">
            <div className="row">
                <div className="col-60">
                    <img src="/images/placeholder.JPG" alt="" />
                </div>
                <div className="col-40">
                    <div className="description">
                        <h4 className="title">Titolo del Post</h4>
                        <p className="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio et voluptates eveniet earum iusto? Accusantium harum cum, ullam explicabo repudiandae consequuntur quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis quod nostrum id suscipit.</p>
                        <AppButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppCard;