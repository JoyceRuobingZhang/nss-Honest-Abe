import { getPoliticans } from "./dataAccess.js"

export const Politician = () => {

    const politicians = getPoliticans()

    let html = ""
    html += politicians.map(politician => {
        return `
            <section class="politician">
                <header class="politician__name">
                    <h3>${politician.firstName} ${politician.lastName}</h3>
                </header>
                <div class="politician__info">
                    <div>Age: ${politician.age}</div>
                    <div>Represents: ${politician.district}</div>
                </div>
            </section>`
    }).join("")

    return html
}