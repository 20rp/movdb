import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

exports.movies = function (req, res) {
    const allMovies = prisma.movie
        .findMany({
            include: {
                genres: true,
                studios: true,
            },
        })
        .then((allMovies) => {
            res.send(200)
        })
        .catch((err) => console.error(err))
}
