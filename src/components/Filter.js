import React from "react";

function Filter({
    sortBy,
    onChangeSortBy,
    showGreased,
    onChangeShowGreased
}){
    function handleChangeSortBy(e){
        onChangeSortBy(e.target.value)
    }
    function handleToggleGreased(e){
        onChangeShowGreased(e.target.value)
    }
    return(
        <div className="filterWrapper">
            <div className="ui menu">
                <div className="ui item">
                    <label>Sort By</label>
                </div>
                <div className="ui item">
                    <select className="ui selection dropdown"
                    name="sort"
                    onChange={handleChangeSortBy}
                    value={sortBy}>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>

                </div>
                <div className="ıi item">
                    <label>Greased Pigs Obly?</label>
                </div>
                <div className="ıi item">
                    <input
                    className="ui toggle checkbox"
                    checked={showGreased}
                    onChange={handleToggleGreased}
                    type="checkbox"></input>
                </div>
            </div>
        </div>
    )
}
export default Filter