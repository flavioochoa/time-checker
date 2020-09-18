export const genericSetToStateValue = (e, setStateReference) => {
    let { value, dataset } = e.target;
    let { key } = dataset;
    setStateReference.setState({ [key]: value })
}

export const isEmpty = (str) => {
    return !str || 0 === str.length ||  /^\s*$/.test(str) || !str.trim()
}