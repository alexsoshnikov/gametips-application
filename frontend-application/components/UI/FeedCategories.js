import classes from "../../styles/components/FeedCategories.module.scss"
import {GameCategory} from "./GameCategory";
import {GameCategoriesState} from "../../context/gamecategories/state";

export const FeedCategories = () => {
    const games = new Array(20).fill('https://cdn.akamai.steamstatic.com/steam/apps/570/ss_b33a65678dc71cc98df4890e22a89601ee56a918.1920x1080.jpg?t=1624489008')

    return (
        <GameCategoriesState>
            <div className={classes.feedCategories}>
                <h3>Feed Categories</h3>
                <div className={classes.games}>
                    {
                        games.map((game, index) => {
                            return <GameCategory
                                key={index}
                                src={game}
                            />
                        })
                    }
                </div>

                <div className={classes.categories}>

                </div>
            </div>
        </GameCategoriesState>
    )
}