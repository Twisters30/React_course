import StarIcon from './assets/star.svg?react'
import LogoIcon from './assets/stair.svg?react'
import './styles.css'
import {RestaurantsView} from "./pages/RestaurantsView";

function App() {
  return (
    <>
      <header>
        <div className="flex-container">
	        <div className="logo">
		        <LogoIcon width={16} height={16} className="logo__icon" />
		        <span>Eats</span>
	        </div>
	        <div className="profile">
		        <img alt="profile" src="/avatar.png" />
	        </div>
        </div>
      </header>
      <main>
        <div className={'container'}>
	        <section>
		        <RestaurantsView />
	        </section>
        </div>
      </main>
      <footer>
        <div className="flex-container">
	        <p>Privacy Policy</p>
	        <p className="corporation">2022 Eats</p>
	        <p>Terms Of Service</p>
        </div>
      </footer>
    </>
  )
}

export default App
