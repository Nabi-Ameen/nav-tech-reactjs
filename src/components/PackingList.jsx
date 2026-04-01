import { FaCheck } from "react-icons/fa";

function Item({ name, isPacked }) {
    // if (isPacked) {
    //     return <li className="item">{name} <FaCheck /> </li>;
    // }else {
    //      return <li className="item">{name}</li>;
    //  }

    return (
        <div>
            { isPacked && (
                <li className="item">{name} <FaCheck /> </li>
            )}
        </div>
    )
}

const PackingList = () => {
    return (
        <section style={{ marginLeft: 140 }}>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={false}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={true}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}

export default PackingList