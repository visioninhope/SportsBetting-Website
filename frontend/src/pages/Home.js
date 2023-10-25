import { useEffect, useState } from 'react'

// components
import GameDetails from '../components/GameDetails'

import axios from 'axios'

const Home = () => {
    const [game, setGame] = useState([{}])

    useEffect(() => {
        document.title = "Home"

        async function getNflData() {
            try {
                const response = await axios({
                  method: "GET",
                  url: "/home",
                })
            
                const res = response.data;
                console.log(res);
                setGame(res)
              } catch (error) {
                if (error.response) {
                  console.log(error.response);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                }
              }
            }

        getNflData()
    }, []) // This should update periodically, setInterval?
    

    // TODO: Display "no games today" if there are no games today
    return (
        <div className='parentDiv'>
                {game.map((gameItem, index) => (
                    <div key={gameItem.game_id} className='game-details-container'>
                        <GameDetails game={gameItem} />
                    </div>
                ))}
        </div>
    )
}

export default Home;