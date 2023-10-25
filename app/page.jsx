import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
const prisma = new PrismaClient();

async function tambah(data){
  "use server"
  const ID = data.get('id')
  try {
    await prisma.kandidat.update({
      where: {id: 1},
      data: {
        jumlah: {
          increment: 1
        }
      }
    })
    revalidatePath('/')
  }
  catch (err) {
    console.log(err)
  }
}

export default async function Home() {
  const users = await prisma.kandidat.findMany();

  return (
    <div>
    <h1>woi lah cik</h1>
    <div className='shadow-md w-52 p-5 border border-black m-10'>
      {users.map((user) => (
         <div key={user.id}> 
          <div className=''>
            <h1 className='text-2xl font-bold '>{user.name}</h1>
            <p className='text-lg font-semibold '>{user.jumlah}</p>
            <q>{user.id}</q>
          </div>
          <div className='text-right'>
            <form action={tambah}>
              <input type="hidden" name="id" value={users.id}/>
              <button formAction={tambah} className='bg-indigo-600 px-3 py-1 rounded-xl text-white' type="submit">submit</button>
            </form>
          </div>
         </div>
      ))}
    </div>
    </div>
  );
}
