const Social = (links, element='') => {
links.map(({url, text, className}) => 
    element+=`
    <a class="${className}" 
        href="https://${url}"
        target="_blank">
        ${text}
    </a>`
)
return element
}

module.exports = Social;