import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // const allMovies = await prisma.movie.findMany()
    // console.log(allMovies)

    await prisma.movie.create({
        data: {
            movieTitle: 'The Dark Knight Rises',
            movieDate: '2012-01-01T00:00:00Z',
            moviePlatform: 'Apple TV',
            genres: {
                create: { genreName: 'Action' },
            },
            studios: {
                create: {
                    studioName: 'Warner Bros. Pictures',
                    studioCountry: 'USA',
                },
            },
        },
    })

    const allMovies = await prisma.movie.findMany({
        include: {
            genres: true,
            studios: true,
        },
    })
    console.dir(allMovies, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
