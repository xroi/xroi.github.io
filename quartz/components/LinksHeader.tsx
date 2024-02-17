import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
    links: Record<string, string>
}

export default (() => {
    function LinksHeader() {
        return (
            <div>
                <div id="links-header">
          <span>
            <img src=""></img>
            <a href="/">Home</a>
          </span>
                    <span>
            <img src=""></img>
            <a href="/About">About</a>
          </span>
                    <span>
            <img src=""></img>
            <a href="/Lecture-Notes/Lecture-Notes">Lecture Notes</a>
          </span>
                    <span>
            <img src=""></img>
            <a href="/">Temp</a>
          </span>
                    <span>
            <img src=""></img>
            <a href="/">Temp</a>
          </span>
                    <span>
            <img src=""></img>
            <a href="/">Temp</a>
          </span>
                </div>
                <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
            </div>
        )
    }

    LinksHeader.css = style
    return LinksHeader
}) satisfies QuartzComponentConstructor