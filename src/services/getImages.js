import axios from "axios"

export const getImages = async(name, pageNumber) => {
    const apiKey = '45253433-ec0af2f2f10e386df5a784ffb'
    const searchParams = new URLSearchParams({
        key: apiKey,
        q: name,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: pageNumber,
        per_page: 12
    })

    const url = `https://pixabay.com/api/?${searchParams}`
    const response = await axios.get(url)
    return response.data
}