import './Styles/About.css'
import ws from '../assets/pngwing.com.png'
import ig from '../assets/ig.png'
import li from '../assets/li.png'
import x from '../assets/Twitter-X-Logo-PNG.png'

const About = () => {

    const myNumber = '+584143444564'

    const copyNumer = (event) => {

        event.preventDefault();

        const input = document.createElement('input')
        input.value = myNumber

        document.body.appendChild(input)
        input.select()

        document.execCommand('copy')
        document.body.removeChild(input)

        alert('Copied number!')
    }

    return (
        <div className="aboutMain">
            <div className="cardA">
                <div className="myFace">

                </div>
                <div className="myInfo">

                    <div className="name p">
                        <div className="arrow">
                        </div>
                        <h2>I am Ricardo!</h2>
                    </div>

                    <div className="from p">
                        <div className="arrow">                            
                        </div>
                        <h2>I am from Venezuela</h2>
                    </div>

                    <div className="study p">
                        <div className="arrow">                            
                        </div>
                        <h2>Currently studying systems engineering</h2>
                    </div>
                </div>

                <div className="contact">
                    <div className="cardCont">
                        <a href="" onClick={copyNumer}>
                            <img className='ws' src={ws} alt="whatsapp" />
                        </a>

                        <a target='_blank' href="https://instagram.com/ricardosumoza_27.thr?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">
                            <img className='ig' src={ig} alt="instagram" />
                        </a>

                        <a target='_blank' href="https://www.linkedin.com/in/ricardosumoza-2136aa240">
                            <img className='li' src={li} alt="linkedlin" />
                        </a>

                        <a target='_blank' href="https://twitter.com/therick_04?t=8wrudgPnL8pcbABQq1ON_Q&s=08">
                            <img className='x' src={x} alt="X" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About