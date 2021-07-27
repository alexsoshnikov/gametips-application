import classes from "../../styles/components/SearchField.module.scss";

export const SearchField = props => {
    return (
        <form className={classes.SearchField}>
            <input
                type="search"
                placeholder="Search"
                // onFocus={props.onFocusHandler}
                // onBlur={props.onBlurHandler}
                ref={props.searchRef}
            />
        </form>
    )
}
