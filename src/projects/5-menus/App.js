import React, { useState } from 'react'
import Menu from "./Menu"
import Categories from "./Categories"
import data from "./data"

const categories = ["all", ...new Set(data.map(d => d.category))] // making it dynamic and unique

const App = () => {
    const [menuItems, setMenuItems] = useState(data)

    const filterItems = (category) => {
        setMenuItems(category === "all" ? data : data.filter(item => item.category === category))
    }

    return <main>
        <section className="menu-section">
            <div className="title">
                <h2>Our menu</h2>
                <div className="underline"></div>
            </div>
            <Categories filterItems={filterItems} categories={categories} />
            <Menu menuItems={menuItems} />
        </section>
    </main>
}

export default App
