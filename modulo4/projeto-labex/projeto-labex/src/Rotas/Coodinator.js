export const homePage = (navigate) => {
    navigate('/')
}

export const tripList = (navigate) => {
    navigate('trip/list')
}

export const application = (navigate) => {
    navigate('/application')
}

export const loginPage = (navigate) => {
    navigate('/login')
}

export const adminHomePage = (navigate) => {
    navigate('/admin/trip/list')
}

export const createTripPage = (navigate) => {
    navigate('/admin/trips/create')
}

export const tripDetailsPage = (navigate) => {
    navigate('/admin/trip/:id')
}

export const toBack = (navigate) => {
    navigate(-1)
}