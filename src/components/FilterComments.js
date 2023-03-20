
const FilterComments = ({ setCommentSearchState, setSortCommentsState, videoDataState, setVideoDataState }) => {

    const handleSearchState = (event) => {
        setCommentSearchState(event.target.value);
    }

    const handleSortState = (event) => {
        const sortCat = event.target.value;
        sortCat === "sortBy" ?
        setSortCommentsState(true)
        : setSortCommentsState(sortCat)
    }

    return (
        <div style={{textAlign:"center"}}>
            <input type="text" placeholder="Search By User" style={{textAlign:"center"}} onChange={(event) => handleSearchState(event)}></input>
            <select name="sortComments" onChange={(event) => handleSortState(event)}>
                <option value="sortBy" name="sortBy">Sort Comments By...</option>
                <option value="most" name="most">Most Popular</option>
                <option value="least" name="least">Least Popular</option>
            </select>
        </div>
    )

}

export default FilterComments;