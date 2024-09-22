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
            <a href="/">
                <img src=""></img>
                Home
            </a>
          </span>
                    <span>

            <a href="/About">
                <img src=""></img>
                About</a>
          </span>
                    <span>

            <a href="/Lecture-Notes/Lecture-Notes">
                <img src=""></img>
                Lecture Notes</a>
          </span>
                    <span>
            <a href="">
                <img src=""></img>
            </a>
          </span>
                    <span>
            <a href="">
                <img src=""></img>
            </a>
          </span>
                    <span>
            <a href="">
                <img src=""></img>
            </a>
          </span>
                </div>
                <hr style="background-color: var(--lightgray); border-top: 0.8px var(--lightgray) solid; margin-top: 1.3rem"></hr>
            </div>
        )
    }

    LinksHeader.css = style
    return LinksHeader
}) satisfies QuartzComponentConstructor