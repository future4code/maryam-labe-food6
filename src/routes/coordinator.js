export const goToLogin = (history) => {
    history.push("/login")
}
export const goToSignUp = (history) => {
    history.push("/cadastro")
}
export const goToAddAddress = (history) => {
    history.push("/cadastro-endereco")
}
export const goToFeed = (history) => {
    history.push("/")
}
export const goToRestaurantDetails = (history) => {
    history.push("/restaurantes/:restauranteId")
}
export const goToCart = (history) => {
    history.push("/carrinho")
}
export const goToProfile = (history) => {
    history.push("/perfil")
}
export const goToEditUser = (history) => {
    history.push("/perfil/dados")
}
export const goToEditAddress = (history) => {
    history.push("/perfil/endereco")
}

export const goBack = (history) => {
    history.goBack()
}

