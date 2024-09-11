import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/linksHeader.scss"
import {classNames} from "../util/lang";
import {i18n} from "../i18n";
// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import darkmodeScript from "./scripts/darkmode.inline"
import { version } from "../../package.json"
import styles from "./styles/darkmode.scss"
import Darkmode from "./Darkmode";
import * as Component from "./index";

interface Options {
    links: Record<string, string>
}

export default (() => {
    const LinksHeader: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
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
            <a href=""></a>
          </span>
                    <span>
            <img src=""></img>
            <a href=""></a>
          </span>
                    <span>
            <img src=""></img>
            <a href=""></a>
          </span>
                </div>
                <hr style="background-color: var(--lightgray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
            </div>
        )
    }

    LinksHeader.css = style
    return LinksHeader
}) satisfies QuartzComponentConstructor