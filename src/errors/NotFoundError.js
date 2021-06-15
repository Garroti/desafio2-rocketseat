module.exports = function ResourceError(message = 'Usuario não encontrado') {
    this.name = 'notFoundError'
    this.message = message
}