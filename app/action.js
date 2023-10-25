"use server"

export async function getUser() {
    const calon = await prisma.kandidat.findMany();
}